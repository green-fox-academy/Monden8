'use strict';

let body = document.querySelector('.hapci');

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
    body.appendChild(div);
};

body.addEventListener('scroll', (event) => {
    console.log('hapci');
    const { scroolHeight, scroolTop, clientHeight } = event.element;
    if (scroolHeight - scroolTop < clientHeight) {
        for (let i = 0; i < 10; i++) {
            let div = document.createElement('div');
            div.style.backgroundColor = random_bg_color();
            body.appendChild(div);
        };
    };
});