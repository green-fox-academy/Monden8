'use strict';

function sortNumber(a:number,b:number) {
    return a - b;
}

function median(pool: number[]): any {
    pool.sort(sortNumber)
    let anyuci:number=pool.length
    for (let i: number = 0; i < anyuci; i++) {
        console.log(0, pool)
        if (pool.length > 3) {
            pool.splice(0, 1)
            pool.splice(pool.length-1, 1)
        } else if (pool.length == 3) {
            return (pool[1])
        } else if (pool.length == 2) {
            return (pool[0] + pool[1]) / 2
        } else if (pool.length == 1) {
            return pool[0];
        } else {
            return 0
        }
    }
};
console.log(median([31, 123, 34, 54, 56,1,434,3,2,4,5,6,7,8,1,23,4,234,45,6,1, 1, 1, 1, 1, 1]))
/*
var array=[25, 8, 7, 41]
var count = 1;
array.sort( (a,b) => { 
console.log(`${count++}). a: ${a} | b: ${b}`);
return a-b;
});
console.log(array);
*/