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
"[project]/components/PageColorPicker.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageColorPicker
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [ssr] (ecmascript) <export default as RotateCcw>");
"use client";
;
;
;
const STORAGE_KEY = "page-color-preferences";
const DEFAULT_COLORS = {
    background: "#0a0a0a",
    accent: "#14b8a6"
};
function hexToHsl(hex) {
    const normalized = hex.replace("#", "");
    const r = parseInt(normalized.slice(0, 2), 16) / 255;
    const g = parseInt(normalized.slice(2, 4), 16) / 255;
    const b = parseInt(normalized.slice(4, 6), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            default:
                h = (r - g) / d + 4;
        }
        h /= 6;
    }
    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}
function isHexColor(value) {
    return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
}
function parseStoredColors(value) {
    if (!value) return DEFAULT_COLORS;
    try {
        const parsed = JSON.parse(value);
        return {
            background: isHexColor(parsed.background) ? parsed.background : isHexColor(parsed.primary) ? parsed.primary : DEFAULT_COLORS.background,
            accent: isHexColor(parsed.accent) ? parsed.accent : DEFAULT_COLORS.accent
        };
    } catch  {
        return DEFAULT_COLORS;
    }
}
function applyPageColors(colors) {
    const root = document.documentElement;
    root.style.setProperty("--background", hexToHsl(colors.background));
    root.style.setProperty("--primary", hexToHsl(colors.accent));
    root.style.setProperty("--accent", hexToHsl(colors.accent));
    root.style.setProperty("--pop", hexToHsl(colors.accent));
    root.style.setProperty("--scroll", `${colors.accent}4d`);
}
function clearPageColors() {
    const root = document.documentElement;
    root.style.removeProperty("--background");
    root.style.removeProperty("--primary");
    root.style.removeProperty("--accent");
    root.style.removeProperty("--pop");
    root.style.removeProperty("--scroll");
}
function PageColorPicker() {
    const [colors, setColors] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(DEFAULT_COLORS);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const pickerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const storedColors = parseStoredColors(window.localStorage.getItem(STORAGE_KEY));
        setColors(storedColors);
        applyPageColors(storedColors);
        function handleStorage(event) {
            if (event.key !== STORAGE_KEY) return;
            const nextColors = parseStoredColors(event.newValue);
            setColors(nextColors);
            applyPageColors(nextColors);
        }
        window.addEventListener("storage", handleStorage);
        return ()=>{
            window.removeEventListener("storage", handleStorage);
            clearPageColors();
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!open) return;
        function handleClick(event) {
            if (pickerRef.current && event.target instanceof Node && !pickerRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        window.addEventListener("mousedown", handleClick);
        return ()=>window.removeEventListener("mousedown", handleClick);
    }, [
        open
    ]);
    function commitColors(nextColors) {
        setColors(nextColors);
        applyPageColors(nextColors);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextColors));
    }
    function updateColor(key, value) {
        if (!isHexColor(value)) return;
        setColors((currentColors)=>{
            const nextColors = {
                ...currentColors,
                [key]: value
            };
            applyPageColors(nextColors);
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextColors));
            return nextColors;
        });
    }
    function resetColors() {
        commitColors(DEFAULT_COLORS);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: pickerRef,
        className: "relative shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((value)=>!value),
                className: "flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-primary transition hover:bg-primary/15 focus:outline-none focus:ring-2 focus:ring-primary/40",
                "aria-label": "Choose page colors",
                title: "Choose page colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                    className: "h-5 w-5",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/PageColorPicker.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PageColorPicker.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-12 z-40 w-56 rounded-xl border border-primary/30 bg-background p-3 shadow-xl shadow-primary/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "flex items-center justify-between gap-3 text-sm text-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    children: "Color"
                                }, void 0, false, {
                                    fileName: "[project]/components/PageColorPicker.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "color",
                                    value: colors.background,
                                    onChange: (event)=>updateColor("background", event.target.value),
                                    onInput: (event)=>updateColor("background", event.currentTarget.value),
                                    onBlur: (event)=>updateColor("background", event.currentTarget.value),
                                    className: "h-9 w-12 cursor-pointer rounded border border-primary/30 bg-transparent p-0.5",
                                    "aria-label": "Background color"
                                }, void 0, false, {
                                    fileName: "[project]/components/PageColorPicker.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PageColorPicker.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "flex items-center justify-between gap-3 text-sm text-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    children: "Accent"
                                }, void 0, false, {
                                    fileName: "[project]/components/PageColorPicker.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "color",
                                    value: colors.accent,
                                    onChange: (event)=>updateColor("accent", event.target.value),
                                    onInput: (event)=>updateColor("accent", event.currentTarget.value),
                                    onBlur: (event)=>updateColor("accent", event.currentTarget.value),
                                    className: "h-9 w-12 cursor-pointer rounded border border-primary/30 bg-transparent p-0.5",
                                    "aria-label": "Accent color"
                                }, void 0, false, {
                                    fileName: "[project]/components/PageColorPicker.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PageColorPicker.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: resetColors,
                            className: "flex w-full items-center justify-center gap-2 rounded-lg border border-primary/40 px-3 py-2 text-sm text-text transition hover:bg-primary/15",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "h-4 w-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/PageColorPicker.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this),
                                "Reset"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PageColorPicker.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PageColorPicker.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PageColorPicker.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/PageColorPicker.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
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
"[project]/components/navabar_2.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-todo.js [ssr] (ecmascript) <export default as ListTodo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [ssr] (ecmascript)");
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
;
const NavBar = ()=>{
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const checkMobile = ()=>setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 w-full flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("flex flex-row justify-between items-center text-text transition-all duration-300 ease-out backdrop-blur-md", "w-full bg-background/90 border-b border-primary/40", "rounded-none"),
            style: {
                paddingLeft: isMobile ? "5%" : "5%",
                paddingRight: isMobile ? "5%" : "5%",
                paddingTop: "12px",
                paddingBottom: "12px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex max-w-full justify-between items-center  w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("flex items-center", isMobile ? "gap-[10px]" : "gap-10"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nameLogo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/navabar_2.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/todo",
                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("nav-link flex items-center gap-2 text-lg", pathname === "/todo" && "text-primary font-medium"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navabar_2.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Todo"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navabar_2.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navabar_2.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/goals",
                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("nav-link flex items-center gap-2 text-lg", pathname === "/goals" && "text-primary font-medium"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navabar_2.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Goals"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navabar_2.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navabar_2.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/expenses",
                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("nav-link flex items-center gap-2 text-lg", pathname === "/expenses" && "text-primary font-medium"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navabar_2.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Expenses"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navabar_2.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navabar_2.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/subscriptions",
                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("nav-link flex items-center gap-2 text-lg", pathname === "/subscriptions" && "text-primary font-medium"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navabar_2.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Subscriptions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navabar_2.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navabar_2.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navabar_2.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("flex items-center", isMobile ? "gap-2 md:gap-4" : "gap-4"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/main-frame",
                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("group relative flex items-center justify-center overflow-hidden rounded-full border-2 border-green-500", "transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] hover:bg-green-500/10", isMobile ? "w-10 h-10" : "w-12 h-12"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(0,255,0,0.08)_0px,rgba(0,255,0,0.08)_1px,transparent_1px,transparent_3px)]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navabar_2.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/navabar_2.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("text-green-400 group-hover:text-green-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.9)]", "group-hover:animate-[hacker-flicker_1.2s_infinite]", isMobile ? "w-5 h-5" : "w-6 h-6")
                                    }, void 0, false, {
                                        fileName: "[project]/components/navabar_2.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navabar_2.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "/Ethan-Bonsall-Resume.pdf",
                                download: true,
                                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("flex border-2 border-primary justify-center items-center hover:bg-primary/20 rounded-full transition-all duration-300", isMobile ? "w-10 h-10" : "w-12 h-12"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("text-primary", isMobile ? "w-5 h-5" : "w-6 h-6")
                                }, void 0, false, {
                                    fileName: "[project]/components/navabar_2.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/navabar_2.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/ethanbonsall/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$linkedin$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$linkedin$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                    alt: "LinkedIn",
                                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("image-hover h-auto rounded-full bg-white", isMobile ? "w-10" : "w-12")
                                }, void 0, false, {
                                    fileName: "[project]/components/navabar_2.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/navabar_2.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "https://github.com/ethanbonsall",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logos$2f$github$2d$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                    alt: "GitHub",
                                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["default"])("image-hover h-auto rounded-full z-50", isMobile ? "w-10" : "w-12")
                                }, void 0, false, {
                                    fileName: "[project]/components/navabar_2.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/navabar_2.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navabar_2.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/navabar_2.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/navabar_2.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/navabar_2.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavBar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/todo.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>WeekTodoCalendarPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__ = __turbopack_context__.i("[externals]/@dnd-kit/core [external] (@dnd-kit/core, cjs, [project]/node_modules/@dnd-kit/core)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__ = __turbopack_context__.i("[externals]/@dnd-kit/sortable [external] (@dnd-kit/sortable, cjs, [project]/node_modules/@dnd-kit/sortable)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$utilities__$5b$external$5d$__$2840$dnd$2d$kit$2f$utilities$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$29$__ = __turbopack_context__.i("[externals]/@dnd-kit/utilities [external] (@dnd-kit/utilities, cjs, [project]/node_modules/@dnd-kit/utilities)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navabar_2$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navabar_2.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageColorPicker$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PageColorPicker.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navabar_2$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navabar_2$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
/* eslint-disable @typescript-eslint/no-explicit-any */ "use client";
;
;
;
;
;
;
;
;
function pad2(n) {
    return String(n).padStart(2, "0");
}
function toISODate(d) {
    // local date -> YYYY-MM-DD
    const yyyy = d.getFullYear();
    const mm = pad2(d.getMonth() + 1);
    const dd = pad2(d.getDate());
    return `${yyyy}-${mm}-${dd}`;
}
function fromISODate(s) {
    // YYYY-MM-DD -> Date (local)
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d);
}
function startOfWeekSunday(d) {
    const dt = new Date(d);
    const day = dt.getDay(); // 0 = Sun
    dt.setDate(dt.getDate() - day);
    dt.setHours(0, 0, 0, 0);
    return dt;
}
function addDays(d, days) {
    const dt = new Date(d);
    dt.setDate(dt.getDate() + days);
    return dt;
}
function clampYear2100(d) {
    const min = new Date(1900, 0, 1);
    const max = new Date(2100, 11, 31);
    if (d < min) return min;
    if (d > max) return max;
    return d;
}
function prettyDow(d) {
    return d.toLocaleDateString(undefined, {
        weekday: "short"
    });
}
function prettyMD(d) {
    return d.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric"
    });
}
function isSameISO(a, b) {
    return a === b;
}
function sortByPriority(items) {
    return [
        ...items
    ].sort((a, b)=>a.priority - b.priority);
}
/** Generates consecutive priorities 1..n */ function withReprioritized(items) {
    return items.map((t, i)=>({
            ...t,
            priority: i + 1
        }));
}
function dayIdFromISO(iso) {
    return `day:${iso}`;
}
/** Wraps day body so the column is a droppable when empty */ function DroppableDayBody({ id, children, className }) {
    const { setNodeRef, isOver } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["useDroppable"])({
        id
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        className: [
            className,
            isOver ? "bg-primary/10" : ""
        ].filter(Boolean).join(" "),
        children: children
    }, void 0, false, {
        fileName: "[project]/pages/todo.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
function isDayId(id) {
    return id.startsWith("day:");
}
function isoFromDayId(dayId) {
    return dayId.replace("day:", "");
}
function SortableTodoCard({ todo, onEdit, onDelete, onComplete }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__["useSortable"])({
        id: `todo:${todo.id}`
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$utilities__$5b$external$5d$__$2840$dnd$2d$kit$2f$utilities$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$29$__["CSS"].Transform.toString(transform),
        transition
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        className: [
            "group relative rounded-xl border border-primary/20 bg-secondary/70 p-3 shadow-sm",
            "hover:border-primary/40 hover:bg-secondary/90 hover:shadow transition cursor-grab active:cursor-grabbing",
            isDragging ? "opacity/50" : ""
        ].join(" "),
        ...attributes,
        ...listeners,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-start gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-row shrink-0 gap-1 justify-between w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: "flex h-3 w-3 items-center justify-center text-sm text-text/60 hover:text-red-400 transition",
                            onClick: (e)=>{
                                e.stopPropagation();
                                onDelete(todo);
                            },
                            type: "button",
                            "aria-label": "Delete",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/pages/todo.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: "flex h-3 w-3 items-center justify-center text-sm text-text/60 hover:text-green-400 transition",
                            onClick: (e)=>{
                                e.stopPropagation();
                                onComplete(todo);
                            },
                            type: "button",
                            "aria-label": "Complete",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/pages/todo.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/todo.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "min-w-0 flex-1 text-left font-normal",
                    onClick: (e)=>{
                        e.stopPropagation();
                        onEdit(todo);
                    },
                    type: "button",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: `text-xs font-normal normal-case text-text line-clamp-1 ${todo.completed ? "line-through" : ""}`,
                                    children: todo.title
                                }, void 0, false, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                todo.due_date ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: `shrink-0 rounded-full text-xs font-medium text-text/80 normal-case ${todo.completed ? "line-through" : ""}`,
                                    children: [
                                        "Due ",
                                        todo.due_date
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/todo.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        todo.content ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: `mt-1 line-clamp-5 text-xs text-text/70 whitespace-pre-line normal-case ${todo.completed ? "line-through" : ""}`,
                            children: todo.content
                        }, void 0, false, {
                            fileName: "[project]/pages/todo.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/todo.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/todo.tsx",
            lineNumber: 194,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/todo.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
function OverlayCard({ todo }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "w-[260px] rounded-xl border border-primary/30 bg-secondary p-3 shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "truncate text-sm font-medium normal-case text-text",
                children: todo.title
            }, void 0, false, {
                fileName: "[project]/pages/todo.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            todo.due_date ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-1 text-xs text-text/80 normal-case",
                children: [
                    "due ",
                    todo.due_date
                ]
            }, void 0, true, {
                fileName: "[project]/pages/todo.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this) : null,
            todo.content ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-2 line-clamp-2 whitespace-pre-line text-xs text-text/70 normal-case",
                children: todo.content
            }, void 0, false, {
                fileName: "[project]/pages/todo.tsx",
                lineNumber: 273,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/pages/todo.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
function Modal({ open, title, children, onClose }) {
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                className: "absolute inset-0 bg-background/70 backdrop-blur-sm",
                onClick: onClose,
                "aria-label": "Close"
            }, void 0, false, {
                fileName: "[project]/pages/todo.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex max-h-[90vh] w-full max-w-[min(92vw,28rem)] flex-col rounded-2xl border border-primary/30 bg-secondary shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center justify-between border-b border-primary/20 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "truncate font-semibold text-text",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/pages/todo.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "shrink-0 rounded-lg border border-primary/40 px-2 py-1 text-sm text-text/80 hover:bg-primary/20 hover:text-text",
                                type: "button",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/pages/todo.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/todo.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "min-h-0 min-w-0 overflow-y-auto overflow-x-hidden p-4",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/pages/todo.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/todo.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/todo.tsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
}
function WeekTodoCalendarPage() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>supabaseClient(), []);
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [showCompleted, setShowCompleted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [weekAnchor, setWeekAnchor] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(()=>startOfWeekSunday(clampYear2100(new Date())));
    const weekStart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>startOfWeekSunday(weekAnchor), [
        weekAnchor
    ]);
    const weekDays = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return Array.from({
            length: 7
        }, (_, i)=>addDays(weekStart, i));
    }, [
        weekStart
    ]);
    const rangeStartISO = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>toISODate(weekStart), [
        weekStart
    ]);
    const rangeEndISOExclusive = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>toISODate(addDays(weekStart, 7)), [
        weekStart
    ]);
    const [todos, setTodos] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [errMsg, setErrMsg] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    // Modal state (create/edit)
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [modalDayISO, setModalDayISO] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(rangeStartISO);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        title: "",
        content: "",
        due_date: ""
    });
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // DnD overlay
    const [activeTodo, setActiveTodo] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const sensors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 6
        }
    }));
    const todosByDay = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const map = new Map();
        for (const day of weekDays)map.set(toISODate(day), []);
        for (const t of todos){
            if (!map.has(t.task_date)) continue;
            // Filter out completed tasks unless showCompleted is true
            if (!showCompleted && t.completed) continue;
            map.get(t.task_date).push(t);
        }
        for (const [k, v] of map)map.set(k, sortByPriority(v));
        return map;
    }, [
        todos,
        weekDays,
        showCompleted
    ]);
    // Get current user on mount
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        async function getCurrentUser() {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setUserId(user.id);
            }
        }
        getCurrentUser();
    }, [
        supabase
    ]);
    async function loadWeek() {
        if (!userId) return;
        setLoading(true);
        setErrMsg(null);
        try {
            const { data, error } = await supabase.from("todos").select("id,created_at,task_date,priority,due_date,title,content,user_id,completed").eq("user_id", userId).gte("task_date", rangeStartISO).lt("task_date", rangeEndISOExclusive).order("task_date", {
                ascending: true
            }).order("priority", {
                ascending: true
            });
            if (error) throw error;
            setTodos(data ?? []);
        } catch (e) {
            setErrMsg(e?.message ?? "Failed to load week.");
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (userId) {
            loadWeek();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        rangeStartISO,
        rangeEndISOExclusive,
        userId
    ]);
    function openCreate(dayISO) {
        setEditing(null);
        setModalDayISO(dayISO);
        setDraft({
            title: "",
            content: "",
            due_date: ""
        });
        setModalOpen(true);
    }
    function openEdit(todo) {
        setEditing(todo);
        setModalDayISO(todo.task_date);
        setDraft({
            title: todo.title,
            content: todo.content ?? "",
            due_date: todo.due_date ?? ""
        });
        setModalOpen(true);
    }
    async function toggleComplete(todo) {
        try {
            const { error } = await supabase.from("todos").update({
                completed: !todo.completed
            }).eq("id", todo.id);
            if (error) throw error;
            // Optimistic update
            setTodos((prev)=>prev.map((t)=>t.id === todo.id ? {
                        ...t,
                        completed: !t.completed
                    } : t));
        } catch (e) {
            setErrMsg(e?.message ?? "Failed to toggle completion.");
            await loadWeek();
        }
    }
    async function saveTodo() {
        if (!userId) {
            setErrMsg("Please log in to create tasks.");
            return;
        }
        const title = draft.title.trim();
        if (!title) return;
        // basic date sanity (supports up to year 2100)
        const day = fromISODate(modalDayISO);
        if (day.getFullYear() > 2100) return;
        setSaving(true);
        setErrMsg(null);
        try {
            if (editing) {
                const dayChanged = modalDayISO !== editing.task_date;
                const targetDayTodos = todosByDay.get(modalDayISO) ?? [];
                const nextPriority = dayChanged ? targetDayTodos.length + 1 : editing.priority;
                const patch = {
                    title,
                    content: draft.content.trim() ? draft.content.trim() : null,
                    due_date: draft.due_date ? draft.due_date : null,
                    task_date: modalDayISO,
                    priority: nextPriority
                };
                // optimistic: update todo and reprioritize old day if moved
                setTodos((prev)=>{
                    let next = prev.map((t)=>t.id === editing.id ? {
                            ...t,
                            ...patch
                        } : t);
                    if (dayChanged) {
                        const oldDay = editing.task_date;
                        const oldDayRemaining = next.filter((t)=>t.task_date === oldDay && t.id !== editing.id).sort((a, b)=>a.priority - b.priority);
                        const reprioritizedOld = withReprioritized(oldDayRemaining);
                        const newDayList = next.filter((t)=>t.task_date === modalDayISO).sort((a, b)=>a.priority - b.priority);
                        const reprioritizedNew = withReprioritized(newDayList);
                        next = next.map((t)=>{
                            if (t.task_date === oldDay && t.id !== editing.id) {
                                const found = reprioritizedOld.find((x)=>x.id === t.id);
                                return found ? {
                                    ...t,
                                    priority: found.priority
                                } : t;
                            }
                            if (t.task_date === modalDayISO) {
                                const found = reprioritizedNew.find((x)=>x.id === t.id);
                                return found ? {
                                    ...t,
                                    priority: found.priority
                                } : t;
                            }
                            return t;
                        });
                    }
                    return next;
                });
                const { error } = await supabase.from("todos").update(patch).eq("id", editing.id);
                if (error) throw error;
                if (dayChanged) {
                    const oldDay = editing.task_date;
                    const oldDayRemaining = (todosByDay.get(oldDay) ?? []).filter((t)=>t.id !== editing.id);
                    await persistDayPriorities(oldDay, withReprioritized(oldDayRemaining));
                    const newDayList = [
                        ...(todosByDay.get(modalDayISO) ?? []).filter((t)=>t.id !== editing.id),
                        {
                            ...editing,
                            ...patch
                        }
                    ].sort((a, b)=>a.priority - b.priority);
                    await persistDayPriorities(modalDayISO, withReprioritized(newDayList));
                }
            } else {
                const existing = todosByDay.get(modalDayISO) ?? [];
                const nextPriority = existing.length + 1;
                const insertRow = {
                    task_date: modalDayISO,
                    priority: nextPriority,
                    due_date: draft.due_date ? draft.due_date : null,
                    title,
                    content: draft.content.trim() ? draft.content.trim() : null,
                    user_id: userId,
                    completed: false
                };
                const { data, error } = await supabase.from("todos").insert(insertRow).select("id,created_at,task_date,priority,due_date,title,content,user_id,completed").single();
                if (error) throw error;
                if (data) setTodos((prev)=>[
                        ...prev,
                        data
                    ]);
            }
            setModalOpen(false);
        } catch (e) {
            setErrMsg(e?.message ?? "Save failed.");
            // reload to be safe if optimistic update drifted
            await loadWeek();
        } finally{
            setSaving(false);
        }
    }
    async function deleteTodo(todo) {
        // optimistic remove + reprioritize day
        const dayISO = todo.task_date;
        const remaining = (todosByDay.get(dayISO) ?? []).filter((t)=>t.id !== todo.id);
        const reprioritized = withReprioritized(remaining);
        setTodos((prev)=>{
            const kept = prev.filter((t)=>t.id !== todo.id);
            return kept.map((t)=>{
                if (t.task_date !== dayISO) return t;
                const found = reprioritized.find((x)=>x.id === t.id);
                return found ? {
                    ...t,
                    priority: found.priority
                } : t;
            });
        });
        try {
            const { error: delErr } = await supabase.from("todos").delete().eq("id", todo.id);
            if (delErr) throw delErr;
            // write new priorities for the day (only the ones that changed)
            const updates = reprioritized.map((t)=>({
                    id: t.id,
                    priority: t.priority
                }));
            // Do a few updates individually (simple + reliable).
            for (const u of updates){
                const { error } = await supabase.from("todos").update({
                    priority: u.priority
                }).eq("id", u.id);
                if (error) throw error;
            }
        } catch (e) {
            setErrMsg(e?.message ?? "Delete failed.");
            await loadWeek();
        }
    }
    function findTodoByDnDId(id) {
        const s = String(id);
        if (!s.startsWith("todo:")) return null;
        const tid = Number(s.replace("todo:", ""));
        return todos.find((t)=>t.id === tid) ?? null;
    }
    function findContainerDayISO(overId) {
        const s = String(overId);
        if (isDayId(s)) return isoFromDayId(s);
        if (s.startsWith("todo:")) {
            const t = findTodoByDnDId(s);
            return t?.task_date ?? null;
        }
        return null;
    }
    async function persistDayPriorities(dayISO, dayTodos) {
        // Persist priorities (1..n). Updates only if needed.
        for (const t of dayTodos){
            const { error } = await supabase.from("todos").update({
                priority: t.priority,
                task_date: t.task_date
            }).eq("id", t.id);
            if (error) throw error;
        }
    }
    async function handleDragEnd(evt) {
        const { active, over } = evt;
        setActiveTodo(null);
        if (!over) return;
        const activeTodo = findTodoByDnDId(active.id);
        if (!activeTodo) return;
        const fromDay = activeTodo.task_date;
        const toDay = findContainerDayISO(over.id);
        if (!toDay) return;
        // Current sorted lists
        const fromList = sortByPriority(todosByDay.get(fromDay) ?? []);
        const toList = sortByPriority(todosByDay.get(toDay) ?? []);
        // within same day reorder
        if (isSameISO(fromDay, toDay)) {
            const oldIndex = fromList.findIndex((t)=>t.id === activeTodo.id);
            if (oldIndex === -1) return;
            let newIndex = oldIndex;
            const overStr = String(over.id);
            if (overStr.startsWith("todo:")) {
                const overTodo = findTodoByDnDId(overStr);
                if (overTodo) {
                    newIndex = fromList.findIndex((t)=>t.id === overTodo.id);
                    if (newIndex === -1) newIndex = oldIndex;
                }
            } else {
                // dropped on the day container itself -> move to end
                newIndex = fromList.length - 1;
            }
            if (oldIndex === newIndex) return;
            const moved = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__["arrayMove"])(fromList, oldIndex, newIndex);
            const reprioritized = withReprioritized(moved);
            // optimistic apply
            setTodos((prev)=>prev.map((t)=>{
                    if (t.task_date !== fromDay) return t;
                    const found = reprioritized.find((x)=>x.id === t.id);
                    return found ? {
                        ...t,
                        priority: found.priority
                    } : t;
                }));
            try {
                await persistDayPriorities(fromDay, reprioritized);
            } catch (e) {
                setErrMsg(e?.message ?? "Reorder failed.");
                await loadWeek();
            }
            return;
        }
        // moving between days
        const fromIndex = fromList.findIndex((t)=>t.id === activeTodo.id);
        if (fromIndex === -1) return;
        const overStr = String(over.id);
        let insertIndex = toList.length; // default end
        if (overStr.startsWith("todo:")) {
            const overTodo = findTodoByDnDId(overStr);
            if (overTodo && overTodo.task_date === toDay) {
                const idx = toList.findIndex((t)=>t.id === overTodo.id);
                insertIndex = idx === -1 ? toList.length : idx;
            }
        }
        const movingTodo = {
            ...activeTodo,
            task_date: toDay
        };
        const newFrom = withReprioritized(fromList.filter((t)=>t.id !== activeTodo.id));
        const toWithout = toList.filter((t)=>t.id !== activeTodo.id);
        const newToRaw = [
            ...toWithout.slice(0, insertIndex),
            movingTodo,
            ...toWithout.slice(insertIndex)
        ];
        const newTo = withReprioritized(newToRaw).map((t)=>({
                ...t,
                task_date: toDay
            }));
        // optimistic apply for both days
        setTodos((prev)=>prev.map((t)=>{
                // moved item
                if (t.id === activeTodo.id) {
                    const moved = newTo.find((x)=>x.id === t.id);
                    return moved ? {
                        ...t,
                        ...moved
                    } : {
                        ...t,
                        task_date: toDay
                    };
                }
                if (t.task_date === fromDay) {
                    const found = newFrom.find((x)=>x.id === t.id);
                    return found ? {
                        ...t,
                        priority: found.priority
                    } : t;
                }
                if (t.task_date === toDay) {
                    const found = newTo.find((x)=>x.id === t.id);
                    return found ? {
                        ...t,
                        priority: found.priority
                    } : t;
                }
                return t;
            }));
        try {
            // Persist: update task_date + priority for all todos in both days
            await persistDayPriorities(fromDay, newFrom);
            await persistDayPriorities(toDay, newTo);
        } catch (e) {
            setErrMsg(e?.message ?? "Move failed.");
            await loadWeek();
        }
    }
    function handleDragStart(activeId) {
        const t = findTodoByDnDId(activeId);
        if (t) setActiveTodo(t);
    }
    function gotoPrevWeek() {
        const prev = clampYear2100(addDays(weekStart, -7));
        setWeekAnchor(startOfWeekSunday(prev));
    }
    function gotoNextWeek() {
        const next = clampYear2100(addDays(weekStart, 7));
        setWeekAnchor(startOfWeekSunday(next));
    }
    const weekLabel = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const end = addDays(weekStart, 6);
        return `${prettyMD(weekStart)} – ${prettyMD(end)}, ${end.getFullYear()}`;
    }, [
        weekStart
    ]);
    const [todayISO, setTodayISO] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const now = new Date();
        setTodayISO(toISODate(now)); // user’s computer time
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-text",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: "Todo Calendar"
                }, void 0, false, {
                    fileName: "[project]/pages/todo.tsx",
                    lineNumber: 810,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/todo.tsx",
                lineNumber: 809,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navabar_2$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/todo.tsx",
                lineNumber: 812,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex flex-col mx-auto items-center px-4 py-6",
                children: [
                    errMsg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-4 w-[95dvw] rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-text",
                        children: errMsg
                    }, void 0, false, {
                        fileName: "[project]/pages/todo.tsx",
                        lineNumber: 815,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-[95dvw] rounded-2xl border border-primary/20 bg-secondary/50 p-3 sm:p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex flex-row items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                className: "text-xl font-semibold text-text",
                                                children: "Weekly Tasks"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/todo.tsx",
                                                lineNumber: 825,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-sm text-text/75",
                                                children: weekLabel
                                            }, void 0, false, {
                                                fileName: "[project]/pages/todo.tsx",
                                                lineNumber: 826,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/todo.tsx",
                                        lineNumber: 824,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex shrink-0 items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PageColorPicker$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/pages/todo.tsx",
                                                lineNumber: 829,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: gotoPrevWeek,
                                                className: "rounded-xl border border-primary/40 px-3 py-2 text-sm text-text hover:bg-primary/20 transition",
                                                type: "button",
                                                children: "←"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/todo.tsx",
                                                lineNumber: 830,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setWeekAnchor(startOfWeekSunday(clampYear2100(new Date()))),
                                                className: "rounded-xl border border-primary/40 px-3 py-2 text-sm text-text hover:bg-primary/20 transition",
                                                type: "button",
                                                children: "Today"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/todo.tsx",
                                                lineNumber: 837,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: gotoNextWeek,
                                                className: "rounded-xl border border-primary/40 px-3 py-2 text-sm text-text hover:bg-primary/20 transition",
                                                type: "button",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/todo.tsx",
                                                lineNumber: 846,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/todo.tsx",
                                        lineNumber: 828,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/todo.tsx",
                                lineNumber: 823,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["DndContext"], {
                                sensors: sensors,
                                collisionDetection: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["pointerWithin"],
                                onDragStart: (e)=>handleDragStart(e.active.id),
                                onDragEnd: handleDragEnd,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-3 md:grid-cols-7",
                                        children: weekDays.map((day)=>{
                                            const dayISO = toISODate(day);
                                            const dayTodos = todosByDay.get(dayISO) ?? [];
                                            const containerId = dayIdFromISO(dayISO);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex min-h-[220px] flex-col rounded-2xl border border-primary/20 bg-secondary/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: `${todayISO && dayISO === todayISO ? "bg-primary/40" : ""}  flex items-center justify-between rounded-t-2xl gap-2 border-b border-primary/20 px-3 py-2`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs tracking-wide text-text/70 normal-case",
                                                                    children: prettyDow(day)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/todo.tsx",
                                                                    lineNumber: 883,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "truncate font-medium text-text",
                                                                    children: prettyMD(day)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/todo.tsx",
                                                                    lineNumber: 886,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-text/60",
                                                                    children: dayISO
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/todo.tsx",
                                                                    lineNumber: 889,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/todo.tsx",
                                                            lineNumber: 882,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/todo.tsx",
                                                        lineNumber: 877,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__["SortableContext"], {
                                                            items: [
                                                                containerId,
                                                                ...dayTodos.map((t)=>`todo:${t.id}`)
                                                            ],
                                                            strategy: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$29$__["verticalListSortingStrategy"],
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DroppableDayBody, {
                                                                id: containerId,
                                                                className: [
                                                                    "flex flex-col gap-2",
                                                                    "min-h-[160px] rounded-xl",
                                                                    "p-2 -m-2",
                                                                    "transition"
                                                                ].join(" "),
                                                                children: [
                                                                    dayTodos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "rounded-xl border border-dashed border-primary/30 px-3 py-6 text-center text-sm text-text/60",
                                                                        children: "Drop tasks here"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/todo.tsx",
                                                                        lineNumber: 912,
                                                                        columnNumber: 29
                                                                    }, this) : null,
                                                                    dayTodos.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SortableTodoCard, {
                                                                            todo: t,
                                                                            onEdit: openEdit,
                                                                            onDelete: deleteTodo,
                                                                            onComplete: toggleComplete
                                                                        }, t.id, false, {
                                                                            fileName: "[project]/pages/todo.tsx",
                                                                            lineNumber: 918,
                                                                            columnNumber: 29
                                                                        }, this)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>openCreate(dayISO),
                                                                        className: "shrink-0 rounded-xl border border-dashed border-primary/40 px-2 py-2 text-sm text-text/70 transition hover:bg-primary/10 hover:text-text",
                                                                        type: "button",
                                                                        children: "+ Add"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/todo.tsx",
                                                                        lineNumber: 927,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/todo.tsx",
                                                                lineNumber: 902,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/todo.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/todo.tsx",
                                                        lineNumber: 894,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, dayISO, true, {
                                                fileName: "[project]/pages/todo.tsx",
                                                lineNumber: 872,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/pages/todo.tsx",
                                        lineNumber: 865,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$29$__["DragOverlay"], {
                                        children: activeTodo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(OverlayCard, {
                                            todo: activeTodo
                                        }, void 0, false, {
                                            fileName: "[project]/pages/todo.tsx",
                                            lineNumber: 943,
                                            columnNumber: 29
                                        }, this) : null
                                    }, void 0, false, {
                                        fileName: "[project]/pages/todo.tsx",
                                        lineNumber: 942,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/todo.tsx",
                                lineNumber: 857,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-center justify-between gap-3 text-sm text-text/75",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: loading ? "Loading…" : `${todos.filter((t)=>!t.completed || showCompleted).length} task(s) this week`
                                    }, void 0, false, {
                                        fileName: "[project]/pages/todo.tsx",
                                        lineNumber: 948,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowCompleted(!showCompleted),
                                                className: "rounded-xl border border-primary/40 px-3 py-2 text-sm text-text hover:bg-primary/20 transition",
                                                type: "button",
                                                children: [
                                                    showCompleted ? "Hide" : "Show",
                                                    " Completed"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/todo.tsx",
                                                lineNumber: 956,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: loadWeek,
                                                className: "rounded-xl border border-primary/40 px-3 py-2 text-sm text-text hover:bg-primary/20 transition",
                                                type: "button",
                                                children: "Refresh"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/todo.tsx",
                                                lineNumber: 963,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/todo.tsx",
                                        lineNumber: 955,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/todo.tsx",
                                lineNumber: 947,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/todo.tsx",
                        lineNumber: 821,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/todo.tsx",
                lineNumber: 813,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Modal, {
                open: modalOpen,
                title: editing ? "Edit task" : "New task",
                onClose: ()=>setModalOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "space-y-4 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-2 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-text",
                                    children: "Task date*"
                                }, void 0, false, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 983,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: modalDayISO,
                                    onChange: (e)=>setModalDayISO(e.target.value),
                                    className: "w-[100dvw] min-w-0 max-w-full rounded-xl border border-primary/30 bg-background px-3 py-2 text-text outline-none focus:ring-2 focus:ring-primary/40",
                                    min: "1900-01-01",
                                    max: "2100-12-31"
                                }, void 0, false, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 986,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/todo.tsx",
                            lineNumber: 982,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-2 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-text",
                                    children: "Title*"
                                }, void 0, false, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 997,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    value: draft.title,
                                    onChange: (e)=>setDraft((p)=>({
                                                ...p,
                                                title: e.target.value
                                            })),
                                    className: "w-full min-w-0 max-w-full rounded-xl border border-primary/30 bg-background px-3 py-2 text-text outline-none focus:ring-2 focus:ring-primary/40",
                                    placeholder: "What needs doing?"
                                }, void 0, false, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 1000,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/todo.tsx",
                            lineNumber: 996,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-2 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-text",
                                    children: "Details"
                                }, void 0, false, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 1011,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                    value: draft.content,
                                    onChange: (e)=>setDraft((p)=>({
                                                ...p,
                                                content: e.target.value
                                            })),
                                    className: "min-h-[90px] w-full min-w-0 max-w-full rounded-xl border border-primary/30 bg-background px-3 py-2 text-text outline-none focus:ring-2 focus:ring-primary/40",
                                    placeholder: "Notes…"
                                }, void 0, false, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 1014,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/todo.tsx",
                            lineNumber: 1010,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-2 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-text",
                                    children: "Due date"
                                }, void 0, false, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 1025,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: draft.due_date,
                                    onChange: (e)=>setDraft((p)=>({
                                                ...p,
                                                due_date: e.target.value
                                            })),
                                    className: "w-[100dvw] min-w-0 max-w-full rounded-xl border border-primary/30 bg-background px-3 py-2 text-text outline-none focus:ring-2 focus:ring-primary/40",
                                    min: "1900-01-01",
                                    max: "2100-12-31"
                                }, void 0, false, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 1028,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/todo.tsx",
                            lineNumber: 1024,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-2 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalOpen(false),
                                    className: "rounded-xl border border-primary/40 px-4 py-2 text-sm text-text transition hover:bg-primary/20",
                                    type: "button",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 1041,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: saveTodo,
                                    disabled: saving || !draft.title.trim(),
                                    className: "rounded-xl bg-primary px-4 py-2 text-sm font-medium text-reverse disabled:opacity/50",
                                    type: "button",
                                    children: saving ? "Saving…" : "Save"
                                }, void 0, false, {
                                    fileName: "[project]/pages/todo.tsx",
                                    lineNumber: 1048,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/todo.tsx",
                            lineNumber: 1040,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/todo.tsx",
                    lineNumber: 981,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/todo.tsx",
                lineNumber: 976,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/todo.tsx",
        lineNumber: 808,
        columnNumber: 5
    }, this);
} /**
 * Notes / recommended DB constraints (optional but strongly recommended):
 * - Enforce unique priority within a day so ordering stays consistent:
 *     create unique index todos_task_date_priority_key on public.todos(task_date, priority);
 *
 * - If you enable RLS in Supabase, add policies for selecting/inserting/updating/deleting.
 */ 
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0mk8fvh._.js.map