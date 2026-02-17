/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };
type Mode = "cat" | "assistant";
type Props = {
  onSendAction: (
    message: string,
    history: Msg[],
    mode: Mode
  ) => Promise<string>;
  placeholder?: string;
  title?: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Minimal "safe-ish" markdown (no HTML):
 * - **bold**
 * - *italic*
 * - `inline code`
 * - [text](url)
 */
function renderInlineMarkdownNoNewlines(text: string) {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  let html = escape(text);

  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    `<a href="$2" target="_blank" rel="noreferrer" class="underline opacity-95 hover:opacity-100">$1</a>`
  );

  html = html.replace(
    /`([^`]+)`/g,
    `<code class="px-1 py-[1px] rounded bg-black/25">$1</code>`
  );
  html = html.replace(/\*\*([^*]+)\*\*/g, `<strong>$1</strong>`);
  html = html.replace(/\*([^*]+)\*/g, `<em>$1</em>`);

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function renderAssistantAsLines(content: string) {
  const out: Array<{ type: "text" | "code"; line: string }> = [];
  const re = /```(\w+)?\n([\s\S]*?)```/g;

  // removes normal whitespace + zero-width + BOM + NBSP
  const isTrulyBlank = (line: string) =>
    line.replace(/[\s\u00A0\u200B\u200C\u200D\uFEFF]/g, "") === "";

  let last = 0;
  let m: RegExpExecArray | null;

  const pushText = (t: string) => {
    const lines = t.replace(/\r/g, "").split("\n");
    for (const line of lines) {
      if (isTrulyBlank(line)) continue;

      // optional: keep terminal tidy (remove trailing spaces only)
      const cleaned = line
        .replace(/[\u00A0\u200B\u200C\u200D\uFEFF]/g, "")
        .trimEnd();
      if (isTrulyBlank(cleaned)) continue;

      out.push({ type: "text", line: cleaned });
    }
  };

  const pushCode = (t: string) => {
    const lines = t.replace(/\r/g, "").split("\n");
    for (const line of lines) {
      if (isTrulyBlank(line)) continue;

      // keep code spacing, just remove invisible chars + trailing whitespace
      const cleaned = line
        .replace(/[\u00A0\u200B\u200C\u200D\uFEFF]/g, "")
        .replace(/\s+$/g, "");
      if (isTrulyBlank(cleaned)) continue;

      out.push({ type: "code", line: cleaned });
    }
  };

  while ((m = re.exec(content)) !== null) {
    const idx = m.index;
    if (idx > last) pushText(content.slice(last, idx));
    pushCode(m[2] ?? "");
    last = idx + m[0].length;
  }
  if (last < content.length) pushText(content.slice(last));

  return out;
}

export default function TerminalChat({
  onSendAction,
  placeholder = "hi i'm marcy, ethan's cat, ask me anything!",
  title,
}: Props) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("assistant");

  const reducedMotion = usePrefersReducedMotion();

  // typed placeholder prompt when empty
  const [, setPromptText] = useState("");

  // assistant typewriter (full reply typed out)
  const [typingAssistant, setTypingAssistant] = useState<{
    base: Msg[];
    full: string;
    shown: string;
    idx: number;
  } | null>(null);

  // internal viewport only
  const viewRef = useRef<HTMLDivElement | null>(null);

  // focus + block cursor for input
  const inputRef = useRef<HTMLInputElement | null>(null);
  const mirrorBeforeRef = useRef<HTMLSpanElement | null>(null);
  const mirrorCaretRef = useRef<HTMLSpanElement | null>(null);
  const [cursorLeft, setCursorLeft] = useState(0);
  const [cursorW, setCursorW] = useState(10);

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  // IMPORTANT: user input prompt should only appear once bot is done typing
  const canType = !isSending && !typingAssistant;

  useEffect(() => {
    // only seed once
    if (messages.length !== 0 || typingAssistant) return;

    const first = "hi i'm **marcy**, ethan's cat, ask me anything";
    if (reducedMotion) {
      setMessages([{ role: "assistant", content: first }]);
      return;
    }

    setTypingAssistant({
      base: [],
      full: first,
      shown: "",
      idx: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // show messages + partial assistant while typing
  const shownMessages = useMemo(() => {
    if (!typingAssistant) return messages;
    return [
      ...typingAssistant.base,
      { role: "assistant", content: typingAssistant.shown },
    ];
  }, [messages, typingAssistant]);

  // helper: only auto-scroll if user is already near bottom (so we don’t “fight” them)
  const autoScrollIfNearBottom = () => {
    const el = viewRef.current;
    if (!el) return;
    const distanceFromBottom =
      el.scrollHeight - (el.scrollTop + el.clientHeight);
    if (distanceFromBottom < 80) {
      el.scrollTop = el.scrollHeight;
    }
  };

  // focus input when typing is allowed

  // type out placeholder prompt when empty
  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (messages.length !== 0) return;

      if (reducedMotion) {
        setPromptText(placeholder);
        return;
      }

      setPromptText("");
      for (let i = 0; i < placeholder.length; i++) {
        if (cancelled) return;
        setPromptText((p) => p + placeholder[i]);
        await sleep(22);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [placeholder, messages.length, reducedMotion]);

  // update block cursor to track input caret (arrow keys, click, selection)
  const updateCursor = () => {
    const el = inputRef.current;
    const before = mirrorBeforeRef.current;
    const caret = mirrorCaretRef.current;
    if (!el || !before || !caret) return;

    const pos = el.selectionStart ?? input.length;

    before.textContent = input.slice(0, pos);
    const left = before.getBoundingClientRect().width;

    // cover the NEXT character (or a space at end)
    caret.textContent = input[pos] ?? " ";
    const w = caret.getBoundingClientRect().width || 10;

    setCursorLeft(left);
    setCursorW(w);
  };

  useEffect(() => {
    updateCursor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, canType]);

  // assistant typing effect (SLOWER)
  useEffect(() => {
    if (!typingAssistant) return;
    let cancelled = false;

    const run = async () => {
      while (!cancelled) {
        let nextChar = "";

        setTypingAssistant((s) => {
          if (!s) return s;
          const nextIdx = Math.min(s.full.length, s.idx + 1);
          nextChar = s.full[s.idx] ?? "";
          return { ...s, idx: nextIdx, shown: s.full.slice(0, nextIdx) };
        });

        autoScrollIfNearBottom();

        if (
          !typingAssistant ||
          typingAssistant.idx >= typingAssistant.full.length
        )
          break;

        // punctuation pause
        const baseDelay = 20;
        const pause =
          nextChar === "." || nextChar === "," || nextChar === "!"
            ? 180
            : nextChar === "\n"
            ? 220
            : baseDelay;

        await sleep(reducedMotion ? 0 : pause);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [typingAssistant, reducedMotion]);

  // when assistant finishes, commit full message
  useEffect(() => {
    if (!typingAssistant) return;
    if (typingAssistant.idx < typingAssistant.full.length) return;

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: typingAssistant.full },
    ]);
    setTypingAssistant(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typingAssistant?.idx]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canType) return;

    const text = input;
    if (!text.trim()) return;

    setError(null);
    setInput("");

    const nextHistory = [...messages, { role: "user", content: text } as Msg];
    setMessages(nextHistory);
    setIsSending(true);
    requestAnimationFrame(autoScrollIfNearBottom);

    try {
      const reply = await onSendAction(text, nextHistory, mode);
      setTypingAssistant({
        base: nextHistory,
        full: reply ?? "",
        shown: "",
        idx: 0,
      });
    } catch (err: any) {
      setError(err?.message ?? "Something went wrong.");
    } finally {
      setIsSending(false);
    }
  }

  // clicking anywhere on the CRT focuses input
  const focusInput = () => {
    if (!canType) return;
    inputRef.current?.focus();
    // keep cursor position accurate
    requestAnimationFrame(updateCursor);
  };

  // Terminal row with a leading >
  const Row = ({
    children,
    dim,
  }: {
    children: React.ReactNode;
    dim?: boolean;
  }) => (
    <div className="mb-2 flex items-start gap-2">
      <span className="select-none opacity-80">{">"}</span>
      <div className={dim ? "opacity-85" : ""}>{children}</div>
    </div>
  );

  // Build display rows: user messages stay as single row; assistant messages become multiple "terminal lines"
  const renderedRows = useMemo(() => {
    const rows: React.ReactNode[] = [];

    for (let i = 0; i < shownMessages.length; i++) {
      const m = shownMessages[i];

      if (m.role === "user") {
        rows.push(
          <Row key={`u-${i}`}>
            <span>{m.content}</span>
          </Row>
        );
        continue;
      }

      // assistant: every visible line has its own Row with >
      const lines = renderAssistantAsLines(m.content);
      for (let j = 0; j < lines.length; j++) {
        const item = lines[j];
        rows.push(
          <Row key={`a-${i}-${j}`}>
            {item.type === "code" ? (
              <code className="px-1 py-[1px] rounded bg-black/25 [text-shadow:none]">
                {item.line}
              </code>
            ) : (
              renderInlineMarkdownNoNewlines(item.line)
            )}
          </Row>
        );
      }
    }

    return rows;
  }, [shownMessages]);

  return (
    <div id="marcy" className="w-full flex items-center justify-center py-10">
      <div className="w-full max-w-4xl px-4">
        {title && (
          <div className="mb-3 text-center text-[12px] uppercase tracking-[0.25em] opacity-80">
            {title}
          </div>
        )}

        {/* CRT frame (4:3) */}
        <div
          className="mx-auto aspect-[4/3] max-h-[70vh] max-w-[90dvw] rounded-[28px] bg-[#0b0f0c] p-[18px] shadow-[0_18px_80px_rgba(0,0,0,0.55)]"
          onClick={focusInput}
        >
          {/* bezel */}
          <div className="h-full w-full rounded-[22px] bg-[#0a0d0b] p-[14px] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]">
            {/* glass/screen */}

            <div
              className="relative h-full w-full overflow-hidden rounded-[18px] bg-[hsl(154_50%_5%)] text-[hsl(154_84%_70%)] [text-shadow:0_0_4px_hsl(154_84%_70%)] font-mono text-[16px]"
              onMouseDown={(e) => {
                // don’t steal clicks on links (markdown links)
                const target = e.target as HTMLElement | null;
                if (target?.closest("a")) return;
                focusInput();
              }}
            >
              {/* curvature highlights */}
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0)_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_60%)]" />
              </div>

              {/* viewport */}
              <div
                ref={viewRef}
                className="relative h-full overflow-y-auto px-6 py-5 leading-6"
              >
                {renderedRows}

                {/* sending indicator (still uses >) */}
                {isSending && !typingAssistant && (
                  <Row dim>
                    <span className="blink">█</span>
                  </Row>
                )}

                {error && (
                  <div className="mt-2 text-[hsl(0_80%_70%)] [text-shadow:none]">
                    {error}
                  </div>
                )}

                {/* INPUT: show only once bot finished typing */}
                {canType && (
                  <form
                    onSubmit={handleSubmit}
                    className="mt-4 flex items-start gap-2"
                  >
                    <span className="select-none opacity-80">{">"}</span>

                    <div className="relative flex-1">
                      <input
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={() => requestAnimationFrame(updateCursor)}
                        onKeyUp={() => requestAnimationFrame(updateCursor)}
                        onClick={() => requestAnimationFrame(updateCursor)}
                        onSelect={() => requestAnimationFrame(updateCursor)}
                        spellCheck={false}
                        autoCapitalize="none"
                        autoCorrect="off"
                        className="w-full bg-transparent outline-none caret-transparent"
                        placeholder=""
                      />

                      {/* overwrite/block cursor */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute top-[2px] blink"
                        style={{
                          left: cursorLeft,
                          width: cursorW,
                          height: "1.15em",
                          background: "hsl(154 84% 70%)",
                          mixBlendMode: "screen",
                        }}
                      />
                    </div>

                    {/* mirror measurer */}
                    <div
                      aria-hidden
                      className="absolute -left-[9999px] top-0 whitespace-pre font-mono text-[16px]"
                    >
                      <span ref={mirrorBeforeRef} />
                      <span ref={mirrorCaretRef}> </span>
                    </div>
                  </form>
                )}
              </div>

              {/* CRT overlays inside the screen */}
              <div id="interlaced" />
              <div id="glare" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[sweep_5s_linear_infinite]" />
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation(); // don’t steal focus click
              setMode((m) => (m === "cat" ? "assistant" : "cat"));
            }}
            className={[
              "group flex items-center gap-2 rounded-full px-3 pt-2 lg:py-0 self-end justify-self-end place-self-end focus:outline-none transition-colors select-none",
            ].join(" ")}
            aria-pressed={mode === "cat"}
          >
            {/* LED */}
            <span
              className={[
                "h-2.5 w-2.5 rounded-full",
                "shadow-[0_0_10px_rgba(0,0,0,0.4)]",
                mode === "cat"
                  ? "bg-[hsl(154_84%_70%)] shadow-[0_0_12px_hsl(154_84%_70%)]"
                  : "bg-white/15",
              ].join(" ")}
            />
            <span className="text-[12px] tracking-wide opacity-90">
              Marcy mode
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        #glare {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: radial-gradient(
            hsl(154 5% 15% / 0.7) 0%,
            hsl(154 50% 5% / 0) 65%
          );
          mix-blend-mode: screen;
          opacity: 0.35;
        }

        @keyframes lines {
          0% {
            background-position: 0px 0px;
          }
          50% {
            background-position: 0px 0px;
          }
          51% {
            background-position: 0px 2px;
          }
          100% {
            background-position: 0px 2px;
          }
        }

        #interlaced {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: repeating-linear-gradient(
            transparent 0px 1px,
            hsl(154 0% 0% / 0.25) 3px 4px
          );
          animation: lines 0.066666666s linear infinite;
          opacity: 0.85;
        }

        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
        .blink {
          animation: blink 1s steps(1) infinite;
        }

        @keyframes sweep {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(120%);
          }
        }
      `}</style>
    </div>
  );
}
