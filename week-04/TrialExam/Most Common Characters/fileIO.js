'use strict';
const fs = require('fs');
//  Write a function that takes a filename as a parameter.
//  Return the 2 most common characters and their occurrences in the file's content.
//  
//  If the file does not exist throw an exception with the following message:
//  "File does not exist!"

let mostCommon = function (file) {
        let redFile = fs.readFileSync(file, 'utf8');
        redFile.split('')
        let aStringArray = []
        aStringArray = redFile.split('')
        let aStringObject = {}
        for (let i = 0; i < aStringArray.length; i++) {
                if (Object.keys(aStringObject).includes(aStringArray[i])) {
                        aStringObject[aStringArray[i]] += 1;
                } else { aStringObject[aStringArray[i]] = 1; }
        }
        aStringArray = Object.keys(aStringObject).map(function (key) {
                return [String(key), aStringObject[key]];
        });
        for (let i = 0; i < aStringArray.length; i++) {
                if (Object.values(aStringObject)[i] > Object.values(aStringObject)[i + 1]) {

                }
        } console.log(aStringArray)
}

console.log(mostCommon('countchar.txt'))
