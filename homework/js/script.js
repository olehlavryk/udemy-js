// get menu items html collection
let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item');
    
// insert second element after first
menuItems['0'].after(menuItems['2']);

// create new one
let newElement = document.createElement('li');
newElement.classList.add("menu-item");
newElement.innerText = 'Пятий пункт';

menu.append(newElement);

// remove ads
document.querySelector('.adv').remove();

// change title
document.querySelector('.title').innerHTML = "Мы продаем только подлинную технику Apple";

// prompt 
let question = prompt('What is your attitude to Apple products?', '');
document.querySelector('.prompt').innerHTML = question;


console.log(menuItems);