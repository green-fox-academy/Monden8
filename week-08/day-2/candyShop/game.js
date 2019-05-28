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

let basic = setInterval(() => {
    let candies = parseInt(document.querySelector('.candies').innerHTML);
    candies += i
    document.querySelector('.candies').innerHTML = candies;
}, 1000)


document.querySelector('.candy-machine').addEventListener('click', () => {
    document.querySelector('.candy-machine').disabled = true;
    let j = i * 10
    document.querySelector('.speed').innerHTML = j

    let interval = setInterval(() => {
        let candies = parseInt(document.querySelector('.candies').innerHTML);
        candies += i
        document.querySelector('.candies').innerHTML = candies;
    }, 100)

    //clearInterval(basic);
    setTimeout(() => {
        document.querySelector('.candy-machine').disabled = false;
        document.querySelector('.speed').innerHTML = i
        clearInterval(interval);
    }, 3000)
});