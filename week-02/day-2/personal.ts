'use strict'

//   We are going to represent our expenses in a list containing integers.
 let expenses:any[]=[];
//   Create a list with the following items.
expenses.push(500, 1000, 1250, 175, 800, 120);
//   500, 1000, 1250, 175, 800 and 120
//   Create an application which solves the following problems.
//   How much did we spend?
let suuum:any=0;
for(let i:any=0;i<expenses.length;i++){
    suuum+=expenses[i];
    console.log(suuum);
};
//   Which was our greatest expense?

//   Which was our cheapest spending?
//   What was the average amount of our spendings?