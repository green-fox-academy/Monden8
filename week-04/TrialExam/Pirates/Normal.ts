'use strict';
import { Pirate } from './pirates';

class NormalPirate extends Pirate {
    constructor(hasWleg: boolean = false) {
        super();
        this.woodenLeg = hasWleg;
    }
    work(): number {
        this.pGold += 1;
        this.pHealthPoints -= 1;
        return 0;
    }
    party(): number {
        return this.pHealthPoints += 1;
    }
};
export { NormalPirate };