//  Create a list ('List A') which contains the following values
//  Apple, Avocado, Blueberries, Durian, Lychee
//  Create a new list ('List B') with the values of List A
//  Print out whether List A contains Durian or not
//  Remove Durian from List B
//  Add Kiwifruit to List A after the 4th element

let listA: any[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
let listB: any[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
if (listA.includes("Durian")) {
    console.log("YEEEAAAAAH!");
} else {
    console.log("I'm your father\n NOOOOOOOOOOO!");
}

delete listB[listB.indexOf("Durian")];
console.log(listB)

listA.splice(3, 0, "Kiwifruit")
console.log(listA)

//  Compare the size of List A and List B
//  Get the index of Avocado from List A
//  Get the index of Durian from List B
//  Add Passion Fruit and Pummelo to List B in a single statement
//  Print out the 3rd element from List A
console.log(`lista size: ${listA.length} listb size: ${listB.length}`);
if (listA.length > listB.length) {
    console.log("ListA hosszabb mint ListB");
} else if (listA.length === listB.length) {
    console.log("Same length")
} else{
    console.log("ListB is longer than ListA")
}

listA.indexOf("Avocado")
listB.indexOf("Durian")
console.log(listB)
listB.splice(3, 0, "Passion-fruit","Pummelo")
console.log(listB)
console.log(listA[2])





