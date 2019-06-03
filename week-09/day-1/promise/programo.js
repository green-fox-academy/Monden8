'use strict';

const promisz = new Promise((resolve, reject) => {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

const onRejected = (error) => {
    console.log(error);
};

promisz
    .then((macska)=>console.log(macska), function (error) {
        onRejected(errormessage)
    })