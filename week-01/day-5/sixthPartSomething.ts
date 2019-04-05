'use strict'
let a:number = undefined;

for(a = 0; a<2; a++ ){
    console.log("I won't cheat on Exams!");
}

for(let b:number =0; b<=10; b++){
    if ( b%2===0){
        console.log(b);
    }
}

let number:number = 15;
for(let start:number =1; start<=10; start++ ){
    let c:number = (start*number);
    console.log(`${start} * ${number}
     = ${c}`);
   // console.log(start + "*" +number + "=" + c);
}
const d:number=15
for(let d:number = 56; d>=1; d--){
    let h:number=d+d;
    let j:number=6;
    console.log(`"Sum: "${h} "Average: "${j}` )
}  
