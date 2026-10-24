module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[project]/pages/voice-notes/iloveyoutaylor.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessagePage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
"use client";
;
;
;
;
function MessagePage() {
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [unlocked, setUnlocked] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    function handleSubmit(event) {
        event.preventDefault();
        // Client-side gate only; this is not secure password protection.
        if (date === "2024-04-05") {
            setUnlocked(true);
            setError("");
        } else {
            setError("That date is not correct. Please try again.");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    className: "jsx-1d2c9f22271ed1c9",
                    children: "A Message"
                }, void 0, false, {
                    fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "jsx-1d2c9f22271ed1c9",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                    className: "jsx-1d2c9f22271ed1c9" + " " + "card",
                    children: !unlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "jsx-1d2c9f22271ed1c9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                htmlFor: "anniversary",
                                className: "jsx-1d2c9f22271ed1c9",
                                children: "Please enter our anniversary date"
                            }, void 0, false, {
                                fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                id: "anniversary",
                                type: "date",
                                required: true,
                                value: date,
                                onChange: (event)=>{
                                    setDate(event.target.value);
                                    setError("");
                                },
                                "aria-describedby": "date-error",
                                "aria-invalid": Boolean(error),
                                className: "jsx-1d2c9f22271ed1c9"
                            }, void 0, false, {
                                fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "jsx-1d2c9f22271ed1c9",
                                children: "Continue"
                            }, void 0, false, {
                                fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                id: "date-error",
                                "aria-live": "polite",
                                className: "jsx-1d2c9f22271ed1c9" + " " + "error",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-1d2c9f22271ed1c9" + " " + "message",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "jsx-1d2c9f22271ed1c9",
                                children: "Hey, I get the sense that you don’t want to stay in contact, and I’ll respect that. I was hoping we could talk one more time, but I understand if that’s not what you want. I’m sorry for how things ended and for all that I did. I wish you well, and I hope you’re happy and your new boyfriend is perfect for you. If you ever want to talk, you can reach out. There’s no pressure to respond."
                            }, void 0, false, {
                                fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "jsx-1d2c9f22271ed1c9" + " " + "signature",
                                children: "-Ethan"
                            }, void 0, false, {
                                fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "1d2c9f22271ed1c9",
                children: "main.jsx-1d2c9f22271ed1c9{box-sizing:border-box;color:#2f2a27;background:#f5f1ed;justify-content:center;align-items:center;min-height:100vh;padding:24px;font-family:Georgia,Times New Roman,serif;display:flex}.card.jsx-1d2c9f22271ed1c9{box-sizing:border-box;background:#fff;border-radius:14px;width:100%;max-width:620px;padding:32px;box-shadow:0 10px 30px #3c2d231a}form.jsx-1d2c9f22271ed1c9{text-align:center}label.jsx-1d2c9f22271ed1c9{margin-bottom:24px;font-size:26px;line-height:1.4;display:block}input.jsx-1d2c9f22271ed1c9{box-sizing:border-box;color:#2f2a27;width:100%;max-width:280px;font:inherit;background:#fff;border:1px solid #c9beb6;border-radius:7px;padding:12px;font-size:16px}button.jsx-1d2c9f22271ed1c9{color:#fff;font:inherit;cursor:pointer;background:#76594b;border:none;border-radius:7px;margin:18px auto 0;padding:12px 24px;display:block}button.jsx-1d2c9f22271ed1c9:hover{background:#60473b}.error.jsx-1d2c9f22271ed1c9{color:#a33d3d;min-height:22px;margin-bottom:0;font-size:15px}.message.jsx-1d2c9f22271ed1c9{overflow-wrap:break-word;font-size:19px;line-height:1.8}.message.jsx-1d2c9f22271ed1c9 p.jsx-1d2c9f22271ed1c9{margin:0}.message.jsx-1d2c9f22271ed1c9 .signature.jsx-1d2c9f22271ed1c9{text-align:right;margin-top:24px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/voice-notes/iloveyoutaylor.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09_81v3._.js.map