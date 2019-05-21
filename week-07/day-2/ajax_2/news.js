'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api-key=tlGMs7mVwLjNJXjUwYAQsgtSrdRmcAC7");
xhr.send(null);
xhr.onload = () => {

    let mainArticle = [];
    let headArticle = [];
    let articlepic = [];
    let parsed = JSON.parse(xhr.responseText);

    console.log(parsed);


    for (let i = 0; i < 10; i++) {
        headArticle.push(parsed.response.docs[i].headline.print_headline);
        mainArticle.push(parsed.response.docs[i].headline.main);
        articlepic.push(parsed.response.docs[i].web_url);
    }
    document.body.style.width = '100vw';
    document.body.style.height = '100vh';

    let div = document.querySelector('div');
    div.style.display = 'flex';
    div.style.width = '100vw';
    div.style.height = '100vh';
    div.style.flex_directon = 'coloumn';
    div.style.flex_display = 'justify-content';
    div.style.flex_display = 'align-items';

    for (let i = 0; i < 10; i++) {
        let h1 = document.createElement('h1');
        let currentPic = document.createElement('a');
        currentPic.setAttribute('href', '');
        if (headArticle[i] == null) {
            currentPic.innerHTML = mainArticle[i];
        } else {
            currentPic.innerHTML = headArticle[i];
        }
        currentPic.href = articlepic[i];
        h1.appendChild(currentPic);
        div.appendChild(h1);
    }
};