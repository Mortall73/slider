/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slider = __webpack_require__(/*! ./slider/slider.js */ \"./src/app/slider/slider.js\");\n\nvar _slider2 = _interopRequireDefault(_slider);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _slider2.default('.slider', {\n    sliders_to_scroll: 1,\n    transition: 500,\n    visible_max: 1,\n    slider_align: \"bottom\"\n});\n\n//# sourceURL=webpack:///./src/app/app.js?");

/***/ }),

/***/ "./src/app/slider/slider.js":
/*!**********************************!*\
  !*** ./src/app/slider/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Slider = function () {\n    /**\r\n     * \r\n     * @param {String} elementName - уникальный идентификатор элемента\r\n     * @param {Object} options - объект настроек слайдера {\r\n     *  visible_max - Number сколько слайдов отображать (по умолчанию 1),\r\n     *  sliders_to_scroll - Number сколько слайдев скролить (по умолчанию 1),\r\n     *  transition - Number время скролла в милисек. (по умолчанию 1000 || 1s),\r\n     *  slider_align - String выравнивание слайдов (по умолчанию bottom) : bottom, top, middle\r\n     * }\r\n     */\n    function Slider(elementName, options) {\n        _classCallCheck(this, Slider);\n\n        this.slider_el = document.querySelector(elementName);\n        this.slider_el_width = this.slider_el.offsetWidth;\n        this.slider_list = document.createElement('div');\n        this.slider_list_width = 100; // по дефолту 100%\n        this.sliders = this.slider_el.children;\n        this.sliders_count = this.sliders.length;\n        this.visible_max = options.visible_max || 1;\n        this.sliders_to_scroll = options.sliders_to_scroll || 1;\n        this.transition = options.transition || 1000; // ms\n        this.slide_width = Math.ceil(this.slider_el_width / this.visible_max);\n        this.slider_list_shift = this.slide_width * this.sliders_to_scroll;\n        this.slider_align = options.slider_align || 'bottom';\n\n        /** Хранение смещения слайдера */\n        this.slider_list_position = 0;\n\n        /** Хранение проскролленых сладов */\n        this.scroll_sliders_count = 0;\n\n        this.hasNext = true;\n        this.hasPrev = false;\n\n        this.next_button = document.createElement('div');\n        this.next_button.className = 'js-slider-btn js-slider-btn--next';\n\n        this.prev_button = document.createElement('div');\n        this.prev_button.className = 'js-slider-btn js-slider-btn--prev';\n\n        this.init();\n\n        this.resizeSlider();\n    }\n    /**\r\n     * @description инициализация слайдера\r\n     */\n\n\n    _createClass(Slider, [{\n        key: 'init',\n        value: function init() {\n            var _this = this;\n\n            /** Установка длины контейнера для слайдов */\n            this.slider_list_width = Math.round(this.slide_width * this.sliders_count);\n\n            this.slider_list.className = 'js-slider-list';\n            this.slider_el.classList.add('js-slider');\n\n            if (this.sliders_count > 0) {\n\n                this.slider_list.style.width = this.slider_list_width + 'px';\n\n                /** Класс задающий выравнивание элементов */\n                this.slider_list.classList.add('js-slider-list--' + this.slider_align);\n\n                [].forEach.call(this.sliders, function (slider_el) {\n\n                    slider_el.classList.add('js-slider-item');\n                    slider_el.style.width = _this.slide_width + 'px';\n                });\n\n                this.wrapAll(this.sliders, this.slider_list);\n\n                if (this.sliders_count > 1) {\n                    this.slider_el.appendChild(this.next_button);\n                    this.slider_el.appendChild(this.prev_button);\n\n                    /** стрелочная функция сохраняет контекст this на классе Slider иначе this = button */\n                    this.next_button.addEventListener('click', function () {\n                        _this.next();\n                    });\n                    this.prev_button.addEventListener('click', function () {\n                        _this.prev();\n                    });\n                }\n            }\n\n            /**\r\n             * Установка активности кнопок\r\n             */\n            this.stopScroll();\n        }\n\n        /**\r\n         * @description оборачивает элементы в wrapper, (аналог wrapAll JQuery)\r\n         * @param {Element} elements - элементы которые нужно обернуть в wrapper\r\n         * @param {Element} wrapper - оберточный блок\r\n         */\n\n    }, {\n        key: 'wrapAll',\n        value: function wrapAll(elements, wrapper) {\n\n            var el = elements.length ? elements[0] : elements;\n\n            var parent = el.parentNode;\n            var sibling = el.nextSibling;\n\n            wrapper.appendChild(el);\n\n            while (elements.length) {\n                wrapper.appendChild(elements[0]);\n            }\n\n            if (sibling) {\n                parent.insertBefore(wrapper, sibling);\n            } else {\n                parent.appendChild(wrapper);\n            }\n        }\n    }, {\n        key: 'next',\n        value: function next() {\n            if (this.hasNext) {\n\n                this.scroll_sliders_count += this.sliders_to_scroll;\n                this.slider_list_position += this.slider_list_shift;\n\n                this.slider_list.style.cssText = '-webkit-transform: translateX(-' + this.slider_list_position + 'px);\\n                                            -ms-transform: translateX(-' + this.slider_list_position + 'px);\\n                                            transform: translateX(-' + this.slider_list_position + 'px);\\n                                            -webkit-transition: all ' + this.transition + 'ms linear;\\n                                            -o-transition: all ' + this.transition + 'ms linear;\\n                                            transition: all ' + this.transition + 'ms linear;';\n            }\n            this.stopScroll();\n        }\n    }, {\n        key: 'prev',\n        value: function prev() {\n            if (this.hasPrev) {\n\n                this.slider_list_position -= this.slider_list_shift;\n                this.scroll_sliders_count -= this.sliders_to_scroll;\n\n                this.slider_list.style.cssText = '-webkit-transform: translateX(-' + this.slider_list_position + 'px);\\n                                            -ms-transform: translateX(-' + this.slider_list_position + 'px);\\n                                            transform: translateX(-' + this.slider_list_position + 'px);\\n                                            -webkit-transition: all ' + this.transition + 'ms linear;\\n                                            -o-transition: all ' + this.transition + 'ms linear;\\n                                            transition: all ' + this.transition + 'ms linear;';\n            }\n            this.stopScroll();\n        }\n    }, {\n        key: 'stopScroll',\n        value: function stopScroll() {\n            if (this.scroll_sliders_count >= this.sliders_count - 1) {\n\n                this.next_button.classList.add('js-slider-btn--disable');\n                this.hasNext = false;\n            } else {\n                this.next_button.classList.remove('js-slider-btn--disable');\n                this.hasNext = true;\n            }\n\n            if (this.scroll_sliders_count <= 0) {\n\n                this.prev_button.classList.add('js-slider-btn--disable');\n                this.hasPrev = false;\n            } else {\n                this.prev_button.classList.remove('js-slider-btn--disable');\n                this.hasPrev = true;\n            }\n        }\n    }, {\n        key: 'resizeSlider',\n        value: function resizeSlider() {\n            var _this2 = this;\n\n            window.addEventListener('resize', function () {\n                /** Пересчет величин зависящих от длины слайдера */\n                _this2.slider_el_width = _this2.slider_el.offsetWidth;\n                _this2.sliders = _this2.slider_list.children;\n                _this2.slide_width = Math.ceil(_this2.slider_el_width / _this2.visible_max);\n                _this2.slider_list_width = Math.round(_this2.slide_width * _this2.sliders_count);\n                _this2.slider_list.style.width = _this2.slider_list_width + 'px';\n                _this2.slider_list_shift = _this2.slide_width * _this2.sliders_to_scroll;\n\n                /** Коррекировка позиции слайдера  */\n                if (_this2.sliders_to_scroll != 1) {\n                    _this2.slider_list_position = _this2.scroll_sliders_count * _this2.slider_list_shift / _this2.sliders_to_scroll;\n                } else {\n                    _this2.slider_list_position = _this2.scroll_sliders_count * _this2.slider_list_shift;\n                }\n\n                if (_this2.scroll_sliders_count > 0) {\n                    _this2.slider_list.style.cssText = '-webkit-transform: translateX(-' + _this2.slider_list_position + 'px);\\n                                            -ms-transform: translateX(-' + _this2.slider_list_position + 'px);\\n                                            transform: translateX(-' + _this2.slider_list_position + 'px);\\n                                            -webkit-transition: all ' + _this2.transition + 'ms linear;\\n                                            -o-transition: all ' + _this2.transition + 'ms linear;\\n                                            transition: all ' + _this2.transition + 'ms linear;';\n                }\n\n                [].forEach.call(_this2.sliders, function (slider_el) {\n\n                    slider_el.style.width = _this2.slide_width + 'px';\n                });\n            });\n        }\n    }]);\n\n    return Slider;\n}();\n\nexports.default = Slider;\n;\n\n//# sourceURL=webpack:///./src/app/slider/slider.js?");

/***/ })

/******/ });