'use strict';

import { Carrier } from "./carrier";

export class Aircrafts {
    ammunition: number = 0;
    maxAmmo: number;
    baseDamage: number;
    type: string;
    dmgDealt: number = 0;
    constructor(maxAmmo: number, baseDamage: number, type: string) {
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;
        this.type = type;
    }
    fight() {
        this.dmgDealt = this.baseDamage * this.ammunition
        this.ammunition = 0;
        return this.dmgDealt
    }
    refill(carrier: Carrier) {
        for (let i: number = 0; i < this.maxAmmo; i++) {
            if (carrier.supplyboxOfCarrier !== 0) {
                this.ammunition++
                carrier.supplyboxOfCarrier--
            }
        } return carrier.supplyboxOfCarrier;
    }
    getType() {
        return this.type;
    }
    getStatus() {
        console.log(`Type ${this.getType()}, Ammo: ${this.ammunition},Base Damage ${this.baseDamage}, All Damage: ${this.fight()}`)
    }
    isPriority() {
        if (this.getType() == 'F16') {
            return false
        } return true
    }
};