'use strict'

// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

let typo:string = "ChinChill";
function appendAFunc(yolo:string){
    console.log(yolo+"a");
    return yolo= yolo+"a";
}
appendAFunc(typo)
appendAFunc("Fasz")

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let c:number =0;
function sum(given:number){
    for ( let i:number=0; i<=given; i++){
        c+=i;
    }console.log(c);
}
sum(11)