'use strict';
import { Pirate } from './pirates';

export class Ship {
    listOfPirates: Pirate[] = [];
    add(pirateName: Pirate) {
        for (let i: number = 0; i < this.listOfPirates.length; i++) {
            if (pirateName.isCaptain == true && this.listOfPirates[i].isCaptain == true) {
                console.log('This ship already has a Captain Aye!');
            } else {
                this.listOfPirates.push(pirateName);
            }
        }
    };
    getPoorPirates(): Array<Pirate> {
        let poorPirates: Pirate[] = [];
        for (let i: number = 0; i < this.listOfPirates.length; i++) {
            if (this.listOfPirates[i].woodenLeg == true && this.listOfPirates[i].pGold < 15) {
                poorPirates = poorPirates.concat(this.listOfPirates[i]);
            }
        } return poorPirates;
    };
    getGolds(): number {
        let sumOfGold: number = 0;
        for (let i: number = 0; i < this.listOfPirates.length; i++) {
            sumOfGold += this.listOfPirates[i].pGold;
        } return sumOfGold;
    };
    lastDayOnTheShip() {
        for (let i: number = 0; i < this.listOfPirates.length; i++) {
            this.listOfPirates[i].party();
        }
    };
    prepareForBattle() {
        for (let j: number = 0; j < 5; j++) {
            for (let i: number = 0; i < this.listOfPirates.length; i++) {
                this.listOfPirates[i].work();
            }
        } for (let i: number = 0; i < this.listOfPirates.length; i++) {
            this.lastDayOnTheShip();
        }
    };
};