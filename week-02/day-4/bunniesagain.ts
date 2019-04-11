// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears.
// The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot.
// Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

'use strict'

function imNotCreativeEnoughForNamingThisManyFunctions(bunnies: number): number {
    if (bunnies <= 0) {
        return 0
    } else if (bunnies % 2 === 0) {
        return 3 + imNotCreativeEnoughForNamingThisManyFunctions(bunnies - 1)
    } return 2 + imNotCreativeEnoughForNamingThisManyFunctions(bunnies - 1)
};

console.log(imNotCreativeEnoughForNamingThisManyFunctions(6))

// Given a string, compute recursively (no loops) a new string 
// where all the lowercase 'x' chars have been changed to 'y' chars.
let arandomstring: string = "aaaaaaxaaaaaaaaaaxaaaaaaaaaaax";
let index:number =0;
let hapci:any="";
function givenAString(given: string): string {
    if(given.split("").indexOf("x")===-1){
        return given
    }index=given.split("").indexOf("x")
    hapci=given.split("")
    hapci.splice(index,1,"y")
    given=hapci.join("")
    return givenAString(given)
  };
//let orp=arandomstring.split("")
//  console.log(orp)
//
//  console.log(orp.splice(0,1,"y"))
//
//  console.log(orp.join(""));

console.log(givenAString(arandomstring))

function stringF(s:string):string {
    if (s.length === 1) {
        if (s === "x") {
            return "y"
        }
            return s
    }if (s[0] === "x") {
        return "y".concat(stringF(s.slice(1,s.length))) 
    }
    return s[0].concat(stringF(s.slice(1,s.length))) 
}
//console.log(stringF("x"))


// Write a function that finds the largest element of an array using recursion.

let myArray: number[] = [1, 2, 3, 4, 5, 40, 14, 13, 12, 11]

function findsLargestElement(arandomarray: number[]): number {
    if (arandomarray.length === 1) {
        return arandomarray[0]
    } else if (arandomarray[0] < arandomarray[1]) {
        arandomarray.splice(0, 1)
    } else if (arandomarray[0] > arandomarray[1]) {
        arandomarray.splice(1, 1)
    } return findsLargestElement(arandomarray)
};
console.log(findsLargestElement(myArray))

export{}