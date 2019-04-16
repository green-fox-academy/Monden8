'use strict';
const fs=require('fs');
// Create a method that decrypts reversed-order.txt

let idared=[];
function upsidedown(file){
let barack=fs.readFileSync(file,'utf8');
let alma=barack.split("\n");

for(let i=0;i<alma.length;i++){
idared.push(alma[i].split().reverse().join())
}
console.log(idared.reverse().join('\n'))
}
upsidedown('decrypt3.txt')