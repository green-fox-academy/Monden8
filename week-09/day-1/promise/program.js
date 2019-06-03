'use strict';

// let myProm = new Promise(
//     setTimeout(() => {
//         return fullfill
//     }, 300)
//         (fullfill, reject), {
//         fullfill = 'FULFILLED!'
//     }
// );

// myProm.then((data) => {
//     console.log(data);
// })


let mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            fulfill: 'FULFILLED!'
        })
    }, 300);
    // reject({
    //     fulfill: 'nom'
    // });
});
mypromise
    .then(kutyafüle => {
        console.log(kutyafüle.fulfill)
    })
    // .catch(macskanyelve => {
    //     console.log(macskanyelve.fulfill)
    // });
