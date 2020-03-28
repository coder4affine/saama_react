/** *** */ (function (modules) { // webpackBootstrap
/** *** */ 	// The module cache
/** *** */ 	const installedModules = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ 		// Check if module is in cache
    /** *** */ 		if (installedModules[moduleId]) {
      /** *** */ 			return installedModules[moduleId].exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = installedModules[moduleId] = {
      /** *** */ 			i: moduleId,
      /** *** */ 			l: false,
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Flag the module as loaded
    /** *** */ 		module.l = true;
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = modules;
  /** *** */
  /** *** */ 	// expose the module cache
  /** *** */ 	__webpack_require__.c = installedModules;
  /** *** */
  /** *** */ 	// define getter function for harmony exports
  /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
    /** *** */ 		if (!__webpack_require__.o(exports, name)) {
      /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /** *** */ 		}
    /** *** */ 	};
  /** *** */
  /** *** */ 	// define __esModule on exports
  /** *** */ 	__webpack_require__.r = function (exports) {
    /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /** *** */ 		}
    /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */ 	};
  /** *** */
  /** *** */ 	// create a fake namespace object
  /** *** */ 	// mode & 1: value is a module id, require it
  /** *** */ 	// mode & 2: merge all properties of value into the ns
  /** *** */ 	// mode & 4: return value when already ns object
  /** *** */ 	// mode & 8|1: behave like require
  /** *** */ 	__webpack_require__.t = function (value, mode) {
    /** *** */ 		if (mode & 1) value = __webpack_require__(value);
    /** *** */ 		if (mode & 8) return value;
    /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /** *** */ 		const ns = Object.create(null);
    /** *** */ 		__webpack_require__.r(ns);
    /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
    /** *** */ 		return ns;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
  /** *** */ 	__webpack_require__.n = function (module) {
    /** *** */ 		const getter = module && module.__esModule
    /** *** */ 			? function getDefault() { return module.default; }
    /** *** */ 			: function getModuleExports() { return module; };
    /** *** */ 		__webpack_require__.d(getter, 'a', getter);
    /** *** */ 		return getter;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// Object.prototype.hasOwnProperty.call
  /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /** *** */
  /** *** */ 	// __webpack_public_path__
  /** *** */ 	__webpack_require__.p = '';
  /** *** */
  /** *** */
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	return __webpack_require__(__webpack_require__.s = './src/index.js');
/** *** */ }({

  /***/ './src/app.js':
  /*! ********************!*\
  !*** ./src/app.js ***!
  \******************* */
  /*! exports provided: xyz, greet, greet1, greet2, greet3, greet4, greet5, default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xyz", function() { return xyz; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greet", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greet1", function() { return greet1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greet2", function() { return greet2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greet3", function() { return greet3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greet4", function() { return greet4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greet5", function() { return greet5; });\nvar xyz = "hi";\nvar greet = "how are you?";\nvar greet1 = "how are you?";\nvar greet2 = "how are you?";\nvar greet3 = "how are you?";\nvar greet4 = "how are you?";\nvar greet5 = "how are you?";\nvar a = "world";\n/* harmony default export */ __webpack_exports__["default"] = (a);\n\n//# sourceURL=webpack:///./src/app.js?');
    /***/ }),

  /***/ './src/index.js':
  /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {
    eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");\n// import hello, { xyz, greet } from "./app";\n\nvar a = "greet me";\nconsole.log(a);\nconsole.log("hello");\nconsole.log(_app__WEBPACK_IMPORTED_MODULE_0__["default"]);\nconsole.log(_app__WEBPACK_IMPORTED_MODULE_0__["greet"]);\nconsole.log(_app__WEBPACK_IMPORTED_MODULE_0__["greet1"]);\nconsole.log(_app__WEBPACK_IMPORTED_MODULE_0__["greet2"]);\nconsole.log(_app__WEBPACK_IMPORTED_MODULE_0__["greet3"]);\n\n//# sourceURL=webpack:///./src/index.js?');
    /***/ }),

/** *** */ }));
