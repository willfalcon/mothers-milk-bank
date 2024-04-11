/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/home-header/home-header.js":
/*!*******************************************!*\
  !*** ./blocks/home-header/home-header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_scripts_waves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/scripts/waves */ \"./src/scripts/waves.js\");\n\nvar header = document.querySelector('.home-header,.page-header');\nif (header) {\n  var _header$dataset = header.dataset,\n    animation = _header$dataset.animation,\n    duration = _header$dataset.duration;\n  if (animation !== 'none') {\n    var waves = header.querySelector('.waves-wrapper');\n    (0,_src_scripts_waves__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(waves, animation, duration);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja3MvaG9tZS1oZWFkZXIvaG9tZS1oZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW90aGVycy1taWxrLWJhbmsvLi9ibG9ja3MvaG9tZS1oZWFkZXIvaG9tZS1oZWFkZXIuanM/ZjdlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5pdFdhdmVzIGZyb20gJy4uLy4uL3NyYy9zY3JpcHRzL3dhdmVzJztcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtaGVhZGVyLC5wYWdlLWhlYWRlcicpO1xuaWYgKGhlYWRlcikge1xuICBjb25zdCB7IGFuaW1hdGlvbiwgZHVyYXRpb24gfSA9IGhlYWRlci5kYXRhc2V0O1xuICBpZiAoYW5pbWF0aW9uICE9PSAnbm9uZScpIHtcbiAgICBjb25zdCB3YXZlcyA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcud2F2ZXMtd3JhcHBlcicpO1xuICAgIGluaXRXYXZlcyh3YXZlcywgYW5pbWF0aW9uLCBkdXJhdGlvbik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./blocks/home-header/home-header.js\n");

/***/ }),

/***/ "./src/scripts/waves.js":
/*!******************************!*\
  !*** ./src/scripts/waves.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initWaves)\n/* harmony export */ });\nfunction initWaves(container, animation, duration) {\n  var waves = container.querySelectorAll('.waves');\n  Array.from(waves).forEach(function (wave) {\n    wave.style.transition = \"\".concat(duration, \"s\");\n  });\n  var wave1 = waves[0];\n  var wave2 = waves[1];\n  var _wave1$getBoundingCli = wave1.getBoundingClientRect(),\n    height = _wave1$getBoundingCli.height;\n  wave1.parentNode.parentNode.style.height = height + 'px';\n  if (animation === 'right') {\n    wave1.style.transform = 'rotateY(180deg) translateX(100%)';\n    wave2.style.transform = 'translateX(0)';\n  }\n  if (animation === 'left') {\n    wave1.style.transform = 'translateX(0)';\n    wave2.style.transform = 'rotateY(180deg) translateX(-100%)';\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93YXZlcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3RoZXJzLW1pbGstYmFuay8uL3NyYy9zY3JpcHRzL3dhdmVzLmpzPzMzN2YiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFdhdmVzKGNvbnRhaW5lciwgYW5pbWF0aW9uLCBkdXJhdGlvbikge1xuICBjb25zdCB3YXZlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcud2F2ZXMnKTtcbiAgQXJyYXkuZnJvbSh3YXZlcykuZm9yRWFjaCh3YXZlID0+IHtcbiAgICB3YXZlLnN0eWxlLnRyYW5zaXRpb24gPSBgJHtkdXJhdGlvbn1zYDtcbiAgfSk7XG4gIGNvbnN0IHdhdmUxID0gd2F2ZXNbMF07XG4gIGNvbnN0IHdhdmUyID0gd2F2ZXNbMV07XG4gIGNvbnN0IHsgaGVpZ2h0IH0gPSB3YXZlMS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgd2F2ZTEucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgaWYgKGFuaW1hdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgIHdhdmUxLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWCgxMDAlKSc7XG4gICAgd2F2ZTIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xuICB9XG4gIGlmIChhbmltYXRpb24gPT09ICdsZWZ0Jykge1xuICAgIHdhdmUxLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcbiAgICB3YXZlMi5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVgoLTEwMCUpJztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/waves.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./blocks/home-header/home-header.js");
/******/ 	
/******/ })()
;