'use strict'
const fs = require('fs');
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
let b= "my-file.txt"
function returnnumber(c){
    try{
    let barack=fs.readFileSync(c,"utf8");
    return barack.length
}catch(e){
        return 0
}}

try{
returnnumber(b);
console.log(returnnumber(b))
}catch(e){
    console.log(returnnumber(b));
}