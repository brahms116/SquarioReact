/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksquario"] = self["webpackChunksquario"] || []).push([["src_pkg_rust_js"],{

/***/ "./src/pkg/rust.js":
/*!*************************!*\
  !*** ./src/pkg/rust.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* reexport safe */ _rust_bg_js__WEBPACK_IMPORTED_MODULE_0__.add)\n/* harmony export */ });\n/* harmony import */ var _rust_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_bg.js */ \"./src/pkg/rust_bg.js\");\n\n\n\n//# sourceURL=webpack://squario/./src/pkg/rust.js?");

/***/ }),

/***/ "./src/pkg/rust_bg.js":
/*!****************************!*\
  !*** ./src/pkg/rust_bg.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add)\n/* harmony export */ });\n/* harmony import */ var _rust_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_bg.wasm */ \"./src/pkg/rust_bg.wasm\");\n\n\n/**\n* @param {number} a\n* @param {number} b\n* @returns {number}\n*/\nfunction add(a, b) {\n    var ret = _rust_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.add(a, b);\n    return ret;\n}\n\n\n\n//# sourceURL=webpack://squario/./src/pkg/rust_bg.js?");

/***/ }),

/***/ "./src/pkg/rust_bg.wasm":
/*!******************************!*\
  !*** ./src/pkg/rust_bg.wasm ***!
  \******************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.id];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name) exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"\"]()\n\n//# sourceURL=webpack://squario/./src/pkg/rust_bg.wasm?");

/***/ })

}]);