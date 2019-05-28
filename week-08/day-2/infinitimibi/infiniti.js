'use strict';

let firstDiv = document.querySelector('.kismacska');

let random_bg_color = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
};

for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = random_bg_color();
    firstDiv.appendChild(div);
};


window.addEventListener('scroll', () => {
    let body = document.querySelector('.kismacska')
    const { scrollHeight, scrollTop, clientHeight } = body;

    if (scrollTop+clientHeight>=scrollHeight) {
        for (let i = 0; i < 10; i++) {
            let div = document.createElement('div');
            div.style.backgroundColor = random_bg_color();
            body.appendChild(div);
        };
    };
});