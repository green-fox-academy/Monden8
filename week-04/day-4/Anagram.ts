//   Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
//   Create a test for that.

let Anagramma = function (stringby: string, stringy: string): boolean {
    let array1: string[] = [];
    let array2: string[] = [];
    array1 = stringby.toLowerCase().split('');
    array2 = stringy.toLowerCase().split('');
    array1.sort();
    array2.sort();
    if (array1.length == array2.length) {
        for (let i: number = 0; i < array1.length; i++) {
            if (array1[i] === array2[i]){
                if(i==array1.length-1&&array1[i] === array2[i]){
                    return true
                }
            }
        } return false
    } return false
};
export{Anagramma}