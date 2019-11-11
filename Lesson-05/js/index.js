'use strict';

let num = 10;

// while(num <= 20 ) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num <= 12);

for(let i = 0; i <= 10; i++) {
    if(i == 5) {
        continue;
    }

    if(i == 9) {
        break;
    }
    console.log(i);
}