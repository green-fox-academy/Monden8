'use strict';

document.body.addEventListener('keyup', (event) => {
    console.log(event);
    document.querySelector('h1').innerHTML = "Last pressed key code is: " + event.key;
});