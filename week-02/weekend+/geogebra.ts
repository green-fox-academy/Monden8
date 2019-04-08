'use strict';

const star:string = "*";
const space:string = " ";
const numberoflines:number = 6;

let numberofstart:number = 1;
let numberofspaces:number = numberoflines -1;

for(let i =0; i < numberoflines ; i++){
    let lineofpyramid: string = space.repeat(numberofspaces) + star.repeat(numberofstart);
    console.log(lineofpyramid)
    numberofstart += 2;
    numberofspaces--;
}

export {};
