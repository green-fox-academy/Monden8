'use strict';

export abstract class Pirate {
    pName: string = 'Jack';
    pGold: number = 20;
    pHealthPoints: number = 0;
    woodenLeg: boolean = false;
    isCaptain: boolean = false;
    abstract work(): number;
    abstract party(): number;
    toString(): void {
        if (this.woodenLeg == true) {
            console.log(`Hello, I\'m ${this.pName}. I have a wooden leg and ${this.pGold} golds.`);
        } else {
            console.log(`Hello, I\'m ${this.pName}. I still have my real legs and ${this.pGold} golds.`);
        }
    }
};