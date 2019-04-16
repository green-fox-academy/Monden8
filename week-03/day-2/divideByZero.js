'use strict'
const fs = require('fs');
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let a=0
try{
    if (a==0){throw new Error('fail')}
    console.log(a/10)
}catch(err){
    console.log(err.message)
}

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"
let b=("my-file.txt");
 function opens(a){
    let barack=fs.readFileSync(a,"utf8");
    console.log(barack);
}
try{
opens(b);
}catch(err){
console.log(`Unable to read file: ${err.path}`);
};