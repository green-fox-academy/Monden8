'use strict'
const fs=require('fs')
// Create a method that decrypts reversed-lines.txt

let idared=[];
function upsidedown(file){
let barack=fs.readFileSync(file,'utf8');
let alma=barack.split("\n");

for(let i=0;i<alma.length;i++){
idared.push(alma[i].split('').reverse().join(''))
}
console.log(idared.join('\n'))
}
upsidedown('decrypt2.txt')
