'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/allInfo');
xhr.send(null);
xhr.onload = (Data) => {
    console.log(Data);

    let tableheaders = ['Title', 'Author', 'Category', 'Publisher', 'Price'];
    let books = [];
    let author = [];
    let parsed = JSON.parse(xhr.responseText);
    // //let parsed = JSON.parse(Data.srcElement.responseText);
    let table = document.querySelector('table');
    let tableHR = document.createElement('tr');
    for (let i = 0; i < tableheaders.length; i++) {
        let tableHeader = document.createElement('th');
        tableHeader.innerHTML = tableheaders[i]
        tableHR.appendChild(tableHeader)
    };

    let keys = ['book_name','aut_name'];
    let variable = [];
        
    for (let j = 0; j < keys.length; j++) {
       for (let i = 0; i < parsed.length; i++) {
           variable.push(parsed[i][keys[j]]);
           let tableRow = document.createElement('tr');
           let currentdata = document.createElement('td');
           currentdata.innerHTML = variable[i];
           tableRow.appendChild(currentdata);
           table.appendChild(tableRow);
       }variable=[];
    };
};

// List the following data:

// category
// name of publisher
// price
// Return an HTML file with a <table> that contains these information