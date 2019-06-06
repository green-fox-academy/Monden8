'use strict';

const XML = new XMLHttpRequest();
XML.open('GET', '/game', true);
XML.setRequestHeader('Content-Type', 'application/json');
XML.onload = (data) => {
    let tada=JSON.parse(data.target.response)
 document.querySelector(".question").innerHTML=tada.question; 
 document.querySelector(".one").innerHTML=tada.one;
 document.querySelector(".two").innerHTML=tada.two;
 document.querySelector(".three").innerHTML=tada.three;
 document.querySelector(".four").innerHTML=tada.four;
}
XML.send();