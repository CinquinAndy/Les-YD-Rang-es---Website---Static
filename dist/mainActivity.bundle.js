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

/***/ "./src/js/main_activity.js":
/*!*********************************!*\
  !*** ./src/js/main_activity.js ***!
  \*********************************/
/***/ (() => {

eval("var menuIcon = document.getElementById(\"plate2\");\nvar navLinks = document.getElementById(\"navLinks\");\n\nvar _btn_arrow_left = document.getElementById(\"_btn_arrow_left\");\n\nvar _btn_arrow_right = document.getElementById(\"_btn_arrow_right\");\n\nvar slide = [document.getElementById(\"id1\"), document.getElementById(\"id2\"), document.getElementById(\"id3\"), document.getElementById(\"id4\"), document.getElementById(\"id5\")];\nvar compteur = 1;\n\nif (navigator.userAgent.indexOf(\"Firefox\") != -1) {\n  menuIcon.classList.remove(\"burger\");\n}\n\nmenuIcon.addEventListener(\"click\", function () {\n  navLinks.classList.toggle(\"_yd_fade_visible\");\n  navLinks.classList.toggle(\"_yd_fade_invisible\");\n});\n\nfunction reset_check() {\n  for (var i = 0; i < 5; i++) {\n    slide[i].checked = false;\n  }\n}\n\n_btn_arrow_right.addEventListener(\"click\", function () {\n  if (compteur !== 1) {\n    reset_check();\n    compteur--;\n    slide[compteur - 1].checked = true;\n  }\n});\n\n_btn_arrow_left.addEventListener(\"click\", function () {\n  if (compteur !== 5) {\n    reset_check();\n    compteur++;\n    slide[compteur - 1].checked = true;\n  }\n});\n\n//# sourceURL=webpack://base/./src/js/main_activity.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main_activity.js"]();
/******/ 	
/******/ })()
;