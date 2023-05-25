/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  async function initMap() {\n    const {\n      Map\n    } = await google.maps.importLibrary(\"maps\");\n    let map = new Map(document.getElementById(\"map\"), {\n      center: {\n        lat: 37.773972,\n        lng: -122.431297\n      },\n      zoom: 8\n    });\n    let marker1 = new google.maps.Marker({\n      position: {\n        lat: 37.889364,\n        lng: -122.632551\n      },\n      map: map,\n      title: \"Mickey's Beach\"\n    });\n    const detailWindow1 = new google.maps.InfoWindow({\n      content: `<h2 class=\"cool-text\">Mickey's Beach</h2`\n    });\n    marker1.addListener(\"click\", () => {\n      detailWindow1.open(map, marker1);\n    });\n  }\n  window.initMap = initMap();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0TWFwIiwiTWFwIiwiZ29vZ2xlIiwibWFwcyIsImltcG9ydExpYnJhcnkiLCJtYXAiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJtYXJrZXIxIiwiTWFya2VyIiwicG9zaXRpb24iLCJ0aXRsZSIsImRldGFpbFdpbmRvdzEiLCJJbmZvV2luZG93IiwiY29udGVudCIsImFkZExpc3RlbmVyIiwib3BlbiIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWJlcnMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBhc3luYyBmdW5jdGlvbiBpbml0TWFwKCkge1xyXG5cclxuICBjb25zdCB7IE1hcCB9ID0gYXdhaXQgZ29vZ2xlLm1hcHMuaW1wb3J0TGlicmFyeShcIm1hcHNcIik7XHJcblxyXG4gICAgbGV0IG1hcCA9IG5ldyBNYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcclxuICAgICAgY2VudGVyOiB7IGxhdDogMzcuNzczOTcyLCBsbmc6IFx0LTEyMi40MzEyOTcgfSxcclxuICAgICAgem9vbTogOCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgbGV0IG1hcmtlcjEgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgcG9zaXRpb246e2xhdDogMzcuODg5MzY0LCBsbmc6IC0xMjIuNjMyNTUxIH0sXHJcbiAgICAgIG1hcDogbWFwLFxyXG4gICAgICB0aXRsZTogXCJNaWNrZXkncyBCZWFjaFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZXRhaWxXaW5kb3cxID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG4gICAgICBjb250ZW50OiBgPGgyIGNsYXNzPVwiY29vbC10ZXh0XCI+TWlja2V5J3MgQmVhY2g8L2gyYFxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFya2VyMS5hZGRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGV0YWlsV2luZG93MS5vcGVuKG1hcCwgbWFya2VyMSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbndpbmRvdy5pbml0TWFwID0gaW5pdE1hcCgpO1xyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuXHJcblxyXG5cclxuXHJcbiAiXSwibWFwcGluZ3MiOiJBQUVBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDbEQsZUFBZUMsT0FBT0EsQ0FBQSxFQUFHO0lBRXpCLE1BQU07TUFBRUM7SUFBSSxDQUFDLEdBQUcsTUFBTUMsTUFBTSxDQUFDQyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFFckQsSUFBSUMsR0FBRyxHQUFHLElBQUlKLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDUSxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDaERDLE1BQU0sRUFBRTtRQUFFQyxHQUFHLEVBQUUsU0FBUztRQUFFQyxHQUFHLEVBQUcsQ0FBQztNQUFXLENBQUM7TUFDN0NDLElBQUksRUFBRTtJQUNOLENBQUMsQ0FBQztJQUVKLElBQUlDLE9BQU8sR0FBRyxJQUFJVCxNQUFNLENBQUNDLElBQUksQ0FBQ1MsTUFBTSxDQUFDO01BQ25DQyxRQUFRLEVBQUM7UUFBQ0wsR0FBRyxFQUFFLFNBQVM7UUFBRUMsR0FBRyxFQUFFLENBQUM7TUFBVyxDQUFDO01BQzVDSixHQUFHLEVBQUVBLEdBQUc7TUFDUlMsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxDQUFDO0lBRUYsTUFBTUMsYUFBYSxHQUFHLElBQUliLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDYSxVQUFVLENBQUM7TUFDL0NDLE9BQU8sRUFBRztJQUNaLENBQUMsQ0FBQztJQUVGTixPQUFPLENBQUNPLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUNqQ0gsYUFBYSxDQUFDSSxJQUFJLENBQUNkLEdBQUcsRUFBRU0sT0FBTyxDQUFDO0lBQ2xDLENBQUMsQ0FBQztFQUNKO0VBRUZTLE1BQU0sQ0FBQ3BCLE9BQU8sR0FBR0EsT0FBTyxDQUFDLENBQUM7QUFFMUIsQ0FBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYmVycy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;