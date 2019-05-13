'use strict';

let wishList: any = [
    ['book1', Math.floor(Math.random() * 3)],
    ['book2', Math.floor(Math.random() * 3)],
    ['book3', Math.floor(Math.random() * 3)],
    ['book4', Math.floor(Math.random() * 3)],
    ['book5', Math.floor(Math.random() * 3)]
];

let getDiscount = function (basket: any) {
    let sum: number = 0;
    for (let i: number = 0; i < basket.length; i++) {
        sum += basket[i][1];
    };
    console.log('Your total without discount is:' + sum * 8)
    let bookCounter: number = 0;
    let discountCounter: number = 0;
    while (sum > 0) {
        for (let i: number = 0; i < 5; i++) {
            if (basket[i][1] > 0) {
                bookCounter++
                sum--
                basket[i][1]--
            }
        }
        if (bookCounter === 5) { discountCounter += ((5 * 8) * 0.75) }
        else if (bookCounter === 4) { discountCounter += ((4 * 8) * 0.80) }
        else if (bookCounter === 3) { discountCounter += ((3 * 8) * 0.90) }
        else if (bookCounter === 2) { discountCounter += ((2 * 8) * 0.95) }
        else if (bookCounter === 1) { discountCounter += 8 }
        bookCounter=0;
    }   console.log('Your total with discount is:' + discountCounter);
};
getDiscount(wishList);