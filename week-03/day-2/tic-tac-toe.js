'use strict'
const fs=require('fs');
// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
let indexesOFfirstO=[];

function ticTacResult(filename){
let readfile=fs.readFileSync(filename,'utf8');
let banana=readfile.split('\n');
for(let i=0;i<banana.length;i++){
indexesOFfirstO.push((banana[i].indexOf('O')))}
console.log(indexesOFfirstO)
};

ticTacResult('win-o.txt')

/*
if(indexesOFfirstO=0,0,0)||{
console.log('O')
}if(){
console.log('X')
}if(){
console.log('Draw')
}
*/


/*
console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"
*/
