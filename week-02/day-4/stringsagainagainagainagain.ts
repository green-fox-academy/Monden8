// Given a string, compute recursively a new string where all the adjacent chars are now separated by a *

let arandomstring = "aaaaaaxaaaaaaaaaaxaaaaaaaaaaax";
let index: number = 0;
let hapci: any = "";
let eredeti:number=arandomstring.length;
let iterator:number=-1;
function givenAString(given: string): string {
    if (eredeti == index) {
        return given
    }
    iterator+=2
    hapci = given.split("")
    hapci.splice(iterator, 0, "*")
    given = hapci.join("")
    index = given.match(/[*]/g)!.length
    return givenAString(given)
};
console.log(givenAString(arandomstring))

function stringF(s: string): string {
    if (s.length === 1) {
        if (s === "x") {
            return "y"
        }
        return s
    } if (s[0] === "x") {
        return "y".concat(stringF(s.slice(1, s.length)))
    }
    return s[0].concat(stringF(s.slice(1, s.length)))
};