'use strict';


let anyád = {
    owner: "Soma",
    content: "LOREM IPSUUUUUUUUUM",
    score: 32523
}
let apád = {
    owner: "Bence",
    content: "LOREM IPSUUUUUUUUUM",
    score: 325231
}
let kiskutyád = {
    owner: "Zsófi",
    content: "LOREM IPSUUUUAAAUUM",
    score: 3252332
}
let kismacskád = {
    owner: "Botond",
    content: "LOREM IPSUUUasdasdUUUM",
    score: 3252344
}

let posts = [anyád, apád, kismacskád, kiskutyád];


let container;
let owner;
let content;
let score;
for (let i = 0; i < posts.length; i++) {
    container = document.createElement('article');
    owner = document.createElement('h2');
    content = document.createElement('p');
    score = document.createElement('h5');
    owner.innerHTML = posts[i].owner;
    content.innerHTML = posts[i].content;
    score.innerHTML = posts[i].score;
    let contain = [owner, content, score];
    for (let j = 0; j < contain.length;j++) {
        container.appendChild(contain[j]);
   }
    document.querySelectorAll('div')[1].appendChild(container);
}