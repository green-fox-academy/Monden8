'use strict'

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

let arandomstring: string = "aaaaaaxaaaaaaaaaaxaaaaaaaaaaax";
let index:number =0;
let hapci:any="";
function givenAString(given: string): string {
    if(given.split("").indexOf("x")===-1){
        return given
    }index=given.split("").indexOf("x")
    hapci=given.split("")
    hapci.splice(index,1,"")
    given=hapci.join("")
    return givenAString(given)
  };
  console.log(givenAString(arandomstring))

  // Given a string, compute recursively a new string where all the adjacent chars are now separated by a *

export{}
