'use strict';
const fs= require('fs');
// Create a method that decrypts duplicated-chars.txt
let idared=[];
function duplicated(file){
let barack=fs.readFileSync(file,'utf8');
let alma=barack.split("");
for(let i=0;i<alma.length;i++)
idared.push(alma.splice(i,1))
console.log(idared.join(""))
}
duplicated('decrypt.txt')



