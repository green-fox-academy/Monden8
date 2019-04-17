'use strict'

//  Create an Animal class
//  Every animal has a hunger value, which is a whole number
//  Every animal has a thirst value, which is a whole number
//  when creating a new animal object these values are created with the default 50 value
//  Every animal can eat() which decreases their hunger by one
//  Every animal can drink() which decreases their thirst by one
//  Every animal can play() which increases both by one

class Animal{
    MFUnicorn:string;
    hunger:number=50;
    thirst:number=50;
constructor(MFUnicorn:string){
    this.MFUnicorn=MFUnicorn
    this.hunger
    this.thirst
}
eat(){
     return this.hunger--
}
drink(){
   return this.thirst--
}
play(){
     return this.thirst++ && this.hunger++
}
}
let myLittlePony:Animal = new Animal('Pony')
console.log(myLittlePony)

myLittlePony.play();
console.log(myLittlePony)