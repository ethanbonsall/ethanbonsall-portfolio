(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/main-frame\" }", (function(__turbopack_context__){
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/main-frame.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/main-frame.tsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/main-frame";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/main-frame.tsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[project]/lib/supabaseClient.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [client] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://tclvofuwnfrwbvfsqgly.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjbHZvZnV3bmZyd2J2ZnNxZ2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyOTk3NjMsImV4cCI6MjA4Njg3NTc2M30.NUamtxf6xiJKvPpL_s37T6tT16uGTlXVefb5ySPwAwM"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/main-frame.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainFramePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const HACK_CODE = `from cyber import hack

with hack.mainframe(root=True) as mf:
    mf.bypass("security_layer")
    mf.inject("access_token")
    mf.unlock("core_system")`;
const ASCII_MAINFRAME = `
  ‎ _   _      _ _         _   _               
| | | |    | | |       | | | |              
| |_| | ___| | | ___   | | | |___  ___ _ __ 
|  _  |/ _ \\ | |/ _ \\  | | | / __|/ _ \\ '__|
| | | |  __/ | | (_) | | |_| \\__ \\  __/ |   
\\_| |_/\\___|_|_|\\___/   \\___/|___/\\___|_|   
                                            
`;
const ASCII_HELLO = `
  ‎ _   _      _ _       
| | | |    | | |      
| |_| | ___| | | ___  
|  _  |/ _ \\ | |/ _ \\
| | | |  __/ | | (_) |
\\_| |_/\\___|_|_|\\___/  `;
const SERVER_OPTIONS = [
    {
        label: "todo.server",
        href: "/todo"
    },
    {
        label: "goals.server",
        href: "/goals"
    },
    {
        label: "expenses.server",
        href: "/expenses"
    },
    {
        label: "subscriptions.server",
        href: "/subscriptions"
    }
];
const FIRST_TIME_OPTIONS = [
    "Yes, I need to hack in",
    "No, I already created a backdoor"
];
function MainFramePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [authChecked, setAuthChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("init");
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [typed, setTyped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSignUp, setIsSignUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hackCodeIndex, setHackCodeIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hackCodeDisplay, setHackCodeDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const preRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cursorTopPx, setCursorTopPx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mirrorBeforeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mirrorCaretRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cursorLeft, setCursorLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cursorW, setCursorW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [selectedIdx, setSelectedIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainFramePage.useEffect": ()=>{
            const check = {
                "MainFramePage.useEffect.check": ()=>setIsMobile(("TURBOPACK compile-time value", "object") !== "undefined" && window.innerWidth < 768)
            }["MainFramePage.useEffect.check"];
            check();
            window.addEventListener("resize", check);
            return ({
                "MainFramePage.useEffect": ()=>window.removeEventListener("resize", check)
            })["MainFramePage.useEffect"];
        }
    }["MainFramePage.useEffect"], []);
    const currentOptions = step === "server_select" ? SERVER_OPTIONS.map((o)=>o.label) : step === "first_time" ? [
        ...FIRST_TIME_OPTIONS
    ] : [];
    function measureTextWidth(container, text) {
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
    const updateCursor = ()=>{
        const pre = preRef.current;
        const el = inputRef.current;
        const before = mirrorBeforeRef.current;
        const caret = mirrorCaretRef.current;
        if (!pre || !before || !caret) return;
        const pos = step === "hack_code" ? hackCodeDisplay.length : el?.selectionStart ?? typed.length;
        const shown = step === "hack_code" ? hackCodeDisplay : step === "password" ? "•".repeat(typed.length) : typed;
        before.textContent = shown.slice(0, pos);
        caret.textContent = shown[pos] ?? " "; // one char for width; empty at end
        const prompt = ">";
        const promptWidth = measureTextWidth(pre, `${prompt} `);
        const left = promptWidth + before.getBoundingClientRect().width;
        const w = caret.getBoundingClientRect().width || 10;
        setCursorLeft(left);
        setCursorW(w);
        const lineHeight = parseFloat(getComputedStyle(pre).lineHeight || "20");
        const totalLines = (lines.join("\n") + "\n").split("\n").length;
        setCursorTopPx((totalLines - 1) * lineHeight);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "MainFramePage.useLayoutEffect": ()=>{
            updateCursor();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MainFramePage.useLayoutEffect"], [
        typed,
        step,
        lines,
        selectedIdx,
        hackCodeDisplay
    ]);
    const sleep = (ms)=>new Promise((r)=>setTimeout(r, ms));
    async function typeLine(text, speed = 28) {
        setLines((prev)=>[
                ...prev,
                ""
            ]);
        let cur = "";
        for(let i = 0; i < text.length; i++){
            cur += text[i];
            setLines((prev)=>{
                const copy = [
                    ...prev
                ];
                copy[copy.length - 1] = cur;
                return copy;
            });
            await sleep(speed);
        }
    }
    // --- Auth check on mount ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainFramePage.useEffect": ()=>{
            ({
                "MainFramePage.useEffect": async ()=>{
                    const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    setUserId(user?.id ?? null);
                    setAuthChecked(true);
                }
            })["MainFramePage.useEffect"]();
        }
    }["MainFramePage.useEffect"], []);
    // --- Boot based on auth ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainFramePage.useEffect": ()=>{
            if (!authChecked) return;
            const run = {
                "MainFramePage.useEffect.run": async ()=>{
                    setLines([]);
                    setTyped("");
                    setSelectedIdx(0);
                    const mobile = ("TURBOPACK compile-time value", "object") !== "undefined" && window.innerWidth < 768;
                    if (mobile) {
                        const helloLines = ASCII_HELLO.trim().split("\n");
                        for (const l of helloLines){
                            setLines({
                                "MainFramePage.useEffect.run": (prev)=>[
                                        ...prev,
                                        l
                                    ]
                            }["MainFramePage.useEffect.run"]);
                            await sleep(40);
                        }
                        await sleep(200);
                        setLines({
                            "MainFramePage.useEffect.run": (prev)=>[
                                    ...prev,
                                    ""
                                ]
                        }["MainFramePage.useEffect.run"]);
                    } else {
                        const asciiLines = ASCII_MAINFRAME.trim().split("\n");
                        for (const l of asciiLines){
                            setLines({
                                "MainFramePage.useEffect.run": (prev)=>[
                                        ...prev,
                                        l
                                    ]
                            }["MainFramePage.useEffect.run"]);
                            await sleep(40);
                        }
                        await sleep(200);
                        setLines({
                            "MainFramePage.useEffect.run": (prev)=>[
                                    ...prev,
                                    ""
                                ]
                        }["MainFramePage.useEffect.run"]);
                    }
                    if (userId) {
                        await typeLine("What server do you want to break into?");
                        setLines({
                            "MainFramePage.useEffect.run": (prev)=>[
                                    ...prev,
                                    ""
                                ]
                        }["MainFramePage.useEffect.run"]);
                        setStep("server_select");
                    } else {
                        await typeLine("Is this your first time in main frame?");
                        setLines({
                            "MainFramePage.useEffect.run": (prev)=>[
                                    ...prev,
                                    ""
                                ]
                        }["MainFramePage.useEffect.run"]);
                        setStep("first_time");
                    }
                }
            }["MainFramePage.useEffect.run"];
            run();
        }
    }["MainFramePage.useEffect"], [
        authChecked,
        userId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainFramePage.useEffect": ()=>{
            if (step === "username" || step === "password" || step === "email" || step === "hack_code") {
                requestAnimationFrame({
                    "MainFramePage.useEffect": ()=>inputRef.current?.focus()
                }["MainFramePage.useEffect"]);
            }
        }
    }["MainFramePage.useEffect"], [
        step
    ]);
    // On mobile: auto-type the hack code (single interval, no key handler overlap)
    const hackIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainFramePage.useEffect": ()=>{
            if (step !== "hack_code" || !isMobile) return;
            hackIntervalRef.current = setInterval({
                "MainFramePage.useEffect": ()=>{
                    setHackCodeIndex({
                        "MainFramePage.useEffect": (i)=>{
                            if (i >= HACK_CODE.length) {
                                if (hackIntervalRef.current) {
                                    clearInterval(hackIntervalRef.current);
                                    hackIntervalRef.current = null;
                                }
                                return i;
                            }
                            const chunkSize = Math.min(2 + Math.floor(Math.random() * 4), HACK_CODE.length - i);
                            const chunk = HACK_CODE.slice(i, i + chunkSize);
                            setHackCodeDisplay({
                                "MainFramePage.useEffect": (prev)=>prev + chunk
                            }["MainFramePage.useEffect"]);
                            return i + chunkSize;
                        }
                    }["MainFramePage.useEffect"]);
                }
            }["MainFramePage.useEffect"], 55);
            return ({
                "MainFramePage.useEffect": ()=>{
                    if (hackIntervalRef.current) {
                        clearInterval(hackIntervalRef.current);
                        hackIntervalRef.current = null;
                    }
                }
            })["MainFramePage.useEffect"];
        }
    }["MainFramePage.useEffect"], [
        step,
        isMobile
    ]);
    const isTypingStep = step === "username" || step === "password" || step === "email";
    const isHackCodeStep = step === "hack_code";
    const prompt = isTypingStep || isHackCodeStep ? ">" : "";
    function pickFirstTimeOption(picked) {
        setLines((prev)=>[
                ...prev,
                `> ${picked}`
            ]);
        setIsSignUp(picked === FIRST_TIME_OPTIONS[0]);
        setLines((prev)=>[
                ...prev,
                ""
            ]);
        (async ()=>{
            await typeLine("please enter username:");
            setStep("username");
        })();
    }
    function commitCurrentInput() {
        const value = typed.trim();
        if (!value && step !== "hack_code") return;
        if (step === "username") {
            setUsername(value);
            setLines((prev)=>[
                    ...prev,
                    `> ${value}`
                ]);
            setTyped("");
            if (isSignUp) {
                (async ()=>{
                    await typeLine("enter email:");
                    setStep("email");
                })();
            } else {
                (async ()=>{
                    await typeLine("enter password:");
                    setStep("password");
                })();
            }
            return;
        }
        if (step === "email") {
            setEmail(value);
            setLines((prev)=>[
                    ...prev,
                    `> ${value}`
                ]);
            setTyped("");
            (async ()=>{
                await typeLine("enter password:");
                setStep("password");
            })();
            return;
        }
        if (step === "password") {
            setPassword(value);
            setLines((prev)=>[
                    ...prev,
                    `> ${"•".repeat(value.length)}`
                ]);
            setTyped("");
            (async ()=>{
                setLines((prev)=>[
                        ...prev,
                        ""
                    ]);
                await typeLine("write code to hack into the mainframe:");
                setLines((prev)=>[
                        ...prev,
                        ""
                    ]);
                setStep("hack_code");
                setHackCodeIndex(0);
                setHackCodeDisplay("");
            })();
            return;
        }
        if (step === "hack_code") {
            // Enter pressed - run auth
            setLines((prev)=>[
                    ...prev,
                    `> ${hackCodeDisplay}`
                ]);
            setLines((prev)=>[
                    ...prev,
                    ""
                ]);
            setStep("authenticating");
            setTyped("");
            setHackCodeDisplay("");
            (async ()=>{
                setLines((prev)=>[
                        ...prev,
                        "authenticating..."
                    ]);
                await sleep(600);
                const ok = isSignUp ? await doSignUp(username, email, password) : await doSignIn(username, password);
                if (ok) {
                    setLines((prev)=>[
                            ...prev,
                            "access granted."
                        ]);
                    await sleep(400);
                    setLines((prev)=>[
                            ...prev,
                            ""
                        ]);
                    await typeLine("What server do you want to break into?");
                    setLines((prev)=>[
                            ...prev,
                            ""
                        ]);
                    setStep("server_select");
                }
            })();
        }
    }
    async function doSignIn(user, pass) {
        const { data: userRow, error: lookupError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("email").ilike("username", user).limit(1).maybeSingle();
        if (lookupError || !userRow?.email) {
            setLines((prev)=>[
                    ...prev,
                    "user not found.",
                    ""
                ]);
            setTyped("");
            setUsername("");
            setPassword("");
            setStep("username");
            await typeLine("please enter username:");
            return false;
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email: userRow.email,
            password: pass
        });
        if (error) {
            setLines((prev)=>[
                    ...prev,
                    `login failed: ${error.message}`,
                    ""
                ]);
            setTyped("");
            setPassword("");
            setStep("password");
            await typeLine("enter password:");
            return false;
        }
        return true;
    }
    async function doSignUp(user, em, pass) {
        const { data: signUpData, error: signUpError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email: em,
            password: pass
        });
        if (signUpError) {
            setLines((prev)=>[
                    ...prev,
                    `sign up failed: ${signUpError.message}`,
                    ""
                ]);
            setTyped("");
            setUsername("");
            setEmail("");
            setPassword("");
            setStep("username");
            await typeLine("please enter username:");
            return false;
        }
        const authUserId = signUpData?.user?.id;
        if (authUserId) {
            const { error: insertErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("users").insert({
                user_id: authUserId,
                username: user.trim() || null,
                email: em.trim() || null
            });
            if (insertErr) {
                // If unique user_id conflict, try upsert so existing row gets username/email updated
                const { error: upsertErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from("users").upsert({
                    user_id: authUserId,
                    username: user.trim() || null,
                    email: em.trim() || null
                }, {
                    onConflict: "user_id"
                });
                if (upsertErr) {
                    setLines((prev)=>[
                            ...prev,
                            `Could not add user to list: ${upsertErr.message}`,
                            ""
                        ]);
                }
            }
        }
        return true;
    }
    // Hack code: any keypress types 2–5 chars (desktop only; mobile uses auto-type)
    function onHackCodeKeyDown(e) {
        if (step !== "hack_code") return;
        e.preventDefault();
        if (e.key === "Enter") {
            commitCurrentInput();
            return;
        }
        if (isMobile) return; // on mobile, only Enter is handled; auto-type does the rest
        if (hackCodeIndex < HACK_CODE.length) {
            const chunkSize = Math.min(2 + Math.floor(Math.random() * 4), HACK_CODE.length - hackCodeIndex);
            const chunk = HACK_CODE.slice(hackCodeIndex, hackCodeIndex + chunkSize);
            setHackCodeDisplay((prev)=>prev + chunk);
            setHackCodeIndex((i)=>i + chunkSize);
        }
    }
    // Keyboard for server_select and first_time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainFramePage.useEffect": ()=>{
            const onKeyDown = {
                "MainFramePage.useEffect.onKeyDown": (e)=>{
                    if (step === "server_select" || step === "first_time") {
                        if (e.key === "ArrowUp") {
                            e.preventDefault();
                            setSelectedIdx({
                                "MainFramePage.useEffect.onKeyDown": (i)=>(i - 1 + currentOptions.length) % currentOptions.length
                            }["MainFramePage.useEffect.onKeyDown"]);
                            return;
                        }
                        if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setSelectedIdx({
                                "MainFramePage.useEffect.onKeyDown": (i)=>(i + 1) % currentOptions.length
                            }["MainFramePage.useEffect.onKeyDown"]);
                            return;
                        }
                        if (e.key === "Enter") {
                            e.preventDefault();
                            const picked = currentOptions[selectedIdx];
                            setLines({
                                "MainFramePage.useEffect.onKeyDown": (prev)=>[
                                        ...prev,
                                        `> ${picked}`
                                    ]
                            }["MainFramePage.useEffect.onKeyDown"]);
                            if (step === "server_select") {
                                const opt = SERVER_OPTIONS[selectedIdx];
                                router.push(opt.href);
                                return;
                            }
                            if (step === "first_time") {
                                setIsSignUp(picked === "Yes, I need to hack in");
                                setLines({
                                    "MainFramePage.useEffect.onKeyDown": (prev)=>[
                                            ...prev,
                                            ""
                                        ]
                                }["MainFramePage.useEffect.onKeyDown"]);
                                ({
                                    "MainFramePage.useEffect.onKeyDown": async ()=>{
                                        await typeLine("please enter username:");
                                        setStep("username");
                                    }
                                })["MainFramePage.useEffect.onKeyDown"]();
                            }
                            return;
                        }
                    }
                    if (step === "hack_code") {
                        onHackCodeKeyDown(e);
                        return;
                    }
                    if (isTypingStep && e.key === "Enter") {
                        e.preventDefault();
                        commitCurrentInput();
                    }
                }
            }["MainFramePage.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "MainFramePage.useEffect": ()=>window.removeEventListener("keydown", onKeyDown)
            })["MainFramePage.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MainFramePage.useEffect"], [
        step,
        selectedIdx,
        typed,
        hackCodeIndex,
        hackCodeDisplay,
        currentOptions,
        isSignUp,
        isMobile
    ]);
    const showInput = isTypingStep && typed !== undefined || isHackCodeStep && (typed !== undefined || hackCodeDisplay !== undefined);
    const showInputInPre = showInput && !(isMobile && isTypingStep);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-1b59ff09f5c90fac" + " " + "min-h-screen bg-[hsl(154_50%_5%)] text-[hsl(154_84%_70%)] [text-shadow:0_0_4px_hsl(154_84%_70%)] font-mono text-[16px] cursor-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    className: "jsx-1b59ff09f5c90fac",
                    children: "Main Frame"
                }, void 0, false, {
                    fileName: "[project]/pages/main-frame.tsx",
                    lineNumber: 517,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/main-frame.tsx",
                lineNumber: 516,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-1b59ff09f5c90fac" + " " + "relative p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        ref: preRef,
                        className: "jsx-1b59ff09f5c90fac" + " " + "relative whitespace-pre-wrap leading-5",
                        children: [
                            lines.join("\n"),
                            showInputInPre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-1b59ff09f5c90fac" + " " + "select-none",
                                        children: [
                                            prompt,
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/main-frame.tsx",
                                        lineNumber: 525,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: mirrorBeforeRef,
                                        className: "jsx-1b59ff09f5c90fac" + " " + "whitespace-pre"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/main-frame.tsx",
                                        lineNumber: 526,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: mirrorCaretRef,
                                        className: "jsx-1b59ff09f5c90fac" + " " + "whitespace-pre",
                                        children: !isHackCodeStep && (step === "password" ? "•".repeat(typed.length) : typed)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/main-frame.tsx",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        style: {
                                            left: cursorLeft,
                                            top: cursorTopPx,
                                            width: cursorW,
                                            height: "1.2em",
                                            background: "hsl(154 84% 70%)",
                                            mixBlendMode: "screen"
                                        },
                                        className: "jsx-1b59ff09f5c90fac" + " " + "pointer-events-none absolute blink"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/main-frame.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/main-frame.tsx",
                                lineNumber: 523,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/main-frame.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this),
                    isTypingStep && (isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-1b59ff09f5c90fac" + " " + "mt-3 flex w-full max-w-xl items-baseline gap-0 font-mono text-[16px] text-[hsl(154_84%_70%)] [text-shadow:0_0_4px_hsl(154_84%_70%)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-1b59ff09f5c90fac" + " " + "select-none shrink-0",
                                children: "> "
                            }, void 0, false, {
                                fileName: "[project]/pages/main-frame.tsx",
                                lineNumber: 550,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                value: typed,
                                onChange: (e)=>setTyped(e.target.value),
                                onKeyUp: updateCursor,
                                spellCheck: false,
                                autoCapitalize: "none",
                                autoCorrect: "off",
                                autoComplete: step === "password" ? "current-password" : step === "email" ? "email" : "username",
                                type: step === "password" ? "password" : "text",
                                className: "jsx-1b59ff09f5c90fac" + " " + "min-w-0 flex-1 border-0  bg-transparent py-1 outline-none placeholder:opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/pages/main-frame.tsx",
                                lineNumber: 551,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/main-frame.tsx",
                        lineNumber: 549,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        value: typed,
                        onChange: (e)=>setTyped(e.target.value),
                        onKeyUp: updateCursor,
                        onClick: updateCursor,
                        onSelect: updateCursor,
                        spellCheck: false,
                        autoCapitalize: "none",
                        autoCorrect: "off",
                        className: "jsx-1b59ff09f5c90fac" + " " + "absolute left-[-9999px] top-0 opacity-0 caret-transparent"
                    }, void 0, false, {
                        fileName: "[project]/pages/main-frame.tsx",
                        lineNumber: 571,
                        columnNumber: 13
                    }, this)),
                    step === "hack_code" && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        readOnly: true,
                        tabIndex: 0,
                        value: "",
                        "aria-hidden": true,
                        className: "jsx-1b59ff09f5c90fac" + " " + "absolute left-[-9999px] top-0 opacity-0 w-0 h-0"
                    }, void 0, false, {
                        fileName: "[project]/pages/main-frame.tsx",
                        lineNumber: 586,
                        columnNumber: 11
                    }, this),
                    step === "hack_code" && isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-1b59ff09f5c90fac" + " " + " flex flex-col sm:flex-row gap-3 mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>commitCurrentInput(),
                            disabled: hackCodeIndex < HACK_CODE.length,
                            className: "jsx-1b59ff09f5c90fac" + " " + " text-left font-mono text-sm text-[hsl(154_84%_70%)] hover:bg-primary/20 hover:border-primary/60 transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-primary/40",
                            children: "> Run"
                        }, void 0, false, {
                            fileName: "[project]/pages/main-frame.tsx",
                            lineNumber: 598,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/main-frame.tsx",
                        lineNumber: 597,
                        columnNumber: 11
                    }, this),
                    (step === "server_select" || step === "first_time") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-1b59ff09f5c90fac" + " " + "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-1b59ff09f5c90fac" + " " + "ml-4 flex flex-col gap-1",
                                children: currentOptions.map((c, idx)=>{
                                    const isSelected = idx === selectedIdx;
                                    const handleClick = ()=>{
                                        if (step === "server_select") {
                                            setLines((prev)=>[
                                                    ...prev,
                                                    `> ${c}`
                                                ]);
                                            const opt = SERVER_OPTIONS[idx];
                                            router.push(opt.href);
                                        } else {
                                            pickFirstTimeOption(c);
                                        }
                                    };
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleClick,
                                        className: "jsx-1b59ff09f5c90fac" + " " + "relative flex w-full cursor-none  items-center gap-2 rounded border-0 bg-transparent p-0 text-left font-inherit text-inherit hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50 normal-case font-normal",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-1b59ff09f5c90fac" + " " + "w-4 select-none",
                                                children: isSelected ? ">" : " "
                                            }, void 0, false, {
                                                fileName: "[project]/pages/main-frame.tsx",
                                                lineNumber: 630,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-1b59ff09f5c90fac" + " " + `select-none ${isSelected ? "goldShimmer" : ""}`,
                                                children: c
                                            }, void 0, false, {
                                                fileName: "[project]/pages/main-frame.tsx",
                                                lineNumber: 633,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, String(c), true, {
                                        fileName: "[project]/pages/main-frame.tsx",
                                        lineNumber: 624,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/pages/main-frame.tsx",
                                lineNumber: 611,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-1b59ff09f5c90fac" + " " + "mt-2 opacity-80 select-none ml-4",
                                children: "(use ↑/↓, press Enter, or tap)"
                            }, void 0, false, {
                                fileName: "[project]/pages/main-frame.tsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/main-frame.tsx",
                        lineNumber: 610,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "interlaced",
                        className: "jsx-1b59ff09f5c90fac"
                    }, void 0, false, {
                        fileName: "[project]/pages/main-frame.tsx",
                        lineNumber: 650,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "glare",
                        className: "jsx-1b59ff09f5c90fac"
                    }, void 0, false, {
                        fileName: "[project]/pages/main-frame.tsx",
                        lineNumber: 651,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/main-frame.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "1b59ff09f5c90fac",
                children: "#glare.jsx-1b59ff09f5c90fac{z-index:-1;background:radial-gradient(#242827 0%,#06130e 70%);position:fixed;inset:0}@keyframes lines{0%{background-position:0 0}50%{background-position:0 0}51%{background-position:0 2px}to{background-position:0 2px}}#interlaced.jsx-1b59ff09f5c90fac{z-index:10;pointer-events:none;background:repeating-linear-gradient(#0000 0 1px,#0000004d 3px 4px);animation:66.6667ms linear infinite lines;position:fixed;inset:0}@keyframes blink{0%,49%{opacity:1}50%,to{opacity:0}}.blink.jsx-1b59ff09f5c90fac{animation:1s step-end infinite blink}.goldShimmer.jsx-1b59ff09f5c90fac{color:#fc3;text-shadow:0 0 6px #fc3,0 0 18px #e6ac00;-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#e6ac00,#fff266,#e6ac00) 0 0/200% 100%;-webkit-background-clip:text;background-clip:text;animation:1.2s linear infinite shimmer;position:relative}@keyframes shimmer{0%{background-position:0%}to{background-position:200%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/main-frame.tsx",
        lineNumber: 515,
        columnNumber: 5
    }, this);
}
_s(MainFramePage, "xFXlZkGi7qZYt1xdnkUwmZgAunY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MainFramePage;
var _c;
__turbopack_context__.k.register(_c, "MainFramePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime/runtime-types.d.ts" />
/// <reference path="../../../shared/runtime/dev-globals.d.ts" />
/// <reference path="../../../shared/runtime/dev-protocol.d.ts" />
/// <reference path="../../../shared/runtime/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateB.type === 'total') {
        // A total update replaces the entire chunk, so it supersedes any prior update.
        return updateB;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__1dwejvl._.js.map