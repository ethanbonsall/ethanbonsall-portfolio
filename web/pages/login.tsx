// login.tsx

"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { supabase } from "@/lib/supabaseClient"; // <-- add this

type Step = "boot" | "username" | "password" | "color" | "done";

const ASCII_HELLO =
  " ‎ _   _      _ _         _____ _   _                 \n" +
  "| | | |    | | |       |  ___| | | |                \n" +
  "| |_| | ___| | | ___   | |__ | |_| |__   __ _ _ __  \n" +
  "|  _  |/ _ \\ | |/ _ \\  |  __|| __| '_ \\ / _` | '_ \\ \n" +
  "| | | |  __/ | | (_) | | |___| |_| | | | (_| | | | |\n" +
  "\\_| |_/\\___|_|_|\\___/  \\____/ \\__|_| |_|\\__,_|_| |_|\n";

export default function LoginPage() {
  const router = useRouter();

  const [step, setStep] = useState<Step>("boot");
  const [lines, setLines] = useState<string[]>([]);
  const [typed, setTyped] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const preRef = useRef<HTMLPreElement | null>(null);
  const [cursorTopPx, setCursorTopPx] = useState(0);

  const colorOptions = useMemo(
    () =>
      [
        "SLEEPOVERS WITH FRIENDS",
        "GOING FAR AWAY ON VACATION",
        "GOING TO DISNEYLAND",
        "FIGHTING DRAGONS WITH YOUR BROTHERS IN THE TALL GRASS",
      ] as const,
    []
  );
  const [selectedIdx, setSelectedIdx] = useState(0);

  // --- overwrite cursor positioning (covers next character cell) ---
  const inputRef = useRef<HTMLInputElement | null>(null);
  const mirrorBeforeRef = useRef<HTMLSpanElement | null>(null);
  const mirrorCaretRef = useRef<HTMLSpanElement | null>(null);
  const [cursorLeft, setCursorLeft] = useState(0);
  const [cursorW, setCursorW] = useState(10);
  function measureTextWidth(container: HTMLElement, text: string) {
    const s = document.createElement("span");
    s.style.position = "absolute";
    s.style.visibility = "hidden";
    s.style.whiteSpace = "pre";
    s.style.font = getComputedStyle(container).font;
    s.textContent = text;
    container.appendChild(s);
    const w = s.getBoundingClientRect().width;
    container.removeChild(s);
    return w;
  }

  const updateCursor = () => {
    const pre = preRef.current;
    const el = inputRef.current;
    const before = mirrorBeforeRef.current;
    const caret = mirrorCaretRef.current;
    if (!pre || !el || !before || !caret) return;

    const pos = el.selectionStart ?? typed.length;

    // we render prompt + space + typed; before should be typed up to caret
    const shown = step === "password" ? "•".repeat(typed.length) : typed;

    // Put the "before caret" segment into mirrorBeforeRef
    before.textContent = shown.slice(0, pos);

    // caret measures next char cell width
    caret.textContent = shown[pos] ?? " ";

    // left = width(prompt + space) + width(before)
    // easiest: measure prompt width with a temp span
    const promptWidth = measureTextWidth(pre, `${prompt} `);

    const left = promptWidth + before.getBoundingClientRect().width;
    const w = caret.getBoundingClientRect().width || 10;

    setCursorLeft(left);
    setCursorW(w);

    // top: cursor should be on the last line of the <pre>
    // estimate by line count * line-height
    const lineHeight = parseFloat(getComputedStyle(pre).lineHeight || "20");
    const totalLines = (lines.join("\n") + "\n").split("\n").length; // +1 for input line
    setCursorTopPx((totalLines - 1) * lineHeight);
  };

  useLayoutEffect(() => {
    updateCursor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typed, step, lines, selectedIdx]);

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async function typeLine(text: string, speed = 28) {
    // start a new empty line
    setLines((prev) => [...prev, ""]);
    let cur = "";

    for (let i = 0; i < text.length; i++) {
      cur += text[i];

      setLines((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = cur;
        return copy;
      });

      await sleep(speed);
    }
  }
  // --- boot sequence ---
  useEffect(() => {
    const boot = async () => {
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

      setLines([]);
      setTyped("");
      setStep("boot");

      // print ASCII header line-by-line
      const asciiLines = ASCII_HELLO.trim().split("\n");
      for (const l of asciiLines) {
        setLines((prev) => [...prev, l]);
        await sleep(40);
      }

      await sleep(300);
      setLines((prev) => [...prev, ""]);
      setLines((prev) => [...prev, ""]);
      setLines((prev) => [...prev, ""]);

      // TYPE OUT PROMPT LETTER BY LETTER
      const prompt = "please enter username:";
      let current = "";

      for (let i = 0; i < prompt.length; i++) {
        current += prompt[i];

        setLines((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = current;
          return copy;
        });

        await sleep(30); // typing speed
      }

      setStep("username");
    };

    boot();
  }, []);

  // focus input when needed
  useEffect(() => {
    if (step === "username" || step === "password") {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [step]);

  const isTypingStep = step === "username" || step === "password";

  const prompt = step === "username" ? ">" : step === "password" ? ">" : "";

  const displayValue = step === "password" ? "•".repeat(typed.length) : typed;

  function commitCurrentInput() {
    const value = typed.trim();
    if (!value) return;

    if (step === "username") {
      setUsername(value);

      // write what user typed into the terminal output (so nothing jumps)
      setLines((prev) => [...prev, `> ${value}`]);

      setTyped("");
      setStep("boot"); // temporarily lock typing while prompt types
      (async () => {
        await typeLine("please enter password:");
        setStep("password");
      })();

      return;
    }

    if (step === "password") {
      setPassword(value);

      setLines((prev) => [...prev, `> ${"•".repeat(value.length)}`]);

      setTyped("");
      setStep("boot");
      (async () => {
        setLines((prev) => [...prev, ""]); // blank line before picker
        await typeLine("remind me of your childhood:");
        setStep("color");
      })();

      return;
    }
  }

  // keyboard handling
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // typing steps
      if (step === "username" || step === "password") {
        if (e.key === "Enter") {
          e.preventDefault();
          commitCurrentInput();
          return;
        }
        return;
      }

      // color picker step
      if (step === "color") {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIdx(
            (i) => (i - 1 + colorOptions.length) % colorOptions.length
          );
          return;
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIdx((i) => (i + 1) % colorOptions.length);
          return;
        }
        if (e.key === "Enter") {
          e.preventDefault();
          const picked = colorOptions[selectedIdx];
          setLines((prev) => [...prev, `> ${picked}`]);

          if (
            picked === "FIGHTING DRAGONS WITH YOUR BROTHERS IN THE TALL GRASS"
          ) {
            setLines((prev) => [...prev, "verifying identity..."]);
            setStep("boot"); // lock input during auth

            (async () => {
              const ok = await signIn(username, password);

              if (ok) {
                setStep("done");
                setTimeout(() => {
                  router.push("/mainframe");
                }, 400);
              }
            })();
          } else {
            setLines((prev) => [
              ...prev,
              "incorrect. are you sure your ethan?:",
            ]);
          }
          return;
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, selectedIdx, typed]);

  async function signIn(username: string, pass: string) {
    setLines((prev) => [...prev, "locating user..."]);

    // 🔍 Find email from public.users table
    const { data: userRow, error: lookupError } = await supabase
      .from("users") // public.users
      .select("email")
      .ilike("username", username) // case-insensitive match
      .limit(1)
      .maybeSingle();

    if (lookupError || !userRow?.email) {
      setLines((prev) => [...prev, "user not found.", ""]);

      // restart flow
      setTyped("");
      setPassword("");
      setUsername("");
      await typeLine("please enter username:");
      setStep("username");
      return false;
    }

    setLines((prev) => [...prev, "authenticating..."]);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: userRow.email,
      password: pass,
    });

    if (error || !data.session) {
      setLines((prev) => [
        ...prev,
        `login failed: ${error?.message ?? "incorrect password"}`,
        "",
      ]);

      // restart flow
      setTyped("");
      setPassword("");
      setUsername("");
      await typeLine("please enter username:");
      setStep("username");
      return false;
    }

    setLines((prev) => [...prev, "access granted."]);
    return true;
  }

  return (
    <div className="min-h-screen bg-[hsl(154_50%_5%)] text-[hsl(154_84%_70%)] [text-shadow:0_0_4px_hsl(154_84%_70%)] font-mono text-[16px] cursor-none">
      <Head>
        <title>Login</title>
      </Head>
      <div className="relative p-8">
        {/* output */}
        <pre ref={preRef} className="relative whitespace-pre-wrap leading-5">
          {lines.join("\n")}
          {isTypingStep && (
            <>
              {"\n"}
              <span className="select-none">{prompt} </span>
              <span ref={mirrorBeforeRef} className="whitespace-pre" />
              <span ref={mirrorCaretRef} className="whitespace-pre">
                {typed.length
                  ? step === "password"
                    ? "•".repeat(typed.length)
                    : typed
                  : ""}
              </span>

              {/* overwrite cursor block covering next character */}
              <span
                aria-hidden
                className="pointer-events-none absolute blink"
                style={{
                  // position relative to the pre container
                  left: cursorLeft,
                  top: cursorTopPx, // we'll add this state below
                  width: cursorW,
                  height: "1.2em",
                  background: "hsl(154 84% 70%)",
                  mixBlendMode: "screen",
                }}
              />
            </>
          )}
        </pre>
        {isTypingStep && (
          <input
            ref={inputRef}
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            onKeyUp={updateCursor}
            onClick={updateCursor}
            onSelect={updateCursor}
            spellCheck={false}
            autoCapitalize="none"
            autoCorrect="off"
            className="absolute left-[-9999px] top-0 opacity-0 caret-transparent"
          />
        )}

        {/* show masked value visually (input itself holds raw, but we can show bullets) */}
        {isTypingStep && step === "password" && typed.length > 0 && (
          <div className="mt-1 opacity-80">({displayValue})</div>
        )}

        {/* color picker */}
        {step === "color" && (
          <div className="mt-3">
            <div className="ml-4 flex flex-col gap-1">
              {colorOptions.map((c, idx) => {
                const isSelected = idx === selectedIdx;
                const isPurple =
                  c === "FIGHTING DRAGONS WITH YOUR BROTHERS IN THE TALL GRASS";
                return (
                  <div key={c} className="relative flex items-center gap-2">
                    <span className="w-4 select-none">
                      {isSelected ? ">" : " "}
                    </span>

                    <span
                      className={[
                        "select-none",
                        isPurple && isSelected ? "goldShimmer" : "",
                      ].join(" ")}
                    >
                      {c}
                    </span>

                    {/* sparkly particles only when hovering selection over PURPLE */}
                    {isPurple && isSelected && (
                      <>
                        {Array.from({ length: 12 }).map((_, i) => (
                          <span
                            key={i}
                            className="sparkles"
                            style={{
                              animationDelay: `${-i * 0.18}s`,
                              left: `${5 + i * 6}px`,
                            }}
                            aria-hidden
                          />
                        ))}
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-2 opacity-80 select-none ml-4">
              (use ↑/↓, press Enter)
            </div>
          </div>
        )}

        {/* CRT overlays */}
        <div id="interlaced" />
        <div id="glare" />
      </div>

      <style jsx>{`
        #glare {
          position: fixed;
          inset: 0;
          z-index: -1;
          background: radial-gradient(hsl(154 5% 15%) 0%, hsl(154 50% 5%) 70%);
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
          position: fixed;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          background: repeating-linear-gradient(
            transparent 0px 1px,
            hsl(154 0% 0% / 0.3) 3px 4px
          );
          animation: lines 0.066666666s linear infinite;
        }

        /* hard on/off terminal blink */
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

        /* gold shimmer for PURPLE when selected */
        .goldShimmer {
          color: hsl(45 100% 60%);
          text-shadow: 0 0 6px hsl(45 100% 60%), 0 0 18px hsl(45 100% 45%);
          background: linear-gradient(
            90deg,
            hsl(45 100% 45%),
            hsl(55 100% 70%),
            hsl(45 100% 45%)
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 1.2s linear infinite;
          position: relative;
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        /* container particle */
        .sparkles {
          position: absolute;
          left: 30px;
          top: 50%;
          width: 2px;
          height: 2px;
          transform: translateY(-50%);
          border-radius: 999px;
          background: hsl(50 100% 70%);
          opacity: 0;
          filter: drop-shadow(0 0 4px hsl(50 100% 70%));
          animation: sparkleDrift 4.5s linear infinite;
        }

        /* second particle */
        .sparkles::before,
        .sparkles::after {
          content: "";
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 999px;
          background: hsl(45 100% 60%);
          filter: drop-shadow(0 0 4px hsl(45 100% 60%));
          opacity: 0;
        }

        /* staggered motion */
        .sparkles::before {
          animation: sparkleDrift 4.5s linear infinite;
          animation-delay: -0.7s;
        }

        .sparkles::after {
          animation: sparkleDrift 4.5s linear infinite;
          animation-delay: -1.4s;
        }

        @keyframes sparkleDrift {
          0% {
            transform: translate(-20px, -50%);
            opacity: 0;
          }
          15% {
            opacity: 0.7;
          }
          85% {
            opacity: 0.5;
          }
          100% {
            transform: translate(300px, -50%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
