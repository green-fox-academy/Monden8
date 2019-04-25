'use strict';
//   Write a function, that takes a string as an argument and returns a dictionary with all letters in
//   the string as keys, and numbers as values that shows how many occurrences there are.
//   Create a test for that.

let countLetter = function (aString: string): object {
    let aStringArray: string[] = []
    aStringArray = aString.split('')
    let aStringObject: any = {}
    for (let i: number = 0; i < aStringArray.length; i++) {
        if (Object.keys(aStringObject).includes(aStringArray[i])) {
            aStringObject[aStringArray[i]] += 1;
        }else {aStringObject[aStringArray[i]] = 1;}
    }
    return aStringObject
}
console.log(countLetter('Haaarminccckettesek terrree'))
export{countLetter}