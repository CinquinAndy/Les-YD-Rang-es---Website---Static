/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main_prestation.js":
/*!***********************************!*\
  !*** ./src/js/main_prestation.js ***!
  \***********************************/
/***/ (() => {

eval("var menuIcon = document.getElementById(\"plate2\");\nvar navLinks = document.getElementById(\"navLinks\");\n\nif (navigator.userAgent.indexOf(\"Firefox\") != -1) {\n  menuIcon.classList.remove(\"burger\");\n}\n\nmenuIcon.addEventListener(\"click\", function () {\n  navLinks.classList.toggle(\"_yd_fade_visible\");\n  navLinks.classList.toggle(\"_yd_fade_invisible\");\n});\n\n//# sourceURL=webpack://base/./src/js/main_prestation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main_prestation.js"]();
/******/ 	
/******/ })()
;