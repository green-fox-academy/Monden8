'use strict'

//  Every pokemon has a name and a type. Certain types are effective against others, e.g. water is effective against fire.
//  You have a Pokemon class with a method called isEffectiveAgainst().
//  Ash has a few pokemon. Help Ash decide which Pokemon to use against the wild one.
//  You can use the already created pokemon files.

class Pokemon{
    name:string;
    type:string;

    constructor(name:string,type:string){
        this.name=name
        this.type=type
    }

    isEffectiveAgainst(){
        if (this.type==='Normal'){
            console.log(`Bring ${this.name} against: Rock, Ghost or Steel`)
        }else if (this.type===`Poison`){
            console.log(`Bring ${this.name} against: Grass or Fairy`)
        }else if (this.type===`Fire`){
            console.log(`Bring ${this.name} against: Bug, Steel, Grass or Ice`)
        }else if (this.type===`Water`){
            console.log(`Bring ${this.name} against: Ground, Rock or Fire`)
        }else if (this.type===`Grass`){
            console.log(`Bring ${this.name} against: Ground, Rock or Water`)
        }else if (this.type===`Electric`){
            console.log(`Bring ${this.name} against: Flying or Water`)
        }else console.log(`GET MORE FUCKING SLAVES`)
    }
}
let PikkaPikka:Pokemon= new Pokemon('Pikkachu','Electric')
PikkaPikka.isEffectiveAgainst()