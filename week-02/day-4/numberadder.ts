'use strict'

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function arecursion(n: number): number {
    if (n <= 0){
    return 0
}return n+arecursion(n-1)
};

console.log(arecursion(6))

//  Given a non-negative int n, return the sum of its digits recursively (no loops). 
//  Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6)
//levágok, while divide (/) 
//  by 10 removes the rightmost digit (126 / 10 is 12).

function sumdigit(num:number):number{
    if (num<1){
        return 0
        }return num%10+Math.floor(sumdigit(num/10))
};
console.log(sumdigit(126))


//Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power,
// so powerN(3, 2) is 9 (3 squared).

function squared(base:number,power:number):number{
    if (base<=0||power<=0){
    return 0;
    }return base**power;
};

console.log(squared(3,6))

//

function squaredrecurs(base:number,power:number):number{
    if (power==0){
    return 1;
    }return base*squaredrecurs(base,power-1);
};

console.log(squaredrecurs(3,3))

//

//Find the greatest common divisor of two numbers using recursion.
let gcd=0;
function divisor(num1:number,num2:number):number{
if (num1%num2===0){
    return gcd
}return gcd=num1/divisor(num1,num2-1)
};

console.log(divisor(8,12)) //4





