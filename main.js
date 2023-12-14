/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/WidgetCollapse.js":
/*!**********************************!*\
  !*** ./src/js/WidgetCollapse.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CollapsibleWidget; }
/* harmony export */ });
class CollapsibleWidget {
  constructor(container) {
    this.container = container;
    this.btnCollapse = this.container.querySelector('.btn_collapse');
    this.collapsibleContainer = this.container.querySelector('.collapsible_container');
    this.collapseStatus = false;
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }
  activation() {
    this.btnCollapse.addEventListener('click', this.toggleCollapse);
  }
  toggleCollapse() {
    this.collapseStatus = this.collapseStatus === false;
    this.collapsibleContainer.classList.toggle('show');
    this.container.classList.toggle('rolled-up');
  }
}

/***/ }),

/***/ "./src/js/WidgetFeedback.js":
/*!**********************************!*\
  !*** ./src/js/WidgetFeedback.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FeedbackWidget; }
/* harmony export */ });
class FeedbackWidget {
  constructor(container) {
    this.container = container;
    this.btnOpen = this.container.querySelector('.open_popup');
    this.popupBox = this.container.querySelector('.popup_box');
    this.btnHide = this.container.querySelector('.btn_hide-popup');
    this.openPopup = this.openPopup.bind(this);
    this.hidepopup = this.hidepopup.bind(this);
  }
  activation() {
    this.btnOpen.addEventListener('click', this.openPopup);
  }
  openPopup() {
    this.btnOpen.classList.add('hidden_button');
    this.popupBox.classList.remove('hide_popup');
    this.btnHide.addEventListener('click', this.hidepopup);
  }
  hidepopup() {
    this.popupBox.classList.add('hide_popup');
    this.btnHide.removeEventListener('click', this.hidepopup);
    this.btnOpen.classList.remove('hidden_button');
  }
}

/***/ }),

/***/ "./src/js/WidgetLiker.js":
/*!*******************************!*\
  !*** ./src/js/WidgetLiker.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LikerWidget; }
/* harmony export */ });
class LikerWidget {
  constructor(container, animationBox) {
    this.container = container;
    this.animationBox = animationBox;
    this.btnGoLike = this.container.querySelector('.add_like');
    this.heart = this.container.querySelector('.heart');
    this.goLike = this.goLike.bind(this);
  }
  actiation() {
    this.btnGoLike.addEventListener('click', this.goLike);
  }
  goLike() {
    const flyingHeart = this.heart.cloneNode(true);
    flyingHeart.style.animationName = this.getRandomAnimation();
    const coordinatesBox = this.container.getBoundingClientRect();
    const {
      top,
      left,
      width
    } = this.btnGoLike.getBoundingClientRect();
    flyingHeart.style.top = `${top - coordinatesBox.top}px`;
    flyingHeart.style.left = `${left - coordinatesBox.left + width / 2 - 20}px`;
    this.container.append(flyingHeart);
    flyingHeart.addEventListener('animationend', () => {
      flyingHeart.remove();
    });
    flyingHeart.classList.add('move');
  }
  getRandomAnimation() {
    return this.animationBox[Math.floor(Math.random() * this.animationBox.length)];
  }
}

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WidgetCollapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidgetCollapse */ "./src/js/WidgetCollapse.js");
/* harmony import */ var _WidgetFeedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WidgetFeedback */ "./src/js/WidgetFeedback.js");
/* harmony import */ var _WidgetLiker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WidgetLiker */ "./src/js/WidgetLiker.js");



const collapseBox = document.querySelector('.collapse_box');
const collapsible = new _WidgetCollapse__WEBPACK_IMPORTED_MODULE_0__["default"](collapseBox);
collapsible.activation();
const chatBox = document.querySelector('.chat_box');
const feedback = new _WidgetFeedback__WEBPACK_IMPORTED_MODULE_1__["default"](chatBox);
feedback.activation();
const likerBox = document.querySelector('.liker_box');
const animationBox = ['flying-heart-1', 'flying-heart-2', 'flying-heart-3', 'flying-heart-4'];
const liker = new _WidgetLiker__WEBPACK_IMPORTED_MODULE_2__["default"](likerBox, animationBox);
liker.actiation();

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Animation</title>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"container\">\r\n\r\n        <!-- Collapse -->\r\n\r\n        <div class=\"collapse_box box\">\r\n            <h2 class=\"box_title\">Collapse</h2>\r\n            <button class=\"btn_collapse\" type=\"button\">Collapse</button>\r\n            <div class=\"collapsible_container\">\r\n                <p class=\"collapsible_text\">\r\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.\r\n                    Dolorum optio quaerat atque quos praesentium neque quis facilis,\r\n                    tenetur eius exercitationem iure excepturi laboriosam amet hic vel fugit,\r\n                    explicabo similique impedit!\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Chat -->\r\n\r\n        <div class=\"chat_box box\">\r\n            <h2 class=\"box_title\">Chat</h2>\r\n            <button type=\"button\" class=\"open_popup\"></button>\r\n            <div class=\"popup_box hide_popup\">\r\n                <div class=\"popup_header\">\r\n                    <h4 class=\"popup_title\">Напишите нам</h4>\r\n                    <button class=\"btn_hide-popup\" aria-label=\"Скрыть окно обратной связи\"></button>\r\n                </div>\r\n                <textarea name=\"enter\" class=\"enter-text_feedback\"></textarea>\r\n                <button type=\"button\" class=\"send_feedback\">Отправить</button>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Liker -->\r\n\r\n        <div class=\"liker_box box\">\r\n            <h2 class=\"box_title\">Liker</h2>\r\n            <div class=\"heart\"></div>\r\n            <button type=\"button\" class=\"add_like\">Like</button>\r\n        </div>\r\n    </div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");



}();
/******/ })()
;
//# sourceMappingURL=main.js.map