//adding main image
let images = ['./cave.jpg', './abandoned.jpg', './fish.jpg']
let firstPic = document.querySelector('img');
firstPic.src = images[0];
let i=0;
function lefti(){
    if(i>0){
    firstPic.src=images[i-1]
    i--
    }return i
};
function righti(){
    if(i<2){
    firstPic.src=images[i+1]
    i++
    }
    return i
};  
// function for button left  //if button innexrtext--< i-1
// function for button right //if button innexrtext--> i+1
//adding images with foorloop // data-id=6

/*
for (let i = 0; i < kids.length; i++) {
    let list = document.createElement('article');
    let h3owner = document.createElement('h3');
    let ppetname = document.createElement('p');
    let petName = (kids[i].petName);
    let owner = (kids[i].owner)
    h3owner.appendChild(document.createTextNode(owner));
    ppetname.appendChild(document.createTextNode(petName));
    list.appendChild(h3owner);
    list.appendChild(ppetname);
    document.querySelector('div').appendChild(list);};
*/

// function for images // change main image i--> innertext of image.src