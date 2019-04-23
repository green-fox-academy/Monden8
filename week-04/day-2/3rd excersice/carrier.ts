// if (this.lotOfAircrafts.forEach(element => { element.isPriority() == true })){
//     this.lotOfAircrafts.forEach(element => { element.refill(this.supplybox) })
// } else {
//     this.lotOfAircrafts.forEach(element => { element.refill(this.supplybox) })
// } return this.supplybox

// this.lotOfAircrafts.forEach(element => {
//   element.isPriority() ? element.refill(this.supplybox) : continue
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
        console.log(` HP: ${this.healthPoint}, Aircraft count: ${this.lotOfAircrafts.length}, Ammo Storage: ${this.supplyboxOfCarrier}, Total damage: ${this.totalDMGdealt}`)
        console.log('Aircrafts:')
        for(let i: number = 0; i < this.lotOfAircrafts.length; i++){
            console.log()
        }
    //   Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
    //   Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
    //   Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
    //   Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
    //   Type F16, Ammo: 8, Base Damage: 30, All Damage: 240

        //   If the health points are 0 then it should return: It's dead Jim :(
    }
};
let anyahajo: Carrier = new Carrier()
let babahajo: Carrier = new Carrier()
let jano: Aircrafts = new F16()
anyahajo.add(jano)
let pisti: Aircrafts = new F35()
babahajo.add(pisti)
anyahajo.fill()
babahajo.fill()
//   Methods:
//   getStatus
//   It should return a string about itself and all of its aircrafts' statuses in the following format:
//   
//   HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
//   Aircrafts:
//   Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
//   Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
//   Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
//   Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
//   Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
//   If the health points are 0 then it should return: It's dead Jim :(