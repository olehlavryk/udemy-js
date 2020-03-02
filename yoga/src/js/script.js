window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tabs = require('./partials/tabs'),
        timer = require('./partials/timer'),
        modal = require('./partials/modal'),
        form = require('./partials/form'),
        slider = require('./partials/slider'),
        calc = require('./partials/calc');


        tabs();
        timer();
        slider();
        modal();
        form();
        calc();
});