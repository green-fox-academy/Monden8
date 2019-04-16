'use strict'
const fs = require('fs');
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
let newfile='new-file.txt';
let oldfile='old-file.txt';
function copyfunction(from,to){
    try{
        let barack=fs.readFileSync(from,"utf8")
        fs.appendFileSync(to,barack)
        console.log('true')
    }catch(e){
        console.log('false')
    }
}
copyfunction(oldfile,newfile)