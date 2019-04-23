'use strict';
import { Aircrafts } from './aircraft'
import { F16 } from './F16'
import { F35 } from './F35'

export class Carrier {
    healthPoint: number;
    supplyboxOfCarrier: number;
    lotOfAircrafts: Aircrafts[] = [];
    totalDMGdealt: number = 0;
    constructor(initalAmmo: number = 300, hp: number = 100) {
        this.supplyboxOfCarrier = initalAmmo;
        this.healthPoint = hp;
    }
    add(aircraft: Aircrafts) {
        this.lotOfAircrafts.push(aircraft)
    }
    fill() {
        try {
            if (this.supplyboxOfCarrier == 0) {
                throw 'Nincsen Ammod :('
            }
            for (let i: number = 0; i < this.lotOfAircrafts.length; i++) {
                if (this.supplyboxOfCarrier >= 0 && this.lotOfAircrafts[i].isPriority()) {
                    this.lotOfAircrafts.forEach(element => { element.refill(this) })
                } else if (this.supplyboxOfCarrier >= 0 && this.lotOfAircrafts[i].isPriority() == false) {
                    this.lotOfAircrafts.forEach(element => { element.refill(this) })
                } return this.supplyboxOfCarrier
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    fight(anothercarrier: Carrier) {
        for (let i: number = 0; i < this.lotOfAircrafts.length; i++) {
            anothercarrier.healthPoint -= this.lotOfAircrafts[i].fight()
            this.totalDMGdealt += this.lotOfAircrafts[i].fight()
        } return this.totalDMGdealt
    }
    getStatus() {
        if (this.healthPoint > 0) {
            console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.lotOfAircrafts.length}, Ammo Storage: ${this.supplyboxOfCarrier}, Total damage: ${this.totalDMGdealt}`)
            console.log('Aircrafts:')
            for (let i: number = 0; i < this.lotOfAircrafts.length; i++) {
                console.log(`Type ${this.lotOfAircrafts[i].type}, Ammo: ${this.lotOfAircrafts[i].ammunition},Base Damage: ${this.lotOfAircrafts[i].baseDamage}, All Damage: ${this.lotOfAircrafts[i].fight()}`)
            }
        } else if (this.healthPoint <= 0) {
            console.log('It\'s dead Jim :(')
        }
    }
};
let anyahajo: Carrier = new Carrier()
let babahajo: Carrier = new Carrier()
let jano: Aircrafts = new F16()
anyahajo.add(jano)
let pisti: Aircrafts = new F35()
anyahajo.add(pisti)
anyahajo.fill()
anyahajo.getStatus()