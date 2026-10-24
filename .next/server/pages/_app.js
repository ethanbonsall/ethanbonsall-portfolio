/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./context/themecontext.tsx":
/*!**********************************!*\
  !*** ./context/themecontext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeContext: () => (/* binding */ ThemeContext),\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    theme: \"light\",\n    toggleTheme: ()=>{}\n});\nfunction ThemeProvider({ children }) {\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ThemeProvider.useEffect\": ()=>{\n            const storedTheme = localStorage.getItem(\"theme\");\n            if (storedTheme) {\n                setTheme(storedTheme);\n                document.documentElement.classList.toggle(\"dark\", storedTheme === \"dark\");\n            } else {\n                const prefersDark = window.matchMedia(\"(prefers-color-scheme: dark)\").matches;\n                setTheme(prefersDark ? \"dark\" : \"light\");\n                document.documentElement.classList.toggle(\"dark\", prefersDark);\n            }\n        }\n    }[\"ThemeProvider.useEffect\"], []);\n    const toggleTheme = ()=>{\n        const nextTheme = theme === \"light\" ? \"dark\" : \"light\";\n        setTheme(nextTheme);\n        document.documentElement.classList.toggle(\"dark\", nextTheme === \"dark\");\n        localStorage.setItem(\"theme\", nextTheme);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ethanbonsall/portfolio/web/context/themecontext.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvdGhlbWVjb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNFO0FBSS9ELE1BQU1HLDZCQUFlSCxvREFBYUEsQ0FHdEM7SUFBRUksT0FBTztJQUFTQyxhQUFhLEtBQU87QUFBRSxHQUFHO0FBRXZDLFNBQVNDLGNBQWMsRUFBRUMsUUFBUSxFQUEyQjtJQUNqRSxNQUFNLENBQUNILE9BQU9JLFNBQVMsR0FBR04sK0NBQVFBLENBQVE7SUFFMUNELGdEQUFTQTttQ0FBQztZQUNSLE1BQU1RLGNBQWNDLGFBQWFDLE9BQU8sQ0FBQztZQUN6QyxJQUFJRixhQUFhO2dCQUNmRCxTQUFTQztnQkFDVEcsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRTixnQkFBZ0I7WUFDcEUsT0FBTztnQkFDTCxNQUFNTyxjQUFjQyxPQUFPQyxVQUFVLENBQ25DLGdDQUNBQyxPQUFPO2dCQUNUWCxTQUFTUSxjQUFjLFNBQVM7Z0JBQ2hDSixTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVFDO1lBQ3BEO1FBQ0Y7a0NBQUcsRUFBRTtJQUVMLE1BQU1YLGNBQWM7UUFDbEIsTUFBTWUsWUFBWWhCLFVBQVUsVUFBVSxTQUFTO1FBQy9DSSxTQUFTWTtRQUNUUixTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVFLLGNBQWM7UUFDaEVWLGFBQWFXLE9BQU8sQ0FBQyxTQUFTRDtJQUNoQztJQUVBLHFCQUNFLDhEQUFDakIsYUFBYW1CLFFBQVE7UUFBQ0MsT0FBTztZQUFFbkI7WUFBT0M7UUFBWTtrQkFDaERFOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsiL1VzZXJzL2V0aGFuYm9uc2FsbC9wb3J0Zm9saW8vd2ViL2NvbnRleHQvdGhlbWVjb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBUaGVtZSA9IFwibGlnaHRcIiB8IFwiZGFya1wiO1xuXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7XG4gIHRoZW1lOiBUaGVtZTtcbiAgdG9nZ2xlVGhlbWU6ICgpID0+IHZvaWQ7XG59Pih7IHRoZW1lOiBcImxpZ2h0XCIsIHRvZ2dsZVRoZW1lOiAoKSA9PiB7fSB9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlPFRoZW1lPihcImxpZ2h0XCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIGFzIFRoZW1lO1xuICAgIGlmIChzdG9yZWRUaGVtZSkge1xuICAgICAgc2V0VGhlbWUoc3RvcmVkVGhlbWUpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIsIHN0b3JlZFRoZW1lID09PSBcImRhcmtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZWZlcnNEYXJrID0gd2luZG93Lm1hdGNoTWVkaWEoXG4gICAgICAgIFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiXG4gICAgICApLm1hdGNoZXM7XG4gICAgICBzZXRUaGVtZShwcmVmZXJzRGFyayA/IFwiZGFya1wiIDogXCJsaWdodFwiKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiLCBwcmVmZXJzRGFyayk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV4dFRoZW1lID0gdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuICAgIHNldFRoZW1lKG5leHRUaGVtZSk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIsIG5leHRUaGVtZSA9PT0gXCJkYXJrXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV4dFRoZW1lKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIHRvZ2dsZVRoZW1lIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRoZW1lQ29udGV4dCIsInRoZW1lIiwidG9nZ2xlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRUaGVtZSIsInN0b3JlZFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicHJlZmVyc0RhcmsiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIm5leHRUaGVtZSIsInNldEl0ZW0iLCJQcm92aWRlciIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/themecontext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_themecontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/themecontext */ \"(pages-dir-node)/./context/themecontext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_themecontext__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__.Analytics, {}, void 0, false, {\n                    fileName: \"/Users/ethanbonsall/portfolio/web/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/ethanbonsall/portfolio/web/pages/_app.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ethanbonsall/portfolio/web/pages/_app.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ethanbonsall/portfolio/web/pages/_app.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUN6QjtBQUMyQztBQUV0QjtBQUduRCxNQUFNSSxjQUFjLElBQUlILDhEQUFXQTtBQUVwQixTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDTCxzRUFBbUJBO1FBQUNNLFFBQVFKO2tCQUMzQiw0RUFBQ0osZ0VBQWFBOzs4QkFDWiw4REFBQ0csOERBQVNBOzs7Ozs4QkFDViw4REFBQ0c7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmJvbnNhbGwvcG9ydGZvbGlvL3dlYi9wYWdlcy9fYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC90aGVtZWNvbnRleHRcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IEFuYWx5dGljcyB9IGZyb20gXCJAdmVyY2VsL2FuYWx5dGljcy9yZWFjdFwiXG5cblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICA8QW5hbHl0aWNzIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIkFuYWx5dGljcyIsInF1ZXJ5Q2xpZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "@vercel/analytics/react":
/*!******************************************!*\
  !*** external "@vercel/analytics/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();