window.addEventListener('DOMContentLoaded', function() {

    'use strict';

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

    // Modal
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
    
    // Form
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

    //Slider
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
});