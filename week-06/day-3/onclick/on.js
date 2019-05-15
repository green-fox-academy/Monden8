'use strict';

function WhyWouldYou() {
    let div = document.querySelector('div')
    if (div.classList.contains('party')) {
        div.classList.remove('party');
    } else {
        div.classList.add('party');
    }
};