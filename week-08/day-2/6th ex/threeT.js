'use strict';

let counter = 0;
let butt = document.querySelector('button');

document.querySelector('div').innerHTML = "patience is key";

let disabling = () => {
    butt.disabled = true;
};
butt.addEventListener('click', disabling);

setTimeout(() => {
    butt.removeEventListener('click', disabling);
    butt.addEventListener('click', () => {
        counter++;
        if (counter == 3) {
            document.querySelector('div').innerHTML = "clicked 3 time after 5 sec";
        }
    })
}, 5000);