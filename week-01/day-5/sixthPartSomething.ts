'use strict'
let a: number = undefined;

for (a = 0; a < 2; a++) {
    console.log("I won't cheat on Exams!");
}

for (let b: number = 0; b <= 10; b++) {
    if (b % 2 === 0) {
        console.log(b);
    }
}

let number: number = 15;
for (let start: number = 1; start <= 10; start++) {
    let c: number = (start * number);
    console.log(`${start} * ${number}
     = ${c}`);
    // console.log(start + "*" +number + "=" + c);
}
let e: number = 5;
let r: number = 0;
let s: number = undefined
for (let d: number = 1; d <= e; d++) {
    (r += d);
    (s = r / d);
}
console.log(`Sum:${r}
Average:${s}`)

for (let ab: number = 1; ab <= 100; ab++) {
    if (ab%3===0 && ab%5===0){
        console.log("Fizz");
    } else if (ab % 5 === 0) {
        console.log("Buzz");
    } else if (ab%3===0){
    console.log("Fizz-Buzz");
    } else {console.log(ab)
    }}