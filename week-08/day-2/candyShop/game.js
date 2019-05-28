'use strict';

let i = 0;

let creatCandie = document.querySelector('.create-candies');

creatCandie.addEventListener('click', () => {
    let candies = parseInt(document.querySelector('.candies').innerHTML);
    candies++
    document.querySelector('.candies').innerHTML = candies;
})

let buyLollipooop = document.querySelector('.buy-lollypops');
buyLollipooop.addEventListener('click', () => {
    if (parseInt(document.querySelector('.candies').innerHTML) >= 100) {
        let candies = parseInt(document.querySelector('.candies').innerHTML);
        candies -= 100
        document.querySelector('.candies').innerHTML = candies;
        document.querySelector('.lollypops').innerHTML += '🍭';
        i = Math.floor(document.querySelector('.lollypops').innerHTML.length / 20);
        document.querySelector('.speed').innerHTML = i
    }
});

setInterval(() => {
    let candies = parseInt(document.querySelector('.candies').innerHTML);
    candies += i
    document.querySelector('.candies').innerHTML = candies;
}, 1000)

// If you press the "make candy rain" button, the candy generation should speed up 10x

document.querySelector('.candy-machine').addEventListener('click', () => {
    let j = i * 10
    document.querySelector('.speed').innerHTML = j
    setTimeout(()=>{
    document.querySelector('.speed').innerHTML = i
    },3000)
});