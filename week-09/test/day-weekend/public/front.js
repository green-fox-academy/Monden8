'use strict';

const XML = new XMLHttpRequest();

function getFormData() {
  return {
    url: document.querySelectorAll('input')[0].value,
    alias: document.querySelectorAll('input')[1].value,
  }
}

document.querySelector('button').addEventListener('click', (event) => {
  event.preventDefault();
  XML.open('POST', '/api/links', true);
  XML.setRequestHeader('Content-Type', 'application/json');
  XML.onload = (data) => {
    let feedback = document.querySelector('p');
    if (data.srcElement.status == 405) {
      feedback.style.color = 'red';
      feedback.innerHTML = data.srcElement.response;
    } else {
      document.querySelectorAll('input')[0].value = '';
      document.querySelectorAll('input')[1].value = '';
      feedback.style.color = 'black';
      feedback.innerHTML = data.srcElement.response;
    }
  };
  XML.send(JSON.stringify(getFormData()));
});