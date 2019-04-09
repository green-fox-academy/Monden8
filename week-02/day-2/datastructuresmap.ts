'use strict'

let introduction: any = {};
console.log(introduction.hasOwnProperty(""));


Object.assign(introduction, {
    "97": "a",
    "98": "b",
    "99": "c",
    "65": "A",
    "66": "B",
    "67": "C",
    "69": undefined
});


console.log(introduction.hasOwnProperty("98"));
console.log(Object.keys(introduction));
console.log(Object.values(introduction));
console.log(JSON.stringify(introduction));

Object.assign(introduction, {
    "68": "D"
});
console.log(Object.keys(introduction).length);

//  Print the value that is associated with key 99

console.log(introduction["99"]);

//  Remove the key-value pair where with key 97

delete introduction["97"]

//  Print whether there is an associated value with key 100 or not

let ccc: any = 66
let barmi: any = introduction[ccc]
if (barmi === undefined) {
    console.log("No values here!")
} else {
    console.log("The value here is " + barmi)
}

//  Remove all the key-value pairs

introduction={}
console.log(introduction)

