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

    // -  Create a function called `factorio`
//    that returns it's input's factorial
let b:number =1;
function factorio(num:number){
    for ( let i:number=1;i<=num; i++){
        b = b*i
    }console.log(b)
}
factorio(3)

    // -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
let d=[12,43,23,12,45];
function printParams(d){
    d.forEach(element => {console.log(element)
})}
printParams(d)

function printParamss():void{
    for ( let i:number=1;i<=printParams.length; i++){
        console.log(printParamss)
    }
}       
function countPrintParams():void{
    
}

function idk(...argument:number[]):void{
argument.forEach(element => {console.log(element)
});
}

idk(234,234,234456,46,)