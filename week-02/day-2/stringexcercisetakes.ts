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

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let tombtodo:any=todoText.split("");
console.log(tombtodo);
tombtodo.splice(0,0,"My todo:\n");
tombtodo.splice((todoText.indexOf("milk")+5),0,"\n - Dowload games\n\t-Diablo")
console.log(tombtodo);
todoText=tombtodo.join("")
console.log(todoText);

