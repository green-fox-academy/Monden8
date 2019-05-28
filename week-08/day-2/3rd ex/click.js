'use strict';

const baton = document.querySelector('button');


//1st
const ts = (event) => {
    console.log(event.timeStamp);
    baton.removeEventListener('click', ts);
};
baton.addEventListener('click', ts);

//2nd
baton.onclick = (event) => {
    console.log(event.timeStamp)
    baton.onclick = () => {
    };
};