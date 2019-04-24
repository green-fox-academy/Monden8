'use strict';
///    We start with a base, abstract class Instrument.
abstract class Instrument{
    abstract nameOfTheInsturment:string='';
    abstract play():void
}
abstract class StringedInstrument extends Instrument{
    abstract numberOfstrings:number=0;
    abstract sound():void
}
class ElectricGuitar extends StringedInstrument{
    nameOfTheInsturment:string='ElectricGuitar';
    instrumentSound:string='Twang';
    numberOfstrings:number;
    play(){
        console.log(`${this.nameOfTheInsturment}, a ${this.numberOfstrings}-stringed instrument that goes ${this.sound()}`)
    }
    sound(){
        return this.instrumentSound
    }
    constructor(strings:number=6){
        super()
        this.numberOfstrings=strings
    }
}
class BassGuitar extends StringedInstrument{
    numberOfstrings:number;
    nameOfTheInsturment:string='BassGuitar';
    instrumentSound:string='Duum-duum-duum';
    constructor(strings:number=4){
        super()
        this.numberOfstrings=strings
    }
    play(){
        console.log(`${this.nameOfTheInsturment}, a ${this.numberOfstrings}-stringed instrument that goes ${this.sound()}`)
    }
    sound(){
        return this.instrumentSound
    }
}
class Violin extends StringedInstrument{
    numberOfstrings:number=4;
    nameOfTheInsturment:string='Violin';
    instrumentSound:string='Screech';
    constructor(){
        super()
    }
    play(){
        console.log(`${this.nameOfTheInsturment}, a ${this.numberOfstrings}-stringed instrument that goes ${this.sound()}`)
    }
    sound(){
        return this.instrumentSound
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