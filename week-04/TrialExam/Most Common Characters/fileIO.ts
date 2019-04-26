'use strict';
declare function require(fs: string): any
let fs = require('fs')
//  Write a function that takes a filename as a parameter.
//  Return the 2 most common characters and their occurrences in the file's content.
//  
//  If the file does not exist throw an exception with the following message:
//  "File does not exist!"

let mostCommon = function (file: string) {

        let redFile: string = fs.readFileSync(file, 'utf8');
        let aStringArray: string[] = [];
        aStringArray = redFile.split('');

        let aStringArrayLength: number = aStringArray.length;
        let aStringObject: any = {};

        let shArray: any;
        let shArryay2: any;
        let shArray3: any = Object.keys(aStringObject).map(function (key) {
                return [String(key), aStringObject[key]]
        });

        shArray = shArray3;
        for (let i = 0; i < aStringArray.length; i++) {
                if (Object.keys(aStringObject).includes(aStringArray[i])) {
                        aStringObject[aStringArray[i]] += 1;
                } else { aStringObject[aStringArray[i]] = 1; }
        }

        for (let i = 0; i < aStringArrayLength; i++) {
                if (shArray[i][1] > shArray[i + 1][1]) {
                        shArray.splice(i + 1, 1)
                        i--
                        if (shArray.length == 1) {
                                return shArray
                        }
                } else {
                        shArray.splice(i, 1)
                        i--
                        if (shArray.length == 1) {
                                return shArray
                        }
                }
        }
        shArryay2 = shArryay2;
        shArryay2 = shArryay2.splice()
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
