'use strict'

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function arecursion(n: number): number {
    if (n <= 0){
    return 0
}return n+arecursion(n-1)
};

console.log(arecursion(6))

//  Given a non-negative int n, return the sum of its digits recursively (no loops). 
//  Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) 
//  by 10 removes the rightmost digit (126 / 10 is 12).

function sumdigit(num:number):number{
    let object ={num}
    if (n <=0){
        return 0
    }return 
};