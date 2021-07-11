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

/***/ "./src/js/main_blog.js":
/*!*****************************!*\
  !*** ./src/js/main_blog.js ***!
  \*****************************/
/***/ (() => {

eval("var menuIcon = document.getElementById(\"plate2\");\nvar navLinks = document.getElementById(\"navLinks\");\nvar nav = document.getElementById(\"nav\");\n\nif (navigator.userAgent.indexOf(\"Firefox\") != -1) {\n  menuIcon.classList.remove(\"burger\");\n}\n\nmenuIcon.addEventListener(\"click\", function () {\n  navLinks.classList.toggle(\"_yd_fade_visible\");\n  navLinks.classList.toggle(\"_yd_fade_invisible\");\n}); // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size\n\nwindow.onscroll = function () {\n  scrollFunction();\n};\n\nvar flag = false;\n\nfunction scrollFunction() {\n  if (flag === false) {\n    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {\n      nav.classList.toggle(\"scrolled\");\n      flag = true;\n    }\n  }\n}\n\n//# sourceURL=webpack://base/./src/js/main_blog.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main_blog.js"]();
/******/ 	
/******/ })()
;