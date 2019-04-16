'use strict'
const fs = require('fs');
// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

let b=("my-file.txt");
 function opens(a){
    try{
    let barack=fs.appendFileSync(a,'Soma Feigl\n')
    return barack
    }catch(e){
        throw new Error(`Unable to write file: ${err.path}`)
    }
}
try{
opens(b);
}catch(e){
console.log(e.message);
};