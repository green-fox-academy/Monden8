'use strict';
abstract class Animal {
    name: string = '';
    age: number = 0;
    gender: string = '';
    isCute: boolean = true;
    abstract getInfo(): void;
    abstract getName(): string;
    abstract breed(): string;
    constructor() {
    }
}
abstract class Egglayers extends Animal {
    lays: string = 'laying eggs';
}
class Mammal extends Animal {
    constructor(name: string) {
        super()
        this.name = name
    }
    release() {
        return 0
    }
    getName() {
        return this.name
    }
    breed() {
        return 'miniature elephante'
    }
    getInfo() {
        console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
    }
}
class Reptile extends Egglayers {
    constructor(name: string) {
        super()
        this.name = name
    }
    release() {
        return 0
    }
    getName() {
        return this.name
    }
    breed() {
        return this.lays
    }
    getInfo() {
        console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
    }
}
export class Bird extends Egglayers {
    constructor(name: string) {
        super()
        this.name = name
    }
    release() {
        return 0
    }
    getName() {
        return this.name
    }
    breed() {
        return this.lays
    }
    getInfo() {
        console.log("A " + bird.getName() + " is breeding by " + bird.breed());
    }
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
reptile.getInfo()
mammal.getInfo()
bird.getInfo()