'use strict';
///    We start with a base, abstract class Instrument.
abstract class Instrument{
    protected nameOfTheInsturment:string='';
    numberOfstrings:number=0;
    instrumentSound:string='';
    play(){
        console.log(`${this.nameOfTheInsturment}, a ${this.numberOfstrings}-stringed instrument that goes ${this.instrumentSound}`)
    }
}
abstract class StringedInstrument extends Instrument{
    numberOfstrings:number=0;
    sound(){

    }
}
class ElectricGuitar extends StringedInstrument{
    nameOfTheInsturment:string='ElectricGuitar';
    instrumentSound:string='Twang';
    constructor(strings:number=6){
        super()
        this.numberOfstrings=strings
    }
}
class BassGuitar extends StringedInstrument{
    nameOfTheInsturment:string='BassGuitar';
    instrumentSound:string='Duum-duum-duum';
    constructor(strings:number=4){
        super()
        this.numberOfstrings=strings
    }
}
class Violin extends StringedInstrument{
    numberOfstrings:number=4;
    nameOfTheInsturment:string='Violin';
    instrumentSound:string='Screech';
    constructor(){
        super()
    }
}

let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();