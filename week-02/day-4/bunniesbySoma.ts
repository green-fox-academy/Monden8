'use strict'

function earCount(nyuszik:number){
    let valtozo:number=0
    for(let i:number=0;i<nyuszik;i++){
        valtozo=nyuszik*2
    }
    console.log(valtozo)
};

earCount(6)

function earCursion(bunnies:number):number{
    if(bunnies <=0){
        return 0
    }return 2+earCursion(bunnies-1)
}

console.log(earCursion(6))