    'use strict';
    
    let myAge: number = 19;
    let myName: string = ("Soma Feigl");
    let myHeight: number = 190; 

    console.log(myName);
    console.log(myAge);
    console.log(myHeight);

        let n1: number = 13;
        let n2: number = 22;

        console.log(n1 + n2);
        console.log(n2 - n1);
        console.log(n1 * n2);
        console.log(n2 / n1);
        console.log(n1 % n2);

            let codingHours:number = 6;
            let codingHoursWeekly:number = undefined
            let totalweeks:number = 17;
            let workdays:number = 5;
            let dailyHours:number = 24;
            let worksHoursWeekly:number = 52;
            let sumOfHours:number =undefined;

            console.log(sumOfHours = codingHours * totalweeks * workdays);
            let daysSpentWithHours:number = (sumOfHours / dailyHours);
            console.log("Total days spent with coding: " + daysSpentWithHours );
            codingHoursWeekly = (sumOfHours / totalweeks);
            let numberpercentage:number = ((codingHoursWeekly / worksHoursWeekly) *100);
            numberpercentage =  Math.floor (numberpercentage)
            console.log(numberpercentage+ "% ")

