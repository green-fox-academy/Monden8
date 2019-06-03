'use strict';

let mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error(
            'REJECTED!'
        ));
    }, 300);
});

function onReject(error) {
    console.log(error.message)
};

mypromise
    .then(undefined, function(error) {
        onReject(error)
    });