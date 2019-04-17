'use strict'

class Tree {
    type: string;
    leafColor: string;
    age: number;
    gender: string;
    isEvergreen: boolean;

    constructor(type: string, leafColor: string, gender: string, isEvergreen: boolean, age: number=0){
        this.type=type;
        this.leafColor=leafColor;
        this.gender=gender;
        this.isEvergreen=isEvergreen;
        this.age=age;
    }
        giveMeInfoAboutMyTree():void{
            console.log(`Your tree is a(n) ${this.type} and it is ${this.isEvergreen?  'an evergreen!' : "n't an evergreen!"}`)
        

    }
}
const myFirstTree:Tree=new Tree('Fenyő','Zöld','Female',true,32)
    console.log(myFirstTree)
    myFirstTree.giveMeInfoAboutMyTree()