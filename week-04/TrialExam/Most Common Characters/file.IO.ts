'use strict';
declare function require(fs: string): any
let fis = require('fs')

let mostCommons = function (file: string) {
    //  try {
    //      if (fis.readFileSync(file,'utf8') == undefined) {
    //          throw new Error(`There isnt such file ${file}`);
    //      }
    //  } catch (e) {
    //      console.log(`${e.message}`)
    //  }
    let redFile: string = fis.readFileSync(file, 'utf8');
    let stringArray: string[] = [];
    stringArray = redFile.split('');
    let stringObject: any = {};
    let abc: any = {};
    let hossz: number = stringArray.length;
    for (let i = 0; i < hossz; i++) {
        if (Object.keys(stringObject).includes(stringArray[i])) {
            stringObject[stringArray[i]] += 1;
        } else {
            stringObject[stringArray[i]] = 1;
        }
    };
    // for (let j: number = 1; j >= 0; j--) {
    for (let i: number = 0; i < hossz; i++) {
        if (Object.values(stringObject)[i] > Object.values(stringObject)[i + 1]) {
            if (Object.values(stringObject)[i] > Object.values(stringObject)[i + 1] < Object.values(stringObject)[i + 2]) {
                //if (j == 1) {
                console.log(`"${Object.keys(stringObject)[i]}" : ${Object.values(stringObject)[i]} `);
            };
            //} else {
            // console.log(`"${Object.keys(stringObject)[i]}" : ${Object.values(stringObject)[i]} `)
            // }
            //}
        }
    }
};
try {
    mostCommons('countchar.txt');

} catch (e) {
    console.log(`File does not exists!`);
};
/*
let toSort = [];
    for (var numbers in stringObject) {
        sortable.push([numbers, stringObject[numbers]]);
    }

    toSort.sort(function (a, b) {
        return a[1] - b[1];
    });
}
*/