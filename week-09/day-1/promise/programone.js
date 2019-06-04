'use strict';

let promise = Promise.resolve('SECRET VALUE');
let myProoom = Promise.reject(new Error ('2'));

myProoom.catch((cica)=>{console.log(cica.message);
})