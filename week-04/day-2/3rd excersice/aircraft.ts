'use strict';
//   Methods:
//   fight
//   It should use all the ammo (set it to 0) and it should return the damage it deals
//   The damage dealt is calculated by multiplying the base damage by the ammunition
//   refill
//   It should take a number as parameter and substract as much ammo as possibe
//   It can't have more ammo than the number or the max ammo (can't get more ammo than what's coming from the parameter or the max ammo of the aircraft)
//   It should return the remaining ammo
//   Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288
//   getType
//   It should return the type of the aircraft as a string
//   getStatus
//   It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500
//   isPriority
//   It should return if the aircraft is priority in the ammo fill queue. It's true for F35 and false for F16

class Aircrafts{
    ammunition:number=0;
    maxAmmo:number;
    baseDamage:number;
    type:string;
    constructor(maxAmmo:number,baseDamage:number,type:string){
        this.maxAmmo=maxAmmo;
        this.baseDamage=baseDamage;
        this.type=type;
    }
}
class F16 extends Aircrafts{
    constructor(){
        super(8,30,'F16');
    }
}
class F35 extends Aircrafts{
    constructor(){
        super(12,50,'F35');
    }
};
