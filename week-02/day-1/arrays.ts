'use strict'
let xxx=require('readline-sync');



let x:number = 123;
var a:number= undefined;
function doubling(x:number,y:number){
    return (a= x * y );
}
console.log(doubling (123,2));
console.log (a);

function tehusername(mikulas:string){
    let toDo:string=xxx.question("Mi a neved?");
    console.log(mikulas)
}

    let idfc:string= "Miért";
    function greetByNames(greeet:string) {
        console.log(greeet);
      }

      function makeGreen(name: string): string {
        let newName = 'Green ' + name;
        return newName;
      }
      
      let names = makeGreen('Soma');

      greetByNames(tehusername());
      
      