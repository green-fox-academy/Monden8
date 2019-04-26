'use strict';
import { Pirate } from './pirates';

export class Captain extends Pirate {
    isCaptain: boolean = true;
    constructor(hasWleg: boolean = false) {
        super();
        this.woodenLeg = hasWleg;
    }
    work(): number {
        this.pGold += 10;
        this.pHealthPoints -= 5;
        return 0;
    }
    party(): number {
        return this.pHealthPoints += 10;
    }
};