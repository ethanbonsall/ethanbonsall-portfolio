module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[project]/components/Portfolio/chatbot.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TerminalChat
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
/* eslint-disable @typescript-eslint/no-explicit-any */ "use client";
;
;
;
function usePrefersReducedMotion() {
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
        if (!mq) return;
        const onChange = ()=>setReduced(mq.matches);
        onChange();
        mq.addEventListener("change", onChange);
        return ()=>mq.removeEventListener("change", onChange);
    }, []);
    return reduced;
}
/**
 * Minimal "safe-ish" markdown (no HTML):
 * - **bold**
 * - *italic*
 * - `inline code`
 * - [text](url)
 */ function renderInlineMarkdownNoNewlines(text) {
    const escape = (s)=>s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let html = escape(text);
    html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, `<a href="$2" target="_blank" rel="noreferrer" class="underline opacity-95 hover:opacity-100">$1</a>`);
    html = html.replace(/`([^`]+)`/g, `<code class="px-1 py-[1px] rounded bg-black/25">$1</code>`);
    html = html.replace(/\*\*([^*]+)\*\*/g, `<strong>$1</strong>`);
    html = html.replace(/\*([^*]+)\*/g, `<em>$1</em>`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        dangerouslySetInnerHTML: {
            __html: html
        }
    }, void 0, false, {
        fileName: "[project]/components/Portfolio/chatbot.tsx",
        lineNumber: 56,
        columnNumber: 10
    }, this);
}
function renderAssistantAsLines(content) {
    const out = [];
    const re = /```(\w+)?\n([\s\S]*?)```/g;
    // removes normal whitespace + zero-width + BOM + NBSP
    const isTrulyBlank = (line)=>line.replace(/[\s\u00A0\u200B\u200C\u200D\uFEFF]/g, "") === "";
    let last = 0;
    let m;
    const pushText = (t)=>{
        const lines = t.replace(/\r/g, "").split("\n");
        for (const line of lines){
            if (isTrulyBlank(line)) continue;
            // optional: keep terminal tidy (remove trailing spaces only)
            const cleaned = line.replace(/[\u00A0\u200B\u200C\u200D\uFEFF]/g, "").trimEnd();
            if (isTrulyBlank(cleaned)) continue;
            out.push({
                type: "text",
                line: cleaned
            });
        }
    };
    const pushCode = (t)=>{
        const lines = t.replace(/\r/g, "").split("\n");
        for (const line of lines){
            if (isTrulyBlank(line)) continue;
            // keep code spacing, just remove invisible chars + trailing whitespace
            const cleaned = line.replace(/[\u00A0\u200B\u200C\u200D\uFEFF]/g, "").replace(/\s+$/g, "");
            if (isTrulyBlank(cleaned)) continue;
            out.push({
                type: "code",
                line: cleaned
            });
        }
    };
    while((m = re.exec(content)) !== null){
        const idx = m.index;
        if (idx > last) pushText(content.slice(last, idx));
        pushCode(m[2] ?? "");
        last = idx + m[0].length;
    }
    if (last < content.length) pushText(content.slice(last));
    return out;
}
function TerminalChat({ onSendAction, placeholder = "hi i'm marcy, ethan's cat, ask me anything!", title }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("assistant");
    const reducedMotion = usePrefersReducedMotion();
    // typed placeholder prompt when empty
    const [, setPromptText] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    // assistant typewriter (full reply typed out)
    const [typingAssistant, setTypingAssistant] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    // internal viewport only
    const viewRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    // focus + block cursor for input
    const inputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const mirrorBeforeRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const mirrorCaretRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [cursorLeft, setCursorLeft] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [cursorW, setCursorW] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(10);
    const sleep = (ms)=>new Promise((r)=>setTimeout(r, ms));
    // IMPORTANT: user input prompt should only appear once bot is done typing
    const canType = !isSending && !typingAssistant;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // only seed once
        if (messages.length !== 0 || typingAssistant) return;
        const first = "hi i'm **marcy**, ethan's cat, ask me anything";
        if (reducedMotion) {
            setMessages([
                {
                    role: "assistant",
                    content: first
                }
            ]);
            return;
        }
        setTypingAssistant({
            base: [],
            full: first,
            shown: "",
            idx: 0
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // show messages + partial assistant while typing
    const shownMessages = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!typingAssistant) return messages;
        return [
            ...typingAssistant.base,
            {
                role: "assistant",
                content: typingAssistant.shown
            }
        ];
    }, [
        messages,
        typingAssistant
    ]);
    // helper: only auto-scroll if user is already near bottom (so we don’t “fight” them)
    const autoScrollIfNearBottom = ()=>{
        const el = viewRef.current;
        if (!el) return;
        const distanceFromBottom = el.scrollHeight - (el.scrollTop + el.clientHeight);
        if (distanceFromBottom < 80) {
            el.scrollTop = el.scrollHeight;
        }
    };
    // focus input when typing is allowed
    // type out placeholder prompt when empty
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let cancelled = false;
        const run = async ()=>{
            if (messages.length !== 0) return;
            if (reducedMotion) {
                setPromptText(placeholder);
                return;
            }
            setPromptText("");
            for(let i = 0; i < placeholder.length; i++){
                if (cancelled) return;
                setPromptText((p)=>p + placeholder[i]);
                await sleep(22);
            }
        };
        run();
        return ()=>{
            cancelled = true;
        };
    }, [
        placeholder,
        messages.length,
        reducedMotion
    ]);
    // update block cursor to track input caret (arrow keys, click, selection)
    const updateCursor = ()=>{
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
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        updateCursor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        input,
        canType
    ]);
    // assistant typing effect (SLOWER)
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!typingAssistant) return;
        let cancelled = false;
        const run = async ()=>{
            while(!cancelled){
                let nextChar = "";
                setTypingAssistant((s)=>{
                    if (!s) return s;
                    const nextIdx = Math.min(s.full.length, s.idx + 1);
                    nextChar = s.full[s.idx] ?? "";
                    return {
                        ...s,
                        idx: nextIdx,
                        shown: s.full.slice(0, nextIdx)
                    };
                });
                autoScrollIfNearBottom();
                if (!typingAssistant || typingAssistant.idx >= typingAssistant.full.length) break;
                // punctuation pause
                const baseDelay = 20;
                const pause = nextChar === "." || nextChar === "," || nextChar === "!" ? 180 : nextChar === "\n" ? 220 : baseDelay;
                await sleep(reducedMotion ? 0 : pause);
            }
        };
        run();
        return ()=>{
            cancelled = true;
        };
    }, [
        typingAssistant,
        reducedMotion
    ]);
    // when assistant finishes, commit full message
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!typingAssistant) return;
        if (typingAssistant.idx < typingAssistant.full.length) return;
        setMessages((prev)=>[
                ...prev,
                {
                    role: "assistant",
                    content: typingAssistant.full
                }
            ]);
        setTypingAssistant(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        typingAssistant?.idx
    ]);
    async function handleSubmit(e) {
        e.preventDefault();
        if (!canType) return;
        const text = input;
        if (!text.trim()) return;
        setError(null);
        setInput("");
        const nextHistory = [
            ...messages,
            {
                role: "user",
                content: text
            }
        ];
        setMessages(nextHistory);
        setIsSending(true);
        requestAnimationFrame(autoScrollIfNearBottom);
        try {
            const reply = await onSendAction(text, nextHistory, mode);
            setTypingAssistant({
                base: nextHistory,
                full: reply ?? "",
                shown: "",
                idx: 0
            });
        } catch (err) {
            setError(err?.message ?? "Something went wrong.");
        } finally{
            setIsSending(false);
        }
    }
    // clicking anywhere on the CRT focuses input
    const focusInput = ()=>{
        if (!canType) return;
        inputRef.current?.focus();
        // keep cursor position accurate
        requestAnimationFrame(updateCursor);
    };
    // Terminal row with a leading >
    const Row = ({ children, dim })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "mb-2 flex items-start gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "select-none opacity-80",
                    children: ">"
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                    lineNumber: 345,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: dim ? "opacity-85" : "",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                    lineNumber: 346,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Portfolio/chatbot.tsx",
            lineNumber: 344,
            columnNumber: 5
        }, this);
    // Build display rows: user messages stay as single row; assistant messages become multiple "terminal lines"
    const renderedRows = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const rows = [];
        for(let i = 0; i < shownMessages.length; i++){
            const m = shownMessages[i];
            if (m.role === "user") {
                rows.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Row, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        children: m.content
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/chatbot.tsx",
                        lineNumber: 360,
                        columnNumber: 13
                    }, this)
                }, `u-${i}`, false, {
                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                    lineNumber: 359,
                    columnNumber: 11
                }, this));
                continue;
            }
            // assistant: every visible line has its own Row with >
            const lines = renderAssistantAsLines(m.content);
            for(let j = 0; j < lines.length; j++){
                const item = lines[j];
                rows.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Row, {
                    children: item.type === "code" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("code", {
                        className: "px-1 py-[1px] rounded bg-black/25 [text-shadow:none]",
                        children: item.line
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/chatbot.tsx",
                        lineNumber: 373,
                        columnNumber: 15
                    }, this) : renderInlineMarkdownNoNewlines(item.line)
                }, `a-${i}-${j}`, false, {
                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                    lineNumber: 371,
                    columnNumber: 11
                }, this));
            }
        }
        return rows;
    }, [
        shownMessages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        id: "marcy",
        className: "jsx-9a2e45cc9a837674" + " " + "w-full flex items-center justify-center py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-9a2e45cc9a837674" + " " + "w-full max-w-4xl px-4",
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-9a2e45cc9a837674" + " " + "mb-3 text-center text-[12px] uppercase tracking-[0.25em] opacity-80",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/chatbot.tsx",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        onClick: focusInput,
                        className: "jsx-9a2e45cc9a837674" + " " + "mx-auto aspect-[4/3] max-h-[70vh] max-w-[90dvw] rounded-[28px] bg-[#0b0f0c] p-[18px] shadow-[0_18px_80px_rgba(0,0,0,0.55)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-9a2e45cc9a837674" + " " + "h-full w-full rounded-[22px] bg-[#0a0d0b] p-[14px] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    onMouseDown: (e)=>{
                                        // don’t steal clicks on links (markdown links)
                                        const target = e.target;
                                        if (target?.closest("a")) return;
                                        focusInput();
                                    },
                                    className: "jsx-9a2e45cc9a837674" + " " + "relative h-full w-full overflow-hidden rounded-[18px] bg-[hsl(154_50%_5%)] text-[hsl(154_84%_70%)] [text-shadow:0_0_4px_hsl(154_84%_70%)] font-mono text-[16px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-9a2e45cc9a837674" + " " + "pointer-events-none absolute inset-0 opacity-30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-9a2e45cc9a837674" + " " + "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0)_55%)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-9a2e45cc9a837674" + " " + "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_60%)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Portfolio/chatbot.tsx",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            ref: viewRef,
                                            className: "jsx-9a2e45cc9a837674" + " " + "relative h-full overflow-y-auto px-6 py-5 leading-6",
                                            children: [
                                                renderedRows,
                                                isSending && !typingAssistant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Row, {
                                                    dim: true,
                                                    className: "jsx-9a2e45cc9a837674",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "jsx-9a2e45cc9a837674" + " " + "blink",
                                                        children: "█"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 19
                                                }, this),
                                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-9a2e45cc9a837674" + " " + "mt-2 text-[hsl(0_80%_70%)] [text-shadow:none]",
                                                    children: error
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 19
                                                }, this),
                                                canType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                                    onSubmit: handleSubmit,
                                                    className: "jsx-9a2e45cc9a837674" + " " + "mt-4 flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            className: "jsx-9a2e45cc9a837674" + " " + "select-none opacity-80",
                                                            children: ">"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                            lineNumber: 446,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "jsx-9a2e45cc9a837674" + " " + "relative flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                    ref: inputRef,
                                                                    value: input,
                                                                    onChange: (e)=>setInput(e.target.value),
                                                                    onKeyDown: ()=>requestAnimationFrame(updateCursor),
                                                                    onKeyUp: ()=>requestAnimationFrame(updateCursor),
                                                                    onClick: ()=>requestAnimationFrame(updateCursor),
                                                                    onSelect: ()=>requestAnimationFrame(updateCursor),
                                                                    spellCheck: false,
                                                                    autoCapitalize: "none",
                                                                    autoCorrect: "off",
                                                                    placeholder: "",
                                                                    className: "jsx-9a2e45cc9a837674" + " " + "w-full bg-transparent outline-none caret-transparent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    "aria-hidden": true,
                                                                    style: {
                                                                        left: cursorLeft,
                                                                        width: cursorW,
                                                                        height: "1.15em",
                                                                        background: "hsl(154 84% 70%)",
                                                                        mixBlendMode: "screen"
                                                                    },
                                                                    className: "jsx-9a2e45cc9a837674" + " " + "pointer-events-none absolute top-[2px] blink"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            "aria-hidden": true,
                                                            className: "jsx-9a2e45cc9a837674" + " " + "absolute -left-[9999px] top-0 whitespace-pre font-mono text-[16px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    ref: mirrorBeforeRef,
                                                                    className: "jsx-9a2e45cc9a837674"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                                    lineNumber: 483,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    ref: mirrorCaretRef,
                                                                    className: "jsx-9a2e45cc9a837674",
                                                                    children: " "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Portfolio/chatbot.tsx",
                                            lineNumber: 421,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            id: "interlaced",
                                            className: "jsx-9a2e45cc9a837674"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio/chatbot.tsx",
                                            lineNumber: 491,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            id: "glare",
                                            className: "jsx-9a2e45cc9a837674"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio/chatbot.tsx",
                                            lineNumber: 492,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-9a2e45cc9a837674" + " " + "pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[sweep_5s_linear_infinite]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio/chatbot.tsx",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Portfolio/chatbot.tsx",
                                    lineNumber: 405,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/chatbot.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.stopPropagation(); // don’t steal focus click
                                    setMode((m)=>m === "cat" ? "assistant" : "cat");
                                },
                                "aria-pressed": mode === "cat",
                                className: "jsx-9a2e45cc9a837674" + " " + ([
                                    "group flex items-center gap-2 rounded-full px-3 pt-2 lg:py-0 self-end justify-self-end place-self-end focus:outline-none transition-colors select-none"
                                ].join(" ") || ""),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-9a2e45cc9a837674" + " " + ([
                                            "h-2.5 w-2.5 rounded-full",
                                            "shadow-[0_0_10px_rgba(0,0,0,0.4)]",
                                            mode === "cat" ? "bg-[hsl(154_84%_70%)] shadow-[0_0_12px_hsl(154_84%_70%)]" : "bg-white/15"
                                        ].join(" ") || "")
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/chatbot.tsx",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-9a2e45cc9a837674" + " " + "text-[12px] tracking-wide opacity-90",
                                        children: "Marcy mode"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/chatbot.tsx",
                                        lineNumber: 517,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/chatbot.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/chatbot.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio/chatbot.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "9a2e45cc9a837674",
                children: "#glare.jsx-9a2e45cc9a837674{z-index:1;pointer-events:none;mix-blend-mode:screen;opacity:.35;background:radial-gradient(#242827b3 0%,#06130e00 65%);position:absolute;inset:0}@keyframes lines{0%{background-position:0 0}50%{background-position:0 0}51%{background-position:0 2px}to{background-position:0 2px}}#interlaced.jsx-9a2e45cc9a837674{z-index:2;pointer-events:none;opacity:.85;background:repeating-linear-gradient(#0000 0 1px,#00000040 3px 4px);animation:66.6667ms linear infinite lines;position:absolute;inset:0}@keyframes blink{0%,49%{opacity:1}50%,to{opacity:0}}.blink.jsx-9a2e45cc9a837674{animation:1s step-end infinite blink}@keyframes sweep{0%{transform:translate(-120%)}to{transform:translate(120%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Portfolio/chatbot.tsx",
        lineNumber: 388,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Portfolio/classes.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const Courses = ()=>{
    const courses = [
        {
            name: "Foundations of Programming",
            description: "Learned how to reason about how my code is structured, identify whether a given structure is effective in a given context, and look at ways of organizing units of code that support larger programs."
        },
        {
            name: "Introduction to Machine Learning",
            description: "Studied machine learning methods applied to speech recognition, tracking, collaborative filtering, and recommendation systems. Covered classification, regression, support vector machines, hidden Markov models, principal component analysis, and deep learning."
        },
        {
            name: "Modern Web Programming",
            description: "Built full-stack web apps using Next.js, TypeScript, and Tailwind CSS. Gained hands-on experience with frontend and backend development, deploying multiple websites from scratch or starter code, and learning scalable web architecture and responsive design."
        },
        {
            name: "Foundations of Software Engineering",
            description: "Completed multiple software projects in an Agile environment, learning collaboration, version control, testing, and software design principles. Gained experience with team workflows, coding standards, and writing maintainable, well-documented code."
        },
        {
            name: "Software Engineering Lab",
            description: "Collaborated with a company to design, build, and deliver a complete software product. Gained experience in requirement analysis, architecture design, implementation, testing, deployment, and stakeholder communication."
        },
        {
            name: "Mobile Computing Systems",
            description: "Developed Android apps using Java in Android Studio, gaining experience with UI design, activity lifecycle, data storage, API integration, and debugging. Completed multiple projects emphasizing collaboration, agile workflows, and user-friendly app development."
        }
    ];
    const CourseList = ({ courses })=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "pb-12 md:pb-16 lg:pb-20 bg-background w-full max-w-full overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "gradient-text",
                        children: "Coursework"
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/classes.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio/classes.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "w-full overflow-x-auto py-4 md:py-6 custom-scrollbar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex overflow-y-visible space-x-3 md:space-x-4 w-fit",
                        children: courses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 glass-card rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 w-[85vw] sm:w-[70vw] md:w-[350px] 2xl:w-[400px] transition-all duration-300 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-primary font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mb-3 md:mb-4 group-hover:gradient-text transition-all break-words",
                                        children: course.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/classes.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-text text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed",
                                        children: course.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/classes.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/components/Portfolio/classes.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/classes.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio/classes.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Portfolio/classes.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(CourseList, {
        courses: courses
    }, void 0, false, {
        fileName: "[project]/components/Portfolio/classes.tsx",
        lineNumber: 66,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Courses;
}),
"[project]/components/Portfolio/education.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const Education = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "bg-background text-text px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16 w-full max-w-full overflow-hidden scroll-mt-24",
        id: "education",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "gradient-text",
                    children: "Education"
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio/education.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Portfolio/education.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "glass-card rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 max-w-4xl w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3 md:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio/education.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-primary mb-2 break-words",
                                    children: "University of North Carolina at Chapel Hill"
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio/education.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-base sm:text-lg md:text-xl 2xl:text-2xl mb-2 break-words",
                                    children: "Bachelor of Science in Computer Science & Data Science"
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio/education.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mt-4 text-text/80 text-sm sm:text-base",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "GPA: 3.8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio/education.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/education.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio/education.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Portfolio/education.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Portfolio/education.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Portfolio/education.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Portfolio/education.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Education;
}),
"[project]/components/Portfolio/experience.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [ssr] (ecmascript) <export default as Users>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const Experience = ()=>{
    const [durations, setDurations] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        sheetz: "",
        freelance: "",
        bciResearch: "",
        cssg: ""
    });
    const getDuration = (startDate, endDate = new Date())=>{
        const start = new Date(startDate);
        const end = new Date(endDate);
        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        if (months < 0) {
            years--;
            months += 12;
        }
        const yearStr = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
        const monthStr = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";
        return [
            yearStr,
            monthStr
        ].filter(Boolean).join(" ");
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setDurations({
            sheetz: getDuration(new Date("2025-08-01"), new Date("2026-02-01")),
            cssg: getDuration(new Date("2024-08-01"), new Date("2025-05-01")),
            freelance: getDuration(new Date("2023-07-01")),
            bciResearch: getDuration(new Date("2026-02-01"))
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "bg-background text-text px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16 w-full max-w-full overflow-hidden scroll-mt-24",
        id: "experience",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "gradient-text",
                    children: "Experience"
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio/experience.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Portfolio/experience.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative border-l-2 md:border-l-4 border-primary pl-4 md:pl-6 ml-2 space-y-6 md:space-y-10 w-full max-w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        viewport: {
                            once: true
                        },
                        className: "relative glass-card rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 w-full max-w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "absolute w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -left-[1.15rem] md:-left-[1.4rem] top-4"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                        className: "text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary break-words",
                                        children: "Research Software Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg md:text-xl font-medium",
                                children: "Brain-Computer Interface Research Lab (Dr. Raghavendra Pradyumna Pothukuchi)"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Feb 2026 – Present"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "bg-primary text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap",
                                        children: durations.bciResearch
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-4 sm:pl-5 mt-3 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "Writing robust data pipelines and automated tests to validate and interpret experimental signals for a first-of-its-kind brain-computer interface platform."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "Building tooling to help standardize analysis workflows and improve reliability across datasets, with the goal of enabling an “Arduino-like” foundation for labs nationwide."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "font-semibold text-primary mt-2 break-words",
                                        children: "Skills: Python, Data Pipelines, Testing, Data Validation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/experience.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.1
                        },
                        viewport: {
                            once: true
                        },
                        className: "relative glass-card rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 w-full max-w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "absolute w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -left-[1.15rem] md:-left-[1.4rem] top-4"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                        className: "text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary break-words",
                                        children: "Sheetz"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg md:text-xl font-medium",
                                children: [
                                    "Associate Software Engineer Intern",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-text/70",
                                        children: " • Pittsburgh, PA (remote)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "May 2025 – Feb 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "bg-primary text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap",
                                        children: durations.sheetz
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-4 sm:pl-5 mt-3 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "Improved data quality across more than 2,000 database tables by identifying and removing corrupted or incomplete records and using AI-assisted documentation to enhance data discoverability company-wide."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "Built an automated CI/CD Python job that runs after each pull request to validate data integrity and ensure long-term reliability across production releases."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "Redesigned and optimized data pipelines to eliminate duplication, improve analytics accuracy, and strengthen insights."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "Collaborated in an Agile environment, performing peer code reviews and maintaining best practices for scalable, maintainable data solutions."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "Asked to return part-time following successful internship term."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "font-semibold text-primary mt-2 break-words",
                                        children: "Skills: Python, SQL, Databricks, Git, AWS, Tableau, Power BI"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/experience.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.2
                        },
                        viewport: {
                            once: true
                        },
                        className: "relative glass-card rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 w-full max-w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "absolute w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -left-[1.15rem] md:-left-[1.4rem] top-4"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary break-words",
                                        children: "Computer Science and Social Good"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg md:text-xl font-medium",
                                children: "Project Manager"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Aug 2024 – May 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "bg-primary text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap",
                                        children: durations.cssg
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-4 sm:pl-5 mt-3 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "Led a team of 8 developers to deliver a pet-matching web app for a nonprofit, managing sprints, stakeholders, and technical decisions."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: "Built the web scraping pipeline and matching engine, increasing adoption engagement."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: "font-semibold text-primary mt-2 break-words",
                                        children: "Skills: Leadership, Sprint Planning, Stakeholder Management, Web Scraping"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/experience.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.3
                        },
                        viewport: {
                            once: true
                        },
                        className: "relative glass-card rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 w-full max-w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "absolute w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -left-[1.15rem] md:-left-[1.4rem] top-4"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                        className: "text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary break-words",
                                        children: "Freelance Software Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Jul 2023 – Present"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "bg-primary text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap",
                                        children: durations.freelance
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-base sm:text-lg md:text-xl font-bold text-primary/80 mb-2 break-words",
                                        children: "Bonsai Property Care"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-4 sm:pl-5 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: "Designed and deployed a full-stack property care platform using TypeScript, Next.js, and Tailwind CSS with appointment scheduling, responsive design, and SEO optimization."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/experience.tsx",
                                                lineNumber: 215,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "font-semibold text-primary mt-2 break-words",
                                                children: "Skills: TypeScript, Next.js, Tailwind CSS, Project Planning"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/experience.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-base sm:text-lg md:text-xl font-bold text-primary/80 mb-2 break-words",
                                        children: "Magic Hour Portraits"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-4 sm:pl-5 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: "Built a full-stack photography portfolio website with admin tools for uploading projects and managing blog posts."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/experience.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "font-semibold text-primary mt-2 break-words",
                                                children: "Skills: TypeScript, Next.js, Tailwind CSS, API Development"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/experience.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-base sm:text-lg md:text-xl font-bold text-primary/80 mb-2 break-words",
                                        children: "Pediatric Blue Book"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-4 sm:pl-5 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: "Partnered with pediatric dieticians to create a HIPAA-compliant Next.js platform that replaces manual nutrient math with automated calculations and database-powered formula building."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/experience.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: "Designed secure PostgreSQL workflows that deliver ideal nutrient targets, printable formula plans, and rapid access to formulas, greatly simplifying dietician decision-making."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/experience.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "font-semibold text-primary mt-2 break-words",
                                                children: "Skills: TypeScript, Next.js, PostgreSQL, Data Security, Client Communication"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/experience.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-base sm:text-lg md:text-xl font-bold text-primary/80 mb-2 break-words",
                                        children: "Postprofundus"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-4 sm:pl-5 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: "A designer and lifestyle website built for a client, featuring immersive 3D renderings and a fully integrated online shop for apparel purchases."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/experience.tsx",
                                                lineNumber: 271,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: "The frontend is developed with Next.js, React, Three.js, and TypeScript, delivering an interactive, performance-optimized experience."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/experience.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: "font-semibold text-primary mt-2 break-words",
                                                children: "Skills: Next.js, React, Three.js, TypeScript, E-commerce"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/experience.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio/experience.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/experience.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/experience.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio/experience.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Portfolio/experience.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Experience;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Portfolio/headerNew.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/image.jpeg.mjs { IMAGE => "[project]/public/assets/image.jpeg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
/* eslint-disable @next/next/no-img-element */ "use client";
;
;
;
;
const Header = ()=>{
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        projects: 0,
        experience: 0,
        tech: 0
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;
        const targets = {
            projects: 10,
            experience: 2,
            tech: 15
        };
        let current = {
            projects: 0,
            experience: 0,
            tech: 0
        };
        const timer = setInterval(()=>{
            const increment = {
                projects: targets.projects / steps,
                experience: targets.experience / steps,
                tech: targets.tech / steps
            };
            current = {
                projects: Math.min(current.projects + increment.projects, targets.projects),
                experience: Math.min(current.experience + increment.experience, targets.experience),
                tech: Math.min(current.tech + increment.tech, targets.tech)
            };
            setStats({
                projects: Math.floor(current.projects),
                experience: Math.floor(current.experience),
                tech: Math.floor(current.tech)
            });
            if (current.projects >= targets.projects && current.experience >= targets.experience && current.tech >= targets.tech) {
                clearInterval(timer);
                setStats(targets);
            }
        }, interval);
        return ()=>clearInterval(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex-col w-full max-w-full overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex-col animated-gradient tech-grid w-full text-text pt-[50px] pb-[60px] sm:pb-[80px] md:pt-[75px] md:pb-[90px] xl:pt-[85px] xl:pb-[105px] 2xl:pt-[140px] 2xl:pb-[160px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center text-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/headerNew.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$image$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                alt: "Profile",
                                className: "relative float-animation items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full border-4 border-primary glow-effect"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/headerNew.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/headerNew.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio/headerNew.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex mt-8 sm:mt-10 md:mt-20 lg:mt-30 2xl:mt-40 items-center justify-center px-4 sm:px-10 md:px-20 lg:px-40 xl:px-64 2xl:px-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex-row items-center text-center justify-items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sans font-extrabold animate-slide-up w-full max-w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-3 md:mb-4 text-primary text-base sm:text-lg md:text-xl lg:text-2xl font-mono",
                                children: "Software Developer"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/headerNew.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "break-words",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-text",
                                        children: "Hello I'm "
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/headerNew.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "gradient-text",
                                        children: "Ethan Bonsall"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/headerNew.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/headerNew.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-[#e8e8e8]/70 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal mt-4 sm:mt-6 mx-auto break-words px-2",
                                children: "Full-Stack Developer | Data Engineer"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/headerNew.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-[#e8e8e8]/70 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal mt-4 sm:mt-6 mx-auto break-words px-2",
                                children: "UNC Chapel Hill | 3.8 GPA | Computer Science | Data Science"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/headerNew.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/headerNew.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio/headerNew.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.5
                    },
                    className: "flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 mt-8 sm:mt-12 md:mt-20 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "glass-card px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 rounded-lg md:rounded-xl text-center min-w-[100px] sm:min-w-[120px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text counter-animate",
                                    children: [
                                        stats.projects,
                                        "+"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Portfolio/headerNew.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-xs sm:text-sm md:text-base text-text/70 mt-1 md:mt-2 whitespace-nowrap",
                                    children: "Projects"
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio/headerNew.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Portfolio/headerNew.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "glass-card px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 rounded-lg md:rounded-xl text-center min-w-[100px] sm:min-w-[120px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text counter-animate",
                                    children: [
                                        stats.experience,
                                        "+"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Portfolio/headerNew.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-xs sm:text-sm md:text-base text-text/70 mt-1 md:mt-2 whitespace-nowrap",
                                    children: "Years Experience"
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio/headerNew.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Portfolio/headerNew.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "glass-card px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 rounded-lg md:rounded-xl text-center min-w-[100px] sm:min-w-[120px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text counter-animate",
                                    children: [
                                        stats.tech,
                                        "+"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Portfolio/headerNew.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-xs sm:text-sm md:text-base text-text/70 mt-1 md:mt-2 whitespace-nowrap",
                                    children: "Technologies"
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio/headerNew.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Portfolio/headerNew.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Portfolio/headerNew.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Portfolio/headerNew.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Portfolio/headerNew.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Portfolio/marcy.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarcyChatbotOverlay
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [ssr] (ecmascript)");
"use client";
;
;
;
function MarcyChatbotOverlay({ className = "" }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": "Open Marcy chatbot",
        onClick: ()=>router.push("/#marcy"),
        className: [
            "fixed z-50",
            // bottom-right with safe-area padding for iOS
            "right-[max(12px,env(safe-area-inset-right))]",
            "bottom-[max(12px,env(safe-area-inset-bottom))]",
            // responsive sizing
            "h-14 w-14 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px] lg:h-20 lg:w-20",
            // feel & polish
            "rounded-full shadow-lg border border-zinc-200 bg-white",
            "hover:shadow-xl active:scale-[0.98] transition",
            "overflow-hidden",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
            className
        ].join(" "),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: "/marcy.webp",
            alt: "Marcy",
            fill: true,
            sizes: "(max-width: 640px) 56px, (max-width: 768px) 64px, (max-width: 1024px) 72px, 80px",
            className: "object-cover",
            priority: true
        }, void 0, false, {
            fileName: "[project]/components/Portfolio/marcy.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Portfolio/marcy.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Portfolio/navbar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$linkedin$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$linkedin$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/linkedin-logo.svg.mjs { IMAGE => "[project]/public/assets/logos/linkedin-logo.svg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/github-logo.png.mjs { IMAGE => "[project]/public/assets/logos/github-logo.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nameLogo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/nameLogo.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import, [project]/node_modules/clsx)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
/* eslint-disable @next/next/no-img-element */ "use client";
;
;
;
;
;
;
;
;
const sections = [
    "education",
    "projects",
    "experience"
];
const NavBar = ()=>{
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Check if mobile
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        const handleScroll = ()=>{
            let current = "";
            for (const id of sections){
                const el = document.getElementById(id);
                if (el) {
                    const offset = el.offsetTop - 300;
                    if (window.scrollY >= offset) {
                        current = id;
                    }
                }
            }
            setActiveSection(current);
            // Calculate scroll progress (0 to 1, maxing at 300px scroll)
            const maxScroll = 300;
            const progress = Math.min(window.scrollY / maxScroll, 1);
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);
    // Calculate dynamic values based on scroll progress (only for desktop)
    const topOffset = isMobile ? 0 : scrollProgress * 24; // 0px to 24px
    const width = isMobile ? 100 : 100 - scrollProgress * 10; // 100% to 90%
    const borderRadius = isMobile ? 0 : scrollProgress * 9999; // 0 to fully rounded
    const horizontalPadding = isMobile ? 5 : 5 - scrollProgress * 3; // 5% to 2%
    const showGlow = !isMobile && scrollProgress > 0.3;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: "sticky z-50  w-full transition-all duration-300 ease-out flex justify-center",
        style: {
            top: `${topOffset}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("flex-row justify-between items-between text-text transition-all pb-1 duration-300 ease-out backdrop-blur-md", showGlow && "navbar-pill-glow", isMobile ? "w-full bg-background/80 border-b border-primary/20" : "bg-background/90 border border-primary/40"),
            style: {
                width: `${width}%`,
                borderRadius: `${borderRadius}px`,
                paddingLeft: isMobile ? undefined : `${horizontalPadding}%`,
                paddingRight: isMobile ? undefined : `${horizontalPadding}%`,
                paddingTop: isMobile ? undefined : `${8 + scrollProgress * 4}px`,
                paddingBottom: isMobile ? undefined : `${8 + scrollProgress * 4}px`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("flex max-w-full  justify-between items-center transition-all duration-300", isMobile ? "px-[5%]" : ""),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("flex items-center transition-all duration-300", isMobile && "gap-4 sm:gap-x-12"),
                        style: {
                            gap: isMobile ? undefined : `${48 - scrollProgress * 32}px`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "transition-all duration-300",
                                style: {
                                    transform: isMobile ? undefined : `scale(${1 - scrollProgress * 0.25})`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nameLogo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/Portfolio/navbar.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/navbar.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: `#${section}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "md:hidden",
                                                children: [
                                                    section === "education" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Portfolio/navbar.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    section === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Portfolio/navbar.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    section === "experience" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Portfolio/navbar.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Portfolio/navbar.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("hidden md:inline nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-transform after:duration-300 transition-all duration-300", isMobile && "md:text-4xl", activeSection === section ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"),
                                                style: {
                                                    fontSize: isMobile ? undefined : `${2.25 - scrollProgress * 0.75}rem`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "hidden md:inline",
                                                    children: section
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Portfolio/navbar.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/navbar.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio/navbar.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, section, false, {
                                    fileName: "[project]/components/Portfolio/navbar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/navbar.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("flex items-center transition-all duration-300", isMobile && "gap-1 md:gap-4"),
                        style: {
                            gap: isMobile ? undefined : `${16 - scrollProgress * 8}px`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/main-frame",
                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("group relative flex items-center justify-center overflow-hidden rounded-full border-2 border-green-500", "transition-all duration-300", "hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]", "hover:bg-green-500/10 ", isMobile && "w-10 h-10 md:w-14 md:h-14"),
                                style: {
                                    width: isMobile ? undefined : `${56 - scrollProgress * 16}px`,
                                    height: isMobile ? undefined : `${56 - scrollProgress * 16}px`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(0,255,0,0.08)_0px,rgba(0,255,0,0.08)_1px,transparent_1px,transparent_3px)]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio/navbar.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/navbar.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("text-green-400 transition-all duration-300", "group-hover:text-green-300", "group-hover:animate-[hacker-flicker_1.2s_infinite]", "group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.9)]", isMobile && "w-5 h-5 md:w-7 md:h-7"),
                                        style: {
                                            width: isMobile ? undefined : `${28 - scrollProgress * 8}px`,
                                            height: isMobile ? undefined : `${28 - scrollProgress * 8}px`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/navbar.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/navbar.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "/Ethan-Bonsall-Resume.pdf",
                                download: true,
                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("flex border-2 border-primary justify-center items-center text-center justify-items-center hover:bg-primary/20 rounded-full transition-all duration-300", isMobile && "w-10 h-10 md:w-14 md:h-14"),
                                style: {
                                    width: isMobile ? undefined : `${56 - scrollProgress * 16}px`,
                                    height: isMobile ? undefined : `${56 - scrollProgress * 16}px`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("text-primary justify-center text-center items-center transition-all", isMobile && "w-5 h-5 md:w-7 md:h-7"),
                                    style: {
                                        width: isMobile ? undefined : `${28 - scrollProgress * 8}px`,
                                        height: isMobile ? undefined : `${28 - scrollProgress * 8}px`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio/navbar.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/navbar.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/ethanbonsall/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$linkedin$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$linkedin$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                    alt: "LinkedIn",
                                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("image-hover h-auto rounded-full transition-all duration-300 bg-white", isMobile && "w-10 md:w-14"),
                                    style: {
                                        width: isMobile ? undefined : `${56 - scrollProgress * 16}px`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio/navbar.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/navbar.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "https://github.com/ethanbonsall",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                    alt: "GitHub",
                                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("image-hover h-auto rounded-full transition-all duration-300 z-50", isMobile && "w-10 md:w-14"),
                                    style: {
                                        width: isMobile ? undefined : `${56 - scrollProgress * 16}px`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio/navbar.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/navbar.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/navbar.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio/navbar.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Portfolio/navbar.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Portfolio/navbar.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavBar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Portfolio/projects.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
/* eslint-disable @next/next/no-img-element */ var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2d$alt$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2d$alt$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/github-logo-alt.png.mjs { IMAGE => "[project]/public/assets/logos/github-logo-alt.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
;
;
;
const TAGS = [
    {
        key: "web",
        label: "Web"
    },
    {
        key: "ai",
        label: "AI"
    },
    {
        key: "data",
        label: "Data"
    }
];
// since your --text is hex (#e8e8e8), use explicit rgba(232,232,232,alpha)
const TEXT_70 = "text-[rgba(232,232,232,0.7)]";
const TEXT_80 = "text-[rgba(232,232,232,0.8)]";
const BORDER_30 = "border-[rgba(232,232,232,0.3)]";
const BORDER_50 = "hover:border-[rgba(232,232,232,0.5)]";
const projects = [
    {
        name: "Magic Hour Portraits",
        link: "https://magichourportraits.com/",
        git: "https://github.com/ethanbonsall/Magic-Hour-Portraits",
        photo: "/assets/uploads/1magic-hour.png",
        tags: [
            "web"
        ],
        featured: true,
        description: "A full-stack website built for a photography business. The frontend is developed with Next.js and Tailwind CSS, and deployed via Vercel. The backend is powered by Supabase, serving as both the database and API layer, enabling seamless data retrieval and submission"
    },
    {
        name: "Chad GPT",
        git: "https://github.com/comp423-25s/csxl-a2",
        photo: "/assets/uploads/3chad-gpt.png",
        tags: [
            "web",
            "ai"
        ],
        description: "A chatbot developed for the UNC Computer Science website, built with Angular. Integrates ChatGPT to interpret user input and convert it into API requests, enabling users to check class availability, reserve study rooms, and schedule time with TAs."
    },
    {
        name: "Pediatric Blue Book",
        link: "https://pediatricbluebook.com",
        git: "https://github.com/ethanbonsall/Pediatric-Blue-Book",
        photo: "/assets/uploads/4pbb.png",
        tags: [
            "web",
            "data"
        ],
        featured: true,
        description: "A web app for dietitians to calculate patient nutrient needs and create formula recipes that meet those requirements. Built with Next.js and TypeScript, using Supabase to manage user profiles, saved recipes, nutrient data, and weight benchmarks."
    },
    {
        name: "Bonsai Property Care",
        link: "https://bonsaipropertycare.com/",
        git: "https://github.com/ethanbonsall/bonsai-property-care",
        photo: "/assets/uploads/2bonsai-property-care.png",
        tags: [
            "web"
        ],
        description: "A full-stack website built for a property care business. The frontend is developed with Next.js and Tailwind CSS, and deployed via Vercel. The backend is powered by Supabase, serving as both the database and API layer, enabling seamless data retrieval and submission"
    },
    {
        name: "Postprofundus",
        link: "https://postprofundus.org",
        git: "https://github.com/ethanbonsall/Postprofundus",
        photo: "/assets/uploads/9postprofundus.png",
        tags: [
            "web"
        ],
        featured: true,
        description: "A designer and lifestyle website built for a client, featuring immersive 3D renderings and a fully integrated online shop for apparel purchases. The frontend is developed with Next.js, React, Three.js, and TypeScript, delivering an interactive, performance-optimized experience."
    },
    {
        name: "AuditTrail",
        git: "https://github.com/ethanbonsall/audit-trail",
        photo: "/assets/uploads/91audittrail.png",
        tags: [
            "ai",
            "data"
        ],
        featured: true,
        description: "An open-source Python library for creating tamper-proof audit logs of API activity. Built as plug-and-play middleware for FastAPI, it cryptographically chains log entries, encrypts payloads at rest, and provides CLI verification tools, compliance reporting, and optional enterprise-grade security features."
    },
    {
        name: "Main Frame",
        link: "https://www.ethanbonsall.com/main-frame",
        git: "https://github.com/ethanbonsall/ethanbonsall-portfolio",
        photo: "/assets/uploads/92mainframe.png",
        tags: [
            "web"
        ],
        description: "A retro-styled interactive dashboard featuring a themed login experience, todo chart, and shared goals table. Built with React, TypeScript, and Tailwind CSS, it blends playful 'hacking' aesthetics with real user-driven functionality."
    },
    {
        name: "Study Buddy",
        link: "https://study-buddy-center.vercel.app/login",
        git: "https://github.com/ethanbonsall/study-buddy",
        photo: "/assets/uploads/5study-buddy.png",
        tags: [
            "web"
        ],
        description: "An all-in-one study platform similar to Discord but designed for school, featuring shared notes, live collaborative documents, study channels, and virtual study rooms. Built with Next.js, Supabase, and Supabase Realtime for real-time collaboration. Contact me if you’d like to see a demo."
    },
    {
        name: "Ethan's Birthday",
        link: "https://www.ethanbonsall.com/birthday",
        git: "https://github.com/ethanbonsall/ethanbonsall-portfolio",
        photo: "/assets/uploads/6party.png",
        tags: [
            "web",
            "data"
        ],
        description: "A birthday celebration website with RSVP submissions, photo uploads, and a shared Spotify playlist. Built with a Next.js frontend styled with Tailwind, and a Supabase backend integrating the Spotify API. Supabase for database and file storage."
    },
    {
        name: "Beautiful Together",
        link: "https://beautiful-together-next.vercel.app/tinder-page",
        git: "https://github.com/cssgunc/beautiful-together-next",
        photo: "/assets/uploads/7beautiful.png",
        tags: [
            "web",
            "data"
        ],
        description: "A website built for the animal sanctuary Beautiful Together, React frontend and Supabase backend. Includes a Tinder-like interface to streamline pet adoption. Contributed to preferences, pet ranking system, and design of animal profile cards."
    },
    {
        name: "Not Wordle",
        link: "https://not-wordle-mu.vercel.app/",
        git: "https://github.com/ethanbonsall/not-wordle",
        photo: "/assets/uploads/8wordle.png",
        tags: [
            "web"
        ],
        description: "A Wordle clone built with React and styled using Tailwind CSS."
    }
];
const Web = ()=>{
    // Single source of truth (no more parallel arrays + index mapping)
    const [activeTags, setActiveTags] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (activeTags.length === 0) return projects;
        // AND match (must include ALL selected tags)
        return projects.filter((p)=>activeTags.some((t)=>p.tags.includes(t)));
    }, [
        activeTags
    ]);
    const majors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const featured = filtered.filter((p)=>p.featured);
        const picked = [
            ...featured,
            ...filtered.filter((p)=>!p.featured)
        ];
        return picked.slice(0, 2);
    }, [
        filtered
    ]);
    const minors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const majorNames = new Set(majors.map((m)=>m.name));
        return filtered.filter((p)=>!majorNames.has(p.name));
    }, [
        filtered,
        majors
    ]);
    const toggleTag = (t)=>{
        setActiveTags((prev)=>prev.includes(t) ? prev.filter((x)=>x !== t) : [
                ...prev,
                t
            ]);
    };
    const clear = ()=>setActiveTags([]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "bg-background text-text z-0 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16 w-full max-w-full overflow-hidden scroll-mt-28 ",
        id: "projects",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-end justify-between gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl z-0 font-bold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "gradient-text",
                            children: "Projects"
                        }, void 0, false, {
                            fileName: "[project]/components/Portfolio/projects.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/projects.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-end gap-2 ",
                        children: [
                            TAGS.map((t)=>{
                                const on = activeTags.includes(t.key);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggleTag(t.key),
                                    className: [
                                        "rounded-full border px-3 py-1 text-sm transition-colors",
                                        on ? "bg-primary text-background border-primary" : `border ${BORDER_30} ${TEXT_80} hover:text-text ${BORDER_50}`
                                    ].join(" "),
                                    children: t.label
                                }, t.key, false, {
                                    fileName: "[project]/components/Portfolio/projects.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: clear,
                                className: [
                                    "rounded-full border px-3 py-1 text-sm transition-colors",
                                    BORDER_30,
                                    TEXT_70,
                                    "hover:text-text",
                                    BORDER_50
                                ].join(" "),
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/projects.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Portfolio/projects.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio/projects.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid mb-8 grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full",
                children: majors.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "glass-card rounded-2xl overflow-hidden group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden",
                                children: p.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: p.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: p.photo,
                                                alt: p.name,
                                                className: "w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/projects.tsx",
                                                lineNumber: 226,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/projects.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                        lineNumber: 225,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Portfolio/projects.tsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            src: p.photo,
                                            alt: p.name,
                                            className: "w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio/projects.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio/projects.tsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Portfolio/projects.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Portfolio/projects.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-primary",
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: [
                                                                    "text-xs px-2 py-0.5 rounded-full border",
                                                                    BORDER_30,
                                                                    TEXT_70
                                                                ].join(" "),
                                                                children: t.toUpperCase()
                                                            }, t, false, {
                                                                fileName: "[project]/components/Portfolio/projects.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Portfolio/projects.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: p.git,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "opacity-70 hover:opacity-100 transition-opacity",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2d$alt$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2d$alt$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                                    alt: "GitHub",
                                                    className: "w-6 h-6 bg-white rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Portfolio/projects.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/projects.tsx",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: `${TEXT_80} text-sm leading-relaxed`,
                                        children: p.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Portfolio/projects.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, p.name, true, {
                        fileName: "[project]/components/Portfolio/projects.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/Portfolio/projects.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "\n            flex flex-row gap-4 md:gap-6\n            overflow-x-auto pb-2\n            snap-x snap-mandatory\n            custom-scrollbar\n            [-webkit-overflow-scrolling:touch]\n          ",
                        children: minors.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "\n                glass-card rounded-2xl overflow-hidden group\n                shrink-0\n                snap-start\n                w-[78%] sm:w-[52%] md:w-[40%] lg:w-[28%]\n              ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden",
                                        children: p.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: p.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                        src: p.photo,
                                                        alt: p.name,
                                                        className: "w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Portfolio/projects.tsx",
                                                lineNumber: 317,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Portfolio/projects.tsx",
                                            lineNumber: 311,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                    src: p.photo,
                                                    alt: p.name,
                                                    className: "w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Portfolio/projects.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Portfolio/projects.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Portfolio/projects.tsx",
                                            lineNumber: 327,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                className: "text-sm font-bold text-primary",
                                                                children: p.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Portfolio/projects.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: [
                                                                            "text-[10px] px-2 py-0.5 rounded-full border",
                                                                            BORDER_30,
                                                                            TEXT_70
                                                                        ].join(" "),
                                                                        children: t.toUpperCase()
                                                                    }, t, false, {
                                                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                                                        lineNumber: 344,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Portfolio/projects.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                        href: p.git,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "opacity-70 hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2d$alt$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2d$alt$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                                            alt: "GitHub",
                                                            className: "w-5 h-5 bg-white rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Portfolio/projects.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Portfolio/projects.tsx",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: `${TEXT_80} text-xs leading-relaxed line-clamp-[7]`,
                                                children: p.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/Portfolio/projects.tsx",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Portfolio/projects.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, p.name, true, {
                                fileName: "[project]/components/Portfolio/projects.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/projects.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `${TEXT_70} text-sm`,
                        children: "No projects match those filters."
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/projects.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio/projects.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Portfolio/projects.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Web;
}),
"[project]/components/Portfolio/skills.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
/* eslint-disable @next/next/no-img-element */ var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$java$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$java$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/java.png.mjs { IMAGE => "[project]/public/assets/logos/java.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$python$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$python$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/python.png.mjs { IMAGE => "[project]/public/assets/logos/python.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$javaScript$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$javaScript$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/javaScript.png.mjs { IMAGE => "[project]/public/assets/logos/javaScript.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$typeScript$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$typeScript$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/typeScript.png.mjs { IMAGE => "[project]/public/assets/logos/typeScript.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$cpp$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$cpp$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/cpp.png.mjs { IMAGE => "[project]/public/assets/logos/cpp.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$sql$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$sql$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/sql.png.mjs { IMAGE => "[project]/public/assets/logos/sql.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$react$2d$1$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$react$2d$1$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/react-1.svg.mjs { IMAGE => "[project]/public/assets/logos/react-1.svg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$angular$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$angular$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/angular.png.mjs { IMAGE => "[project]/public/assets/logos/angular.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$expressjs$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$expressjs$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/expressjs.png.mjs { IMAGE => "[project]/public/assets/logos/expressjs.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$nextjs$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$nextjs$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/nextjs.png.mjs { IMAGE => "[project]/public/assets/logos/nextjs.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$pandas$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$pandas$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/pandas.svg.mjs { IMAGE => "[project]/public/assets/logos/pandas.svg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$postgres$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$postgres$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/postgres.png.mjs { IMAGE => "[project]/public/assets/logos/postgres.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$supabase$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$supabase$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/supabase.jpg.mjs { IMAGE => "[project]/public/assets/logos/supabase.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$tableau$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$tableau$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/tableau.png.mjs { IMAGE => "[project]/public/assets/logos/tableau.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$tensorflow$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$tensorflow$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/tensorflow.png.mjs { IMAGE => "[project]/public/assets/logos/tensorflow.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$css$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$css$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/css.svg.mjs { IMAGE => "[project]/public/assets/logos/css.svg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$html$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$html$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logos/html.png.mjs { IMAGE => "[project]/public/assets/logos/html.png (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Skills = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "bg-background text-text px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16 w-full max-w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "gradient-text",
                    children: "Skills & Technologies"
                }, void 0, false, {
                    fileName: "[project]/components/Portfolio/skills.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Portfolio/skills.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mb-8 md:mb-12 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6",
                        children: "Programming Languages"
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/skills.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 w-full",
                        children: [
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$java$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$java$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "Java"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$python$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$python$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "Python"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$javaScript$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$javaScript$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "JavaScript"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$typeScript$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$typeScript$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "TypeScript"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$cpp$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$cpp$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "C++"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$sql$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$sql$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "SQL"
                            }
                        ].map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-lg md:rounded-xl p-3 md:p-4 flex flex-col items-center justify-center group w-full max-w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: tech.src.src,
                                        alt: tech.name,
                                        className: "w-10 sm:w-12 md:w-16 lg:w-20 h-auto transition-transform duration-300 group-hover:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/skills.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs sm:text-sm mt-2 text-text/70 text-center break-words",
                                        children: tech.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/skills.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/components/Portfolio/skills.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/skills.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio/skills.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mb-8 md:mb-12 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6",
                        children: "Frameworks & Libraries"
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/skills.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 w-full",
                        children: [
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$react$2d$1$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$react$2d$1$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "React"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$nextjs$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$nextjs$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "Next.js",
                                bg: true
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$angular$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$angular$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "Angular"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$supabase$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$supabase$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "Supabase"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$tensorflow$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$tensorflow$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "TensorFlow"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$expressjs$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$expressjs$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "Express.js"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$postgres$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$postgres$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "PostgreSQL"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$pandas$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$pandas$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "Pandas",
                                bg: true
                            }
                        ].map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-lg md:rounded-xl p-3 md:p-4 flex flex-col items-center justify-center group w-full max-w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: tech.src.src,
                                        alt: tech.name,
                                        className: `w-10 sm:w-12 md:w-16 lg:w-20 h-auto transition-transform duration-300 group-hover:scale-110 ${tech.bg ? 'bg-white/10 rounded-lg p-1' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/skills.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs sm:text-sm mt-2 text-text/70 text-center break-words",
                                        children: tech.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/skills.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/components/Portfolio/skills.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/skills.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio/skills.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6",
                        children: "Tools & Others"
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/skills.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 w-full",
                        children: [
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$tableau$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$tableau$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "Tableau"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$css$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$css$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "CSS"
                            },
                            {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$html$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$html$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                name: "HTML",
                                bg: true
                            }
                        ].map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-lg md:rounded-xl p-3 md:p-4 flex flex-col items-center justify-center group w-full max-w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: tech.src.src,
                                        alt: tech.name,
                                        className: `w-10 sm:w-12 md:w-16 lg:w-20 h-auto transition-transform duration-300 group-hover:scale-110 ${tech.bg ? 'bg-white/10 rounded-lg p-1' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/skills.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs sm:text-sm mt-2 text-text/70 text-center break-words",
                                        children: tech.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Portfolio/skills.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/components/Portfolio/skills.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/Portfolio/skills.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Portfolio/skills.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Portfolio/skills.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Skills;
}),
"[project]/components/nameLogo.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @next/next/no-html-link-for-pages */ __turbopack_context__.s([
    "default",
    ()=>nameLogo
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function nameLogo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "px-1 py-[4px] md:px-2 md:py-[10px] items-center rounded-xl justify-items-center border-2 text-sans font-extrabold text-2xl md:text-3xl lg:text-4xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
            href: "/#home",
            children: "EB"
        }, void 0, false, {
            fileName: "[project]/components/nameLogo.tsx",
            lineNumber: 5,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/nameLogo.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$classes$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Portfolio/classes.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$headerNew$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Portfolio/headerNew.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$projects$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Portfolio/projects.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$education$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Portfolio/education.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$skills$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Portfolio/skills.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$experience$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Portfolio/experience.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Portfolio/navbar.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$chatbot$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Portfolio/chatbot.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$marcy$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Portfolio/marcy.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$headerNew$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$experience$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$headerNew$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$experience$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
const Portfolio = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "bg-background flex flex-col items-center font-robot min-h-screen",
        id: "home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Ethan Bonsall"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Ethan Bonsall's personal portfolio website showcasing education, experience, skills, and projects."
                    }, void 0, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$headerNew$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$projects$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$experience$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$education$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$classes$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$skills$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$chatbot$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                placeholder: "hi i'm marcy, ethan's cat, ask me anything!",
                onSendAction: async (message, history, mode)=>{
                    const res = await fetch("/api/chat", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            topic: message,
                            history: history.slice(-4),
                            mode
                        })
                    });
                    const data = await res.json();
                    if (!res.ok || !data?.success) {
                        throw new Error(data?.message || "Chat request failed");
                    }
                    return data.content;
                }
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Portfolio$2f$marcy$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Portfolio;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/public/assets/image.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/image.2yvy3lux9josv.jpeg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/image.jpeg.mjs { IMAGE => \"[project]/public/assets/image.jpeg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/image.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$image$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 886,
    height: 886,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC94k+IVza+LI/sE00tmqjMCDG7jOeetO0rWtqGm5//2Q=="
};
}),
"[project]/public/assets/logos/angular.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/angular.0kv3uezv04f_8.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/angular.png.mjs { IMAGE => \"[project]/public/assets/logos/angular.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$angular$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/angular.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$angular$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2048,
    height: 2048,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA80lEQVR42k2OPUhCYRSG31Ofgt6ILkhWhChkEPlDSGO011qbWxREES1BRMtFcRBXBwcHnUSu4OzmXa6rg4Mg+DP4M+jgLB6/TxR84IXD+8LhATYQsKdDeI5k1L3tIUCOCNy33zg1TC1q57WI/YIT40p2aoMH4riCy0aHbpaT+D+3439sUXSZQ7AhP3pxgP3DEoJWV7/nWabIw0yBbf2Os7iwNLnBAXJmETBHj188L9d4KtN6+OQk/KbalBz9Cl96/JZY9MLP3Aw/cfvVWHyI8zSt3SVn5PT9uAKpOoX6VboevLv8Ka/ssIsyDsEdk/axtf2GFYEvQ1+tmB+0AAAAAElFTkSuQmCC"
};
}),
"[project]/public/assets/logos/cpp.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cpp.1ptvugdhlphrp.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/cpp.png.mjs { IMAGE => \"[project]/public/assets/logos/cpp.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$cpp$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/cpp.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$cpp$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1200,
    height: 1351,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/AAEBAQEOFh4kPFt8ll2Owus8W3yWDhYeJAEBAQEAKkBXaFR/q8+CrNj8m73i/4Ks2PxUf6vPJj1VaABjls34l7vh/+bv+P/g6vb/4Ov1/3Chz/8fa6n4AGue1P/R4fL/tc7p/2KXzP9Sjr//PoG0/yx2rf8Aa57U/9Dg8f+hvdn/JWOb/z59r/88gLP/LHat/wBDe7T4Y4+4/9bh6//L2eb/0N3o/zx1pv8AUJD4AAQfOGgEOmvOMmiZ/FiFrf8yaJn8BDprzgAdNmgAAAABAQAJEiMAKE2VAD946gAoTZUAChIjAAABAR9Ud7APJB4YAAAAAElFTkSuQmCC"
};
}),
"[project]/public/assets/logos/css.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/css.37iaf2bpxc4oe.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/css.svg.mjs { IMAGE => \"[project]/public/assets/logos/css.svg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$css$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/css.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$css$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2183,
    height: 2500,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/public/assets/logos/expressjs.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/expressjs.3x-mwqjjyn9t-.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/expressjs.png.mjs { IMAGE => \"[project]/public/assets/logos/expressjs.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$expressjs$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/expressjs.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$expressjs$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 240,
    height: 240,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0UlEQVR42m2PsQsBcRTHLwuO+8lu9n/4B4x2JcNNJpIoSlkMjDcYMEjp4jrhdCIlRinuKIOODJTF6Kt33WAwfHuv9/n23vdxUTHlypZikY0cnj0WwTeJepoR46g5qCHzqrGPNWEg3aYMxjBkEuPIfVIYWmUejSIPqcCjU+FxVhmIcbTyOQ/A0hi2XQG65IdS9+GuMxCzDa9lAKRe1YdM3I1cwoPL2DHQGoJ7WUA+6UEt7YUYc2PdFuiEboc8juyQWDX9MPpUBewGTsifN/V/b34BpGaR0/gQNQ8AAAAASUVORK5CYII="
};
}),
"[project]/public/assets/logos/github-logo-alt.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/github-logo-alt.39_xu89y7c8tx.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/github-logo-alt.png.mjs { IMAGE => \"[project]/public/assets/logos/github-logo-alt.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2d$alt$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/github-logo-alt.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2d$alt$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2048,
    height: 1993,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAkElEQVR42m3OIQrCYBTA8afBoFUwqRj0EKLeQUGD2WNYxKBHsHoJQUSDbEtjO8AWV5Y3xtb2f/BgZR/8wuP9+XgiIl1s8EVhPljZTtZwESIxARwsNXibCeZYYIofXhrkuKAjzdOv78h0KHFtCW6odPDsqC36GGCPCL4GOzxxxhAzxEhx0KCHIx4YYYw/TrqrAbM6HKFGcrMgAAAAAElFTkSuQmCC"
};
}),
"[project]/public/assets/logos/github-logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/github-logo.0or60fz4rd4d2.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/github-logo.png.mjs { IMAGE => \"[project]/public/assets/logos/github-logo.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/github-logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 220,
    height: 220,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwUlEQVR42mWMQQqCUBRF/yYqaRiOwzBDQhyl4jjHOchJriEXkZKTpL+JVFyOgmAuwIngrfehUQ8uXM5577FxHFFVFRzHxnIpiVAnRo7l+QuWdYBtW1DVjQh1YuSYaRrw/RO6rkNd1yLUiZFjkjRHksSYpgm/oU6MHFssZojj298CMXJM07bwvCPKssQwDCJFkcMw9lCUNRjnTwTBGVF0Rd/3aJoaur6DLK+QZQ8wuuCcIwwv34U32raF6zpI07v49gFo6q2RpMuDeQAAAABJRU5ErkJggg=="
};
}),
"[project]/public/assets/logos/html.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/html.14v4vk7qipi1c.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/html.png.mjs { IMAGE => \"[project]/public/assets/logos/html.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$html$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/html.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$html$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABB0lEQVR42j3Oz2uBcRzA8e93sy0H2yMH0Z4t+6EcHNZqazts57W11GonpB65CTlSCEWiHqInyUEeHLgoufsDHPwN5IkLB08uno/vl/jU+/J5fQ4fhPbzQSqQEqQKiSexOzk7weffBo2TMzFJ7o6Jue+1cfeDNvtj1LioIfUpVtff2P7E+6tMQw5lmeaUZeRPaX3e9KkhFcaq4gsrSp0qzBoFkNs5WAkBEN6vRWoII4TjVj0vVdIw79ZgPWiD3ExB8knPU9v94TPrwtNMEKSMH1a1GMgdHgIWXRgdxn575Rn7bJuZmAe5V4ZF9H/jMDGe44Hl8sJaejY0h1+Pk5HNPBZejQ26o7YF7xha4sFcsrAAAAAASUVORK5CYII="
};
}),
"[project]/public/assets/logos/java.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/java.4578c6fm8d3xv.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/java.png.mjs { IMAGE => \"[project]/public/assets/logos/java.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$java$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/java.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$java$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRkABAABXRUJQVlA4TDMBAAAvB8ABEM1VICICHggIDgIAAIB7tqVBEjIIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsIrOX16wEAgAeCdoQAAABw/u9vzQkgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAAAWuspoHQmCEAAAAcP43vxISAAEkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACICg9C0PBAQHAQAA4PzvX2xDJSIgAxCKAAAAAQAAAAAAAAAAAAAAAAAAAAAABBsAqCHRqiUQwJ/H3b413Pq1B+BzPM2xnUv0bgCe/HXnfmzLeg3WfoCLaHunlKLXWpkFAhjxD7tf83TlHmpue67syhxnaQJQk6VpOZd1OtY+VDOP1WlSANvdvOn/BBUKNSnN6wCMvrg+ee/4YrdK65Nj6LAAAA=="
};
}),
"[project]/public/assets/logos/javaScript.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/javaScript.011ugyduhhsha.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/javaScript.png.mjs { IMAGE => \"[project]/public/assets/logos/javaScript.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$javaScript$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/javaScript.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$javaScript$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2000,
    height: 2000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAj0lEQVR42qXJoQ6CQAAAULIS4DxlIt7/GLUYSG7+hG5uJkSDcwydySkzwggUGlAZGxQgMAYJGoUxKiNRaGyvPaxOUC9sQAQW7Vu0IVOaNCvCZRfvK+CPxHo1up/J3GO6ePHgeQHcgdhtcUeft1FG6C/CPYuLHLidSHYz/j4mbVQxMhXqJ8DUXqifqSTAzGUaVfZrcyKVxr0AAAAASUVORK5CYII="
};
}),
"[project]/public/assets/logos/linkedin-logo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/linkedin-logo.1ugdbzlvnp65l.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/linkedin-logo.svg.mjs { IMAGE => \"[project]/public/assets/logos/linkedin-logo.svg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$linkedin$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/linkedin-logo.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$linkedin$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2500,
    height: 2500,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/public/assets/logos/nextjs.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/nextjs.07on7e39tm9xl.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/nextjs.png.mjs { IMAGE => \"[project]/public/assets/logos/nextjs.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$nextjs$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/nextjs.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$nextjs$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAiUlEQVR42jXPOQ6CUBSF4Rtdj2twWpB7sLE1xsbGTleh0YQd0BGgoaCmAUIY/0sOxUfCe3d4x8xshS0+qFDjhwPWsB0idBgxoEGMo6m6xxMJCrzU8DeN9Z8TzshwQat186fToU9546aCalnhBVd13xFord/ZXo/M1ZXigVBJ5pie5KuRpdZtPOYEGZMshLG/6DkAAAAASUVORK5CYII="
};
}),
"[project]/public/assets/logos/pandas.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/pandas.12d999uqnsubm.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/pandas.svg.mjs { IMAGE => \"[project]/public/assets/logos/pandas.svg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$pandas$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/pandas.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$pandas$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 665,
    height: 471,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/public/assets/logos/postgres.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/postgres.3pa3e_k6sjt7c.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/postgres.png.mjs { IMAGE => \"[project]/public/assets/logos/postgres.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$postgres$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/postgres.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$postgres$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 800,
    height: 825,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AC40OH5VbH/hX3OD31xwgN1feI3veI+h+ltyhuktMzh/AFhyh+43apP/YYmq/0d2nP81aJL/UX6h/12GqP9ZcofwAFh1i/Q2aZP/c5e0/3CUsv8+b5f/aY+u/3eZtf9UanvhAE1ebMw8bpb/X4ip/1WAo/9Ec5r/XIan/36btP02PkSUAC40OX1Jc5X7a4yo/3uas/8/cJj/R3ac/4+grvY5PD2VAAkKCiJFUl2yaXJ62H6NmuxMeJz+SHWY/mNveMw2ODqCAAAAAAACAgIOBgYGGycrLmVIcZP5SnGQ9xseIE4AAAACAAAAAAAAAAAAAAAAABAREipWbH3eTl9txwkKCh0AAAAAOn5zcAD+hxEAAAAASUVORK5CYII="
};
}),
"[project]/public/assets/logos/python.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/python.2o404knjy2s46.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/python.png.mjs { IMAGE => \"[project]/public/assets/logos/python.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$python$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/python.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$python$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRooBAABXRUJQVlA4TH0BAAAvB8ABEM1VICICHgiADQIAAICneRWFEw8QIAoAABKAH0AAAACIAgAAAAEAAAEgggOQQBAAEE8J6t4LAADAAwHIQQAAADj/38koiVrAaBQAABAEYAAAAAAAAAAAAAAAAAAAAAAAEEiQJDBUL21tHggADiIAAMD5b1ddSTUIgYMCAQAEAAgAgAAAAAoAAAgCAAAMAAAAgCAEQSJNKcR/w+aBANggAAAAnP+P93hAciCBDgEAAgACgAMCABwADgAEQRcAIAkAAAEKAADIKBWIdNyTiBjGP0TVlvWxE9UZHLS29yDMrl4YCxHC8MXU+ZA/wjwQgdEnLCP8Mg+aFQs1fC4my8Xi9h5FxLCPjzWd7Goj2/xIa8KBwJkmUF6fqY8t0NOZVktRNqP8yXqdv1c2DcBsFzDbUj72OZFP/BH3s1ZGqnNJ1JzQQnFb/v8r+vfCtPZnZUS/6XFYlYJ9kWDIDRE57hzatZHdXmsD63aB+3CV4+YFqMTtxDRLnxw6uQ4A"
};
}),
"[project]/public/assets/logos/react-1.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/react-1.0qx0j8-rzay8y.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/react-1.svg.mjs { IMAGE => \"[project]/public/assets/logos/react-1.svg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$react$2d$1$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/react-1.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$react$2d$1$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 3619,
    height: 3619,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/public/assets/logos/sql.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/sql.3sb2j0b8opw1r.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/sql.png.mjs { IMAGE => \"[project]/public/assets/logos/sql.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$sql$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/sql.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$sql$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1521,
    height: 2048,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAtklEQVR42k2My4qBcRiHnwubWdtMatQ0hRBJKSIWlL6ELBRl4QZEQgpFfGTjEoiFEEWS80Ihp++/snh6334nMPgltB4fKr0Rlc7Av8srNErTNZZglG+1hi/1L6ZAiOJ4Be3Tk9bxQWN7FSi/olGe75DSecL5irhJuUv7bVIYLflzutHYHfyYrZilMNXFERqbC7nhjNxgRrzWIdufUF+fobm/ic1P5MMdbJEYmd5EBOQ3StuZSL0A5apiMsCZDAIAAAAASUVORK5CYII="
};
}),
"[project]/public/assets/logos/supabase.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/supabase.20rj4iehgl_6l.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/supabase.jpg.mjs { IMAGE => \"[project]/public/assets/logos/supabase.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$supabase$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/supabase.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$supabase$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 900,
    height: 900,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzs/2cdMGPNF4rc9NrZ/oAP1pa3MP3vtenKf/Z"
};
}),
"[project]/public/assets/logos/tableau.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/tableau.178h0j7_tl9bj.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/tableau.png.mjs { IMAGE => \"[project]/public/assets/logos/tableau.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$tableau$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/tableau.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$tableau$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 96,
    height: 96,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA60lEQVR42jWPTU+DQBiE3/2ABZvY3YCsCA0UWGulsmBtIaF6NJr0ZmxvHmo89+Ldv26XpHOYyzOZyQCcZFOwHRs7Rak3caY0oZaLMaaGAbOA9Qr6zS16TrJUyzi5j/LZm5BhNYT4CIt9i/a7Nex0yB7TgGvVrL/jYv5OLfsCTO3dLO2aiD399sHfz9I/plLU8bR7CcJKg9ksoslqzp3awM9SfHlC1v5N0wo/V3BJiLfl/LAdjw+KuwuP+w928nqkcvWBCBsBQYhmjC1yx62iybLzrsuK8LzF7tUUEMLDk5MTgjA1m0MtIvQM/wFz8xyapMPIYQAAAABJRU5ErkJggg=="
};
}),
"[project]/public/assets/logos/tensorflow.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/tensorflow.1iotwfq3v26vq.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/tensorflow.png.mjs { IMAGE => \"[project]/public/assets/logos/tensorflow.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$tensorflow$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/tensorflow.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$tensorflow$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1200,
    height: 1287,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/AAAAAAAEAwEEOSwOOrWLLLm1iyy6OSwOOgQDAQQAGhQGG3VaHHjapDPg8qQy/u+VNP7ZnzPggGAegwDDgSzM8Ks0+vCZKv/ggyPxtVAjx+NyLvfpkir5AMtcJ9/TeSPj4nMn99iDJedILg9LXCgRZGU5EG0AJBAHJz0dC0LLVCjg7Y0y/byCJ8UXDwQYAQAAAQAAAAAAHQwGIMlSJ9/lair7p2AbsxMLAxQAAAAAAAAAAAAdDAYgylYm39N2IuQrGQcuAAAAAAAAAAAAAAAAABAGAxKeRB6uolsarhEKAxIAAAAAAAAAAHItSTrrhjmWAAAAAElFTkSuQmCC"
};
}),
"[project]/public/assets/logos/typeScript.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/typeScript.12iniij3tqp6b.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/public/assets/logos/typeScript.png.mjs { IMAGE => \"[project]/public/assets/logos/typeScript.png (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$typeScript$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/logos/typeScript.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$typeScript$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRjABAABXRUJQVlA4TCMBAAAvB8ABEM1VICICHghACgMAAID7hTQ1PQAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAACIEtif/RBwgA4IEApDAAAACc/1VF82msgAEGAAAAAAAAAAAAAAAAAACAAQAAAAAAAAAAIsIXD/J5IAApDAAAAOd//ZBqkQUAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAIAikvMpn5YEApDAAAACc//UAIEAAwIgBCERgYAQAAAAAAAAABAAAAEQAMAACohQAMDxgwBuU5U8AgOPlfx5PL722LLTaT7NK5sfsFQAwYH83j/aWrGFz/XLSSxZwBQDcfswznU9ibOQ3BPbuLbVLlBcANh1FlxKZOx82KTP4ZxoTAPa97MEt3qSkvegz9y/yCBcA"
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05d56nq._.js.map