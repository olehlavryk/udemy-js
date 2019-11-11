'use strict';

let num = 50;

if(num < 50) {
    console.log('Less');
} else if(num > 50) {
    console.log('More');
} else {
    console.log('Equal!');
}

num == 50 ? console.log('Equal!') : console.log('Not equal!'); 

switch(num) {
    case 45:
        console.log('Less');
        break;
    case 55:
        console.log('More');
        break;
    case 50:
        console.log('Equal');
        break;
    default:
        console.log('An other value');
}
   
