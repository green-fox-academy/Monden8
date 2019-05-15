'use strict';

const king = document.getElementById('b325');
console.log(king.innerText);
const manLighter = document.querySelectorAll('.big');
console.log(manLighter[0].innerText);
console.log(manLighter[1].innerText);
const conceitedKing = document.querySelector('section').querySelectorAll('div');
window.alert(conceitedKing[0].innerText);
window.alert(conceitedKing[1].innerText);
const noBusiness = document.querySelectorAll('div')
for(let i =0 ; i<2 ;i++){
console.log(noBusiness[i].innerText);
};
document.querySelector('body').setAttribute('style','opacity:0')