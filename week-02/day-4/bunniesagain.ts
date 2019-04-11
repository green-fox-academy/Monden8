// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears.
// The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot.
// Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

'use strict'

function imNotCreativeEnoughForNamingThisManyFunctions(bunnies: number): number {
    if (bunnies <= 0) {
        return 0
    } else if (bunnies % 2 === 0) {
        return 3 + imNotCreativeEnoughForNamingThisManyFunctions(bunnies - 1)
    } return 2 + imNotCreativeEnoughForNamingThisManyFunctions(bunnies - 1)
};

console.log(imNotCreativeEnoughForNamingThisManyFunctions(6))

// Given a string, compute recursively (no loops) a new string 
// where all the lowercase 'x' chars have been changed to 'y' chars.

/*function givenAString(given:string):string{
    if array doesnt have x in it{}

this is a string
i wanna split up the string to arrays
i wanna change up the x y 
i wanna jointhem together to a string 

};*/
