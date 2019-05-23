'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/allBooks');
xhr.send(null);
xhr.onload = (Data) => {
    console.log(Data);
    
    let books = [];
    let parsed = JSON.parse(xhr.responseText);
    //let parsed = JSON.parse(Data.srcElement.responseText);
    for (let i = 0; i < parsed.length; i++) {
        books.push(parsed[i].book_name);
    }
    let div = document.querySelector('div');

    for (let i = 0; i < parsed.length; i++) {
        let currentBook = document.createElement('p');
        currentBook.innerHTML = books[i];
        div.appendChild(currentBook);
    }
};