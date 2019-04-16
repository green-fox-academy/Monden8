'use strict'
const fs = require('fs')
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

let alldata = fs.readFileSync('log.txt', 'utf8')
let hagyma = [];
let alma = [];

function returnsArray(bigstring) {
    let barack = bigstring.split('\n')
    for (let i = 0; i < barack.length; i++) {
        hagyma.push(barack[i].slice(27, 38))
    }
    let unique = new Set(hagyma);
    var myArr = Array.from(unique);
    console.log(myArr)
};
//returnsArray(alldata);

function GETPOST(bigstring) {
    let barack = bigstring.split('\n')

    for (let i = 0; i < barack.length; i++) {
        hagyma.push(barack[i].slice(41, 45))
    }

    for (var i = 0; i < 500 ; i++) {
        if (hagyma[i] === 'POST') {
            alma.push(hagyma.splice(i, 1));
            i--
        } else if (hagyma.indexOf('POST')===-1){
            i=500
        }
    }
    let POST=alma.length
    console.log(`${500-alma.length} elements contain GET while ${POST} contain POST`)
};
GETPOST(alldata)