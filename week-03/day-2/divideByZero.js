'use strict'

const fs = require('fs');

let gyumi = fs.readFileSync('file.txt','UTF-8');



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