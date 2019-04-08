'use strict'


// -  Create a variable named `magicNumbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `magicNumbers`

let magicNumbers=[1,3,5,7];
console.log(magicNumbers[2]);

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

let firstList=[1,2,3];
let secondList=[4,5];
console.log(secondList.length>firstList.length);

// -  Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// -  Print the sum of the second and the third element

let r=[54,23,66,12];
console.log(r[1]+r[2])

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc=["Arthur","Boe","Chloe"];
console.log([abc[0],abc[1],abc[2]]=[abc[2],abc[1],abc[0]])

// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

let integers=[4,5,6,7]
integers.forEach(element => {console.log(element)})

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList=[1,2,3,8,5,6]
/*let newnumList = numList.map((8) => {
    return 4;
  }); */
let newestnumList=numList.map (function(x,index,alma){
   if (index===3) {
       return 4
   } else{
       return x
   }
})
console.log(newestnumList[3])

