'use strict';

//       Here is an image inspector, but the buttons are not implemented yet, that will
//       be your task!
//        - the nav buttons (up, down, left, right) move the background by 10px
//        - the zoom buttons increase/decrease the image by 20%
//        - attach only two event listeners to the nav element
//          - one for navigation
//          - one for zooming

//const movers = document.querySelectorAll("[data-action='move']");//[4]
//const zoommers = document.querySelectorAll("[data-action='zoom']");//[2]


//MAGIC NUUUMBEEEER
let size = 200;

let zoom = (inORout) => {
    if (inORout === "in") {
        size += 20;
    } else {
        if (size == 20) {
            console.log('dont do it man ');
        } else {
            size -= 20;
        }
    }
    document.querySelector('.img-inspector').style.backgroundSize = `${size}%`;
};

let positionLR = 0;
let positionUD = 0;
let move = (fourdimension) => {
    if (fourdimension === "up" || fourdimension === "down") {
        if (fourdimension === "up") {
            positionUD += 10;
        } else {
            positionUD -= 10;
        }
        document.querySelector('.img-inspector').style.backgroundPositionY = `${positionUD}px`;
    } else if (fourdimension === "left" || fourdimension === "right") {
        if (fourdimension === "right") {
            positionLR -= 10;
        } else {
            positionLR += 10;
        }
        document.querySelector('.img-inspector').style.backgroundPositionX = `${positionLR}px`;
    }
};



const nav = document.querySelector('nav');
nav.addEventListener('click', () => {
    const { direction, action } = event.target.dataset
    if (action == "move") {
        move(direction)
    }
});
nav.addEventListener('click', (event) => {
    const { direction, action } = event.target.dataset
    if (action == "zoom") {
        zoom(direction)
    }
});