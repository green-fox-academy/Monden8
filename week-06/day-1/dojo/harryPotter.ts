'use strict';

let wishList: any = [
    ['book1', Math.floor(Math.random() * 100000)],
    ['book2', Math.floor(Math.random() * 100000)],
    ['book3', Math.floor(Math.random() * 10000)],
    ['book4', Math.floor(Math.random() * 10000)],
    ['book5', Math.floor(Math.random() * 100000)]
];

let getDiscount = function (basket: any) {
    let sum: number = 0;
    for (let i: number = 0; i < basket.length; i++) {
        sum += basket[i][1];
    };
    console.log('Your total without discount is:' + sum * 8)
    let bookCounter: number = 0;
    let amount: number = 0;
    let discount: number[] = [0.75, 0.8, 0.9, 0.95]
    while (sum > 0) {
        for (let i: number = 0; i < 5; i++) {
            if (basket[i][1] > 0) {
                bookCounter++
                sum--
                basket[i][1]--
            }
        }
        if (bookCounter === 5) { amount += ((bookCounter * 8) * discount[0]) }
        else if (bookCounter === 4) { amount += ((bookCounter * 8) * discount[1]) }
        else if (bookCounter === 3) { amount += ((bookCounter * 8) * discount[2]) }
        else if (bookCounter === 2) { amount += ((bookCounter * 8) * discount[3]) }
        else if (bookCounter === 1) { amount += 8 }
        bookCounter = 0;
    } console.log('Your total with discount is:' + amount);
};
getDiscount(wishList);
