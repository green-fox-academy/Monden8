'use strict';

document.querySelector('button').addEventListener('click', () => {
    setTimeout(() => {
        let text = document.createElement('p');
        text.innerHTML = "a text under the button";
        document.querySelector('div').appendChild(text);
    }, 2000)
    //document.querySelector('button').remo
});