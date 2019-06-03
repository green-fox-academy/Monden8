'use strict';

const myProm = new Promise ((resolve,reject)=>{
    resolve('PROMISE VALUE');
});
myProm.then(console.log)
console.log('MAIN PROGRAM')