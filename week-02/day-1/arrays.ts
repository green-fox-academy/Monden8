'use strict'

let x:number = 123;
var a:number= undefined;
function doubling(x:number,y:number){
    return (a= x * y );
}
console.log(doubling (123,2));
console.log (a);


    let idfc:string= "Miért";
    function greetByNames(greeet = "Hi" , names = 'Pal') {
        console.log(greeet, names);
      }
      
      greetByNames(idfc ,"Soma");
      greetByNames('Greetings, Dear', 'Greenfox');

      function makeGreen(name: string): string {
        let newName = 'Green ' + name;
        return newName;
      }
      
      let names = makeGreen('Soma');
      greetByNames('Mizujs?', names);