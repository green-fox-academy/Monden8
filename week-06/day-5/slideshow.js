//adding main image
let images = ['file:///home/soma/Documents/Monden8/week-06/day-5/cave.jpg', 'file:///home/soma/Documents/Monden8/week-06/day-5/abandoned.jpg', 'file:///home/soma/Documents/Monden8/week-06/day-5/fish.jpg']
let firstPic = document.querySelector('img');
firstPic.src = images[0];
let i = 0;
function lefti() {
    if (i > 0) {
        i--
        firstPic.src = images[i]
    } else {
        i = images.length - 1
        firstPic.src = images[i]
    }
};
function righti() {
    if (i < images.length - 1) {
        i++
        firstPic.src = images[i]
    } else {
        i = 0
        firstPic.src = images[i]
    }
};
// function for images // change main image i--> innertext of image.src
function change(pic) {
    firstPic.src = pic.src;
    i = images.indexOf(pic.src);
};
//adding images with foorloop // data-id=3
let lastDiv = document.querySelectorAll('div');
images.forEach(element => {
    let miniPic = document.createElement('img');
    miniPic.setAttribute('width', '10px');
    miniPic.setAttribute('height', '10px');
    miniPic.classList.add(element);
    miniPic.addEventListener("click", function (event) {
        change(miniPic)
    })
    miniPic.src = element;
    lastDiv[2].append(miniPic)
});