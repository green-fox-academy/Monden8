'use strict';

/*
const gfa = document.createElement('li');
gfa.appendChild(document.createTextNode('The Green Fox'));
const ul = document.getElementsByClassName("asteroids");
ul[0].appendChild(gfa);

const li = document.createElement('li');
li.appendChild(document.createTextNode('The Lamplighter'));
ul[0].appendChild(li);

const hihi = document.createElement('h1');
hihi.appendChild(document.createTextNode('I can add elements to the DOM!'));
const lul = document.getElementsByClassName("container");
lul[0].appendChild(hihi);

const pic = document.createElement('img');
lul[0].appendChild(pic);
document.querySelectorAll('img')[0].src = "https://static.wixstatic.com/media/f4461b_83457ca5dd844c71a760d36e6583d0ff.png/v1/fill/w_168,h_168,al_c,usm_0.66_1.00_0.01/f4461b_83457ca5dd844c71a760d36e6583d0ff.png";
*/



let atrilist = ['li', 'li', 'h1', 'img'];
let taglist = ['asteroids', 'asteroids', 'container', 'container'];
let list = ['The Green Fox', 'The Lamplighter', 'I can add elements to the DOM!', "https://static.wixstatic.com/media/f4461b_83457ca5dd844c71a760d36e6583d0ff.png/v1/fill/w_168,h_168,al_c,usm_0.66_1.00_0.01/f4461b_83457ca5dd844c71a760d36e6583d0ff.png"];
for (let j = 0; j < taglist.length; j++) {
    if (j < 2) {
        document.getElementsByClassName(taglist[j])[0].appendChild(document.createElement(atrilist[j]));
        document.querySelectorAll(atrilist[j])[2 + j].innerText = list[j];
    }
    else if (j === 2) {
        document.getElementsByClassName(taglist[j])[0].appendChild(document.createElement(atrilist[j]));
        document.querySelectorAll(atrilist[j])[0].innerText = list[j];
    }
    else if (j === 3) {
        document.getElementsByClassName(taglist[j])[0].appendChild(document.createElement(atrilist[j]));
        document.querySelectorAll(atrilist[j])[0].src = list[j];
    }
};