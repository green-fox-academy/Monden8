// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=trending&api_key=SfQrNulcOykTmtxwa5b70YSpBJxW95yC&limit=5");
// xhr.done(function (data) { console.log("success got data", data); });
'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=trending&api_key=SfQrNulcOykTmtxwa5b70YSpBJxW95yC&limit=16');
xhr.send(null);
xhr.onload = () => {

    let giphyURL = [];
    let stillURL = [];

    let parsed = JSON.parse(xhr.responseText);
    for (let i = 0; i < 16; i++) {
        stillURL.push(parsed.data[i].images.downsized_large.url);
        giphyURL.push(parsed.data[i].images.original_still.url);
    }
    let div = document.querySelector('div');
    let change = function (pic) {
        if (pic.src == stillURL[pic.id]) {
            pic.src = giphyURL[pic.id]
        } else {
        pic.src = stillURL[pic.id]
        }
    }
    for (let i = 0; i < 15; i++) {
        let currentPic = document.createElement('img');
        currentPic.setAttribute('width', '482px');
        currentPic.setAttribute('height', '482px');
        currentPic.setAttribute('src', '');
        currentPic.id = i;
        currentPic.src = giphyURL[i];
        currentPic.addEventListener("click", function (event) {
            change(currentPic)
        });
        div.appendChild(currentPic);
    }
};
