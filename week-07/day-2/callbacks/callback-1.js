'use strict';

const mapWith = (input, callback) => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
     output[i]=callback(input[i]);
  };
  return output;
};

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

//console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']