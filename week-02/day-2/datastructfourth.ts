'use strict'

//    Create a map where the keys are strings and the values are strings with the following initial values

let mappy: any = {}
Object.assign(mappy, {
    "978-1-60309-452-8": "A Letter to Jo",
    "978-1-60309-459-7": "Lupus",
    "978-1-60309-444-3": "Red Panda and Moon Bear",
    "978-1-60309-461-0": "The Lab"
});
//    Key	Value
//    978-1-60309-452-8	A Letter to Jo
//    978-1-60309-459-7	Lupus
//    978-1-60309-444-3	Red Panda and Moon Bear
//    978-1-60309-461-0	The Lab
//    Print all the key-value pairs in the following format
//    A Letter to Jo (ISBN: 978-1-60309-452-8)
//    Lupus (ISBN: 978-1-60309-459-7)
//    Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
//    The Lab (ISBN: 978-1-60309-461-0)

for (let i: number = 0; i < (Object.values(mappy).length); i++) {
    console.log(`${Object.values(mappy)[i]} (ISBN: ${Object.keys(mappy)[i]})`);
}
console.log(Object.values(mappy).length);

//    Remove the key-value pair with key 978-1-60309-444-3

delete mappy["978-1-60309-444-3"];
console.log(mappy);

//    Remove the key-value pair with value The Lab

for (let i: number = 0; i < (Object.keys(mappy).length); i++) {
    if (Object.values(mappy)[i] === 'The Lab') {
        delete mappy[Object.keys(mappy)[i]]
    }
};
console.log(Object.values(mappy));


//    Add the following key-value pairs to the map
//    
//    Key	Value
//    978-1-60309-450-4	They Called Us Enemy
//    978-1-60309-453-5	Why Did We Trust Him?
//    Print whether there is an associated value with key 478-0-61159-424-8 or not

Object.assign(mappy, {
    "978-1-60309-450-4": "They Called Us Enemy",
    "978-1-60309-453-5": "Why Did We Trust Him?"
});

console.log(mappy.hasOwnProperty("478-0-61159-424-8"));

//    Print the value associated with key 978-1-60309-453-5


if (mappy.hasOwnProperty("978-1-60309-453-5")) {
    console.log(mappy["978-1-60309-453-5"])
}
else {
    console.log("No Value is associated with the given key")
};
