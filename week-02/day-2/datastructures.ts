'use strict'

let myList: string[] = ["William", "John", "Amanda"];
console.log(myList.length);
myList.push("Jozsika")
if (myList.length === -1) {
    console.log("Its empty")
} else {
    console.log("It has names in it")
}
console.log(myList.length);
console.log(myList[2])
myList.forEach(element => {
    console.log(element)
});
myList.forEach((element,index) => {
    console.log(`${index+1}. ${element}`)
});
  myList.splice(2, 1);

console.log(myList)
console.log(myList.reverse())
myList.splice(0,myList.length)
console.log(myList)