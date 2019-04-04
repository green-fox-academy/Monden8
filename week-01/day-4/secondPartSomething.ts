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
        console.log(BMI);

            let myage:number = 19;
            let myname:string = "Soma";
            let myheight:number = 189;
            let AmIMarried:boolean = false;

            console.log(myage +" "+ myname +" "+ myheight +" "+ AmIMarried);

                    let q:number = 3;
                    q += 10;
                    console.log(q)
                    let w:number = 100;
                    w -= 7;
                    console.log(w)
                    let e:number = 44;
                    e *= 2;
                    console.log(e)
                    let r:number = 125;
                    r /= 5;
                    console.log(r)
                    let t:number = 8; 
                    t **= 2;
                    console.log(t)
                    let f1:number = 123;
                    let f2:number = 345;
                    let isBigger:boolean =  f1 > f2;
                    console.log(isBigger)
