'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
console.log(quote.indexOf("It"));
let tombqoute:any=quote.split("");
console.log(tombqoute);
tombqoute.splice(20,0," always takes longer than");
console.log(tombqoute);
quote=tombqoute.join("")
console.log(quote);

quote.replace('It', 'It always takes longer than');
console.log(quote);