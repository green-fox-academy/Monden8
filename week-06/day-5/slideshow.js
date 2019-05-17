//adding main image
let images = ['/cave.jpg', '/abandoned.jpg', '/fish.jpg']
let firstPic = document.querySelector('img');
let currentMap ='file:///home/soma/Documents/Monden8/week-06/day-5';
firstPic.src = currentMap + images[0];
let i = 0;
function lefti() {
    if (i > 0) {
        i--
        firstPic.src = currentMap + images[i]
    } else {
        i = images.length - 1
        firstPic.src = currentMap + images[i]
    }
};
function righti() {
    if (i < images.length - 1) {
        i++
        firstPic.src = currentMap + images[i]
    } else {
        i = 0
        firstPic.src = currentMap + images[i]
    }
};
// function for images // change main image i--> innertext of image.src
function change(pic) {
    firstPic.src = pic.src;
    i = images.indexOf(pic.classList[0]);
};
//adding images with foorloop
let lastDiv = document.querySelectorAll('div');
images.forEach(element => {
    let miniPic = document.createElement('img');
    miniPic.setAttribute('width', '10px');
    miniPic.setAttribute('height', '10px');
    miniPic.classList.add(element);
    miniPic.src = currentMap + element;
    miniPic.addEventListener("click", function (event) {
        change(miniPic)
    })
    lastDiv[2].append(miniPic)
});