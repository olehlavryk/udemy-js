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
    
});