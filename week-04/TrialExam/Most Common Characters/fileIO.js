'use strict';
const fs = require('fs');
//  Write a function that takes a filename as a parameter.
//  Return the 2 most common characters and their occurrences in the file's content.
//  
//  If the file does not exist throw an exception with the following message:
//  "File does not exist!"

let mostCommon = function (file) {

        let redFile = fs.readFileSync(file, 'utf8');
        let aStringArray = [];
        aStringArray = redFile.split('');

        let aStringArrayLength = aStringArray.length;
        let aStringObject = {};

        for (let i = 0; i < aStringArray.length; i++) {
                if (Object.keys(aStringObject).includes(aStringArray[i])) {
                        aStringObject[aStringArray[i]] += 1;
                } else { aStringObject[aStringArray[i]] = 1; }
        }

        aStringArray = Object.keys(aStringObject).map(function (key) {
                return [String(key), aStringObject[key]];
        });
        for (let i = 0; i < aStringArrayLength; i++) {
                if (aStringArray[i][1] > aStringArray[i + 1][1]) {
                        aStringArray.splice(i+1, 1)
                        i--
                        if (aStringArray.length == 1) {
                                return aStringArray
                        }
                } else {
                        aStringArray.splice(i, 1)
                        i--
                        if (aStringArray.length == 1) {
                                return aStringArray
                        }
                }
        }
}

console.log(mostCommon('countchar.txt'))
/*
[ 'T', 1 ],
[ 'r', 1 ],
[ 'i', 3 ],
[ 'a', 3 ],
[ 'l', 4 ],
[ '-', 1 ],
[ 'e', 6 ],
[ 'x', 1 ],
[ 'm', 2 ],
[ ' ', 3 ],
[ 's', 1 ],
[ 'f', 1 ],
[ 'u', 1 ],
[ 'n', 1 ],
[ '.', 3 ],
[ '\n', 2 ],
[ 'R', 1 ],
[ 'y', 1 ],
[ 'B', 1 ],
[ 'v', 1 ]
*/
