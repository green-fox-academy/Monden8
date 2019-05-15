'use strict';
/*
      If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
      If the first p has an 'apple' class, replace cat's content with 'dog'
      Make apple red by adding a .red class
      Make balloon less balloon-like (change its shape)
*/
if(document.querySelectorAll('p')[3].classList.contains('dolphin')){
    document.getElementsByClassName('apple')[0].innerText='pear';
};
if(document.querySelectorAll('p')[0].classList.contains('apple')){
    document.getElementsByClassName('cat')[0].innerText='dog';
};
document.getElementsByClassName('apple')[0].classList.add('red');
document.getElementsByClassName('balloon')[0].style.borderRadius='0%';