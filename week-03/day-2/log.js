'use strict'
const fs = require('fs')
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

let alldata = fs.readFileSync('log.txt', 'utf8')
let hagyma = [];

function returnsArray(bigstring) {
    let barack = bigstring.split('\n')
    for (let i = 0; i < barack.length; i++) {
        hagyma.push(barack[i].slice(27, 38))
    }
    let unique = new Set(hagyma);
    var myArr = Array.from(unique);
    console.log(myArr)
};
returnsArray(alldata);




/*removeDups(hagyma)

function removeDups(names) {
    let unique = [];
    names.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    })
    console.log(unique)






    const result = (hagyma) => hagyma.filter((v,i) =>hagyma.indexOf(v)===i)
    words.filter(word => word.length > 6);

*/