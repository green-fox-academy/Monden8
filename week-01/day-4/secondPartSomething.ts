'use strict'

let faveoriteNumber:number = 8;
console.log("My favorite number is: " + faveoriteNumber);

    let a:number = 123;
    let b:number = 526;
    console.log("a: " + a);
    console.log("b: " + b);

    let c:number = (a + b);
    console.log("a: " + (c - a));
    console.log("b: " + (c - b));

    a=a+b;
    b=a-b;
    a=a-b;
    console.log("a: " + a);
    console.log("b: " + b);
    console.log("b: " + (( a + b ) -a  ));

        let massInKg:number = 80.5;
        let heightInM:number = 1.89;
        let BMI:number = massInKg/(heightInM**2);
        BMI = Number(BMI.toFixed(2));

        console.log(BMI)
