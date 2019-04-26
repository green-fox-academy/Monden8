//    Write a program which can store pirates in a ship.
//    
//    ### Pirate
//     
//     - A pirate has a name, an amount of gold and health points, the default value of which is 10.
//     - A pirate might be a captain and may have a wooden leg.
//     - You must create the following methods:
abstract class Pirate {
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
}
class Captain extends Pirate {
    isCaptain: boolean = true;
    constructor(hasWleg: boolean = false) {
        super();
        this.woodenLeg = hasWleg
    }
    work(): number {
        this.pGold += 10
        this.pHealthPoints -= 5
        return 0
    }
    party(): number {
        return this.pHealthPoints += 10
    }
}
class Normal extends Pirate {
    constructor(hasWleg: boolean = false) {
        super();
        this.woodenLeg = hasWleg
    }
    work(): number {
        this.pGold += 1
        this.pHealthPoints -= 1
        return 0
    }
    party(): number {
        return this.pHealthPoints += 1
    }
}

//    ### Ship
class Ship {
    listOfPirates: Pirate[] = [];
    add(pirateName: Pirate) {
        for (let i: number = 0; i < this.listOfPirates.length; i++) {
            if (pirateName.isCaptain == true && this.listOfPirates[i].isCaptain == true) {
                console.log('This ship already has a Captain Aye!')
            } else {
                this.listOfPirates.push(pirateName)
            }
        }
    }
    getPoorPirates() {
        let poorPirates: Pirate[] = [];
        for (let i: number = 0; i < this.listOfPirates.length; i++) {
            if (this.listOfPirates[i].woodenLeg == true && this.listOfPirates[i].pGold < 15) {
                poorPirates = poorPirates.concat(this.listOfPirates[i])
            }
        }
    }
    getGolds() {
        let sumOfGold: number = 0;
        for (let i: number = 0; i < this.listOfPirates.length; i++) {
            sumOfGold += this.listOfPirates[i].pGold;
        }
    }
}
//     - `getGolds()` which returns the sum of gold owned by the pirates of that particular ship
//     - `lastDayOnTheShip()` which calls the pirates' `party()` method.
//     - `prepareForBattle()` which calls 
//        - the pirates' `work()` method 5 times
//        - then the ship's `lastDayOnTheShip()` method.