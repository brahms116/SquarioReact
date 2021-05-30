/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksquario"] = self["webpackChunksquario"] || []).push([["src_rust_rust_js"],{

/***/ "./src/rust/rust.js":
/*!**************************!*\
  !*** ./src/rust/rust.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TestStruct\": () => (/* reexport safe */ _rust_bg_js__WEBPACK_IMPORTED_MODULE_0__.TestStruct),\n/* harmony export */   \"__wbindgen_throw\": () => (/* reexport safe */ _rust_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw),\n/* harmony export */   \"add\": () => (/* reexport safe */ _rust_bg_js__WEBPACK_IMPORTED_MODULE_0__.add)\n/* harmony export */ });\n/* harmony import */ var _rust_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_bg.js */ \"./src/rust/rust_bg.js\");\n\n\n\n//# sourceURL=webpack://squario/./src/rust/rust.js?");

/***/ }),

/***/ "./src/rust/rust_bg.js":
/*!*****************************!*\
  !*** ./src/rust/rust_bg.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"TestStruct\": () => (/* binding */ TestStruct),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _rust_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_bg.wasm */ \"./src/rust/rust_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _rust_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_rust_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {number} a\n* @param {number} b\n* @returns {number}\n*/\nfunction add(a, b) {\n    var ret = _rust_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.add(a, b);\n    return ret;\n}\n\n/**\n*/\nclass TestStruct {\n\n    static __wrap(ptr) {\n        const obj = Object.create(TestStruct.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _rust_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_teststruct_free(ptr);\n    }\n    /**\n    * @param {string} data\n    */\n    constructor(data) {\n        var ptr0 = passStringToWasm0(data, _rust_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _rust_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n        var len0 = WASM_VECTOR_LEN;\n        var ret = _rust_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.teststruct_new(ptr0, len0);\n        return TestStruct.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    get_value() {\n        var ret = _rust_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.teststruct_get_value(this.ptr);\n        return ret;\n    }\n}\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack://squario/./src/rust/rust_bg.js?");

/***/ }),

/***/ "./src/rust/rust_bg.wasm":
/*!*******************************!*\
  !*** ./src/rust/rust_bg.wasm ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.id];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name) exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./rust_bg.js */ \"./src/rust/rust_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"\"]()\n\n//# sourceURL=webpack://squario/./src/rust/rust_bg.wasm?");

/***/ })

}]);