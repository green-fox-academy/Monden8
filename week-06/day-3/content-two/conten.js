'use script';
/*
  1) replace the list items' content with items from this list:
  ['apple', 'banana', 'cat', 'dog']
  2) change the <ul> element's background color to 'limegreen'
    - use css class to change the color instead of the style property
*/
const list = document.querySelector('ul').setAttribute('style','list-style-type:none');
const taskList = ['apple', 'banana', 'cat', 'dog'];
const placeHolders = document.querySelectorAll('li');
for (let i = 0; i < taskList.length; i++) {
    placeHolders[i].innerText=taskList[i];
    //placeHolders[i].classList.add('nincs')
    placeHolders[i].style.backgroundColor='limegreen';
};