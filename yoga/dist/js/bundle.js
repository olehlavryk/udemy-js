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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/partials/calc.js":
/*!*********************************!*\
  !*** ./src/js/partials/calc.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    // Calc
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function(){
        if(this.value == '') {
            totalValue.innerHTML = 0;
        } else {
            personsSum = +this.value;
            total = (daysSum + personsSum) * 4000;

            if(restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }
        
    });

    restDays.addEventListener('change', function(){

        if(this.value == '') {
            totalValue.innerHTML = 0;
        } else {
            restDays = +this.value;
            total = (daysSum + personsSum) * 4000;
    
            if(persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }
        
    });

    place.addEventListener('change', function(){
        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;

/***/ }),

/***/ "./src/js/partials/form.js":
/*!*********************************!*\
  !*** ./src/js/partials/form.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Form
function form() {
    
    let message = {
        loading: "Loading ...",
        success: "Thanks! Soon we call to you.",
        faillure: "Error, something wrong ..."
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        form.appendChild(statusMessage);

        function postData(data) {

            return new Promise(function(resolve, reject){
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
               
                request.addEventListener('readystatechange', function(){
                    if(request.readyState < 4) {
                        resolve();
                        
                    } else if(request.readyState === 4 && request.status == 200) {
                        resolve();
                        
                    } else {
                        reject();
                        
                    }
                });

                request.send(data);
            });

            
        }

        function clearInputs() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        let formData = new FormData(form);
        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        postData(json)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.faillure)
            .then(() => clearInputs());
    });
}

module.exports = form;

/***/ }),

/***/ "./src/js/partials/modal.js":
/*!**********************************!*\
  !*** ./src/js/partials/modal.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Modal
function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function showModal(startHandler, overlay, closeHadndler) {
        // show overlay
        startHandler.addEventListener('click', function() {        
            overlay.style.display = 'block';
            this.classList.add('more-splash');

            // deny body allow scroll
            document.body.style.overflow = 'hidden';
        });

        // close overlay
        closeHadndler.addEventListener('click', function() {
            overlay.style.display = 'none';
            startHandler.classList.remove('more-splash');

            // allow body scroll 
            document.body.style.overflow = '';
        });
    }

    // init popup for .more
    showModal(more, overlay, close);

    let descriptionBtns = document.querySelectorAll('.description-btn');

    descriptionBtns.forEach(function(el) {
        showModal(el, overlay, close);
    });
}

module.exports = modal;



/***/ }),

/***/ "./src/js/partials/slider.js":
/*!***********************************!*\
  !*** ./src/js/partials/slider.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Slider
function slider() {
    
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if(n > slides.length) {
            slideIndex = 1;
        }

        if(n < 1) {
            slideIndex = slides.length;
        }

        // hide all slides
        slides.forEach((item) => item.style.display = 'none');

        // remove all active class from dots
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';

        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
        for(let i = 0; i < dots.length + 1; i++) {
            if(event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/partials/tabs.js":
/*!*********************************!*\
  !*** ./src/js/partials/tabs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Tabs
function tabs() {

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    hideTabContent(1);

    info.addEventListener('click', function(event) {
        let target = event.target;

        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    
                      // hide all tab content
                    hideTabContent(0);

                    // show current tab content
                    showTabContent(i);

                    break;
                }
            }
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/partials/timer.js":
/*!**********************************!*\
  !*** ./src/js/partials/timer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    // Timer
    let deadline = '2020-01-30';

    function getTimerRamaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
        
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours   = Math.floor((t / (1000 * 60 * 60)));

        // days if you need
        //let days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total'   : t,
            'hours'   : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimerRamaining(endTime);
            hours.textContent   = t.hours < 10 ? '0' + t.hours: t.hours;
            minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
            seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent   = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tabs = __webpack_require__(/*! ./partials/tabs */ "./src/js/partials/tabs.js"),
        timer = __webpack_require__(/*! ./partials/timer */ "./src/js/partials/timer.js"),
        modal = __webpack_require__(/*! ./partials/modal */ "./src/js/partials/modal.js"),
        form = __webpack_require__(/*! ./partials/form */ "./src/js/partials/form.js"),
        slider = __webpack_require__(/*! ./partials/slider */ "./src/js/partials/slider.js"),
        calc = __webpack_require__(/*! ./partials/calc */ "./src/js/partials/calc.js");


        tabs();
        timer();
        slider();
        modal();
        form();
        calc();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map