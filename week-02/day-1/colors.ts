'use strict';

// -  Create a two dimensional list
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`

let colors = [
    ["lime", "forest green", "olive", "pale green", "spring green"],
    ["orange red", "red", "tomato"],
    ["orchid", "violet", "pink", "hot pink"],
];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number[] = [3, 4, 5, 6, 7];
let q: number = 0;
for (let i: number = 0; i < ai.length; i++) {
    q += ai[i];
}
console.log(q);

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

function createMatrix(size: number): void {
    const matrix: number[][] = [];

    for (let i: number = 0; i < size; i++) {
        matrix[i] = [];

        for (let j: number = 0; j < size; j++) {
            if (j === size - i - 1) {
                matrix[i][j] = 1;
            } else {
                matrix[i][j] = 0;
            }
        }
        console.log(matrix[i])
    }
}

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let nmList = [3,4,5,6,7]


createMatrix(4);
