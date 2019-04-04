let a:number = 25;
let b:number = 30;
let c:number = 35;

let ac:number = a*c;
let bc:number = b*c;
let ab:number = a*b;

let A:number = 2*ac + 2*ab + 2* bc;
console.log("A : " + A);

let V:number = a*b*c;
console.log("V : " + V)

let currentHours:number = 14;
let currentMinutes:number = 34;
let currentSeconds:number = 42;

let q: number = 24 - currentHours;
let w: number = 60 - currentMinutes;
let e: number = 60 - currentSeconds;
console.log("Hours left from the day : " + q + 
"\nMinutes left from the day : " + w +
"\nSeconds left from the day : " + e );