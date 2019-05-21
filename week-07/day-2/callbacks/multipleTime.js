'use strict';

// Write a program that prints the following fruits:
const fruit = ['apple', 'pear', 'melon', 'grapes'];
function alma(array,l) {
    console.log(array[l]);
}
function Printin(array) {
    let l = 0;
    let timer = 1000;
    for (let i = 0; i < array.length; i++) {
        setTimeout(alma(array,l), timer);
        l++;
        timer

    }
}
Printin(fruit)
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds