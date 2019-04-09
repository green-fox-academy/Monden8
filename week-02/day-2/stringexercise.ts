'use strict';

let example: string = 'In a dishwasher far far away';
let re: string = "dishwasher"

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let examp: string = example.replace(re, "galaxy")
example = example.replace("dishwasher", "galaxy");
console.log(example);
console.log(examp);

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
console.log(reversed);

function reverse(wtf) {
    return wtf.split('').reverse().join('');
}

console.log(reverse(reversed))
console.log(reversed);


// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let urlll:string= " asdfasdfabotsadsfasdf"

function fixx(idk){
    return idk.replace("bots","odds").replace("https//","https://")
}
console.log(fixx(url));