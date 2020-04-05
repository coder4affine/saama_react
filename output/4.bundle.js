(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/pages/Users/index.js":
/*!**********************************!*\
  !*** ./src/pages/Users/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contex_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contex/ThemeContext */ \"./src/contex/ThemeContext.js\");\n\n // import PropTypes from 'prop-types';\n\nvar Index = function Index(props) {\n  console.warn('props', props);\n  console.warn('rerender');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Users Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contex_ThemeContext__WEBPACK_IMPORTED_MODULE_1__[\"ThemeConsumer\"], null, function (_ref) {\n    var theme = _ref.theme,\n        changeTheme = _ref.changeTheme;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, theme), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"button\",\n      onClick: function onClick() {\n        changeTheme(theme === 'light' ? 'dark' : 'light');\n      }\n    }, \"Change Theme\"));\n  }));\n};\n\nIndex.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack:///./src/pages/Users/index.js?");

/***/ })

}]);