'use strict';

let box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    spans = document.getElementsByClassName('inline-box'),
    selectorOne = document.querySelector('.box'),
    selectors = document.querySelectorAll('button');

console.log(box);
console.log(buttons);
console.log(spans);
console.log(selectorOne);
console.log(selectors);

selectors.forEach(element => console.log(element));