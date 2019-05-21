'use strict';

const mapWith = (input, callback) => {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        output.push(callback(input[i]));
    };
    return output;
};

const addOne = (number) => {
    return number + 1;
};
// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));

// Exercise 2:
const words = ['map', 'reduce', 'filter'];

let removesecondLetter = (data) => {
    let counter = data.length;
    let comeback=[];
    for (let i = 0; i < counter; i+=2) {
        comeback.push(data.split('').splice(i, 1));  
    };
    return comeback.join('');
};

console.log(mapWith(words, removesecondLetter));

// expected result: ['mp','rdc', 'fle']