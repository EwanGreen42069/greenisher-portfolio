"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    static async getInitialProps() {\n        const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://random.dog/woof.json?filter=mp4,webm\");\n        const data = await res.json();\n        return {\n            imageURL: data.url\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"homepage-wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Next.JS Dog Displayer\"\n                }, void 0, false, {\n                    fileName: \"/Users/ewangreen/Desktop/greenisher-portfolio/pages/index.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: this.props.imageURL\n                }, void 0, false, {\n                    fileName: \"/Users/ewangreen/Desktop/greenisher-portfolio/pages/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ewangreen/Desktop/greenisher-portfolio/pages/index.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, this);\n    }\n});;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDRjtBQUV0QyxpRUFBZSxjQUFjQyw0Q0FBUztJQUNsQyxhQUFhRSxlQUFlLEdBQUc7UUFDM0IsTUFBTUMsR0FBRyxHQUFHLE1BQU1GLHlEQUFLLENBQUMsOENBQThDLENBQUM7UUFDdkUsTUFBTUcsSUFBSSxHQUFHLE1BQU1ELEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO1FBRTdCLE9BQU87WUFDSEMsUUFBUSxFQUFFRixJQUFJLENBQUNHLEdBQUc7U0FDckI7S0FDSjtJQUVEQyxNQUFNLEdBQUc7UUFDTCxxQkFDSSw4REFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsa0JBQWtCOzs4QkFDN0IsOERBQUNDLElBQUU7OEJBQUMsdUJBQXFCOzs7Ozt3QkFBSzs4QkFDOUIsOERBQUNDLEtBQUc7b0JBQUNDLEdBQUcsRUFBRSxJQUFJLENBQUNDLEtBQUssQ0FBQ1IsUUFBUTs7Ozs7d0JBQUk7Ozs7OztnQkFDL0IsQ0FDVDtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmVlbmlzaGVyLXBvcnRmb2xpby8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcmFuZG9tLmRvZy93b29mLmpzb24/ZmlsdGVyPW1wNCx3ZWJtXCIpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGltYWdlVVJMOiBkYXRhLnVybFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPk5leHQuSlMgRG9nIERpc3BsYXllcjwvaDE+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuaW1hZ2VVUkx9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmZXRjaCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImRhdGEiLCJqc29uIiwiaW1hZ2VVUkwiLCJ1cmwiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImltZyIsInNyYyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();