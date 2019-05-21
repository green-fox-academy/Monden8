'use strict';

// Write a program that prints the following fruits:
const fruit = ['apple', 'pear', 'melon', 'grapes'];
let timer = [0,1000,3000,5000]

for (let i = 0; i < fruit.length; i++) {
        setTimeout(() => {
            console.log(fruit[i]);
        }, timer[i]);
};

// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds