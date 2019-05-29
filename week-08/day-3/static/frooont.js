'use strict';

let eye = document.querySelector('span');
let input = document.getElementById('passw');

let change = () => {
    console.log('yolo');

    if (eye.classList.contains("eye")) {
        eye.removeAttribute("class", "eye");
        eye.setAttribute("class", "eye-slash");
        eye.innerHTML="🕵️"
    } else {
        eye.setAttribute("class", "eye");
        eye.innerHTML="👁️"
    }
    if (eye.classList.contains("eye")) {
        input.setAttribute("type", "password");
    } else {
        input.setAttribute("type", "text");
    }
};

eye.addEventListener('click', change);