'use strict';
export class GreenLeaf {
    color: string;
    type: string;
    waterAmount: number = 0;
    dyingPlant:number;
    absorption:number;
    constructor(color: string, type: string,absortion:number,dyingPlant:number) {
        this.color = color;
        this.type = type;
        this.absorption=absortion;
        this.dyingPlant=dyingPlant;
    }
    isDying(){
        if (this.waterAmount < this.dyingPlant){
            return true
        } return false
    }
    watering(amountOfWater: number) {
        if (this.waterAmount < this.dyingPlant) {
            this.waterAmount += (amountOfWater * this.absorption)
        }
        if (this.waterAmount < this.dyingPlant) {
            console.log(`The ${this.color} ${this.type} needs water`)
        } else {
            console.log(`The ${this.color} ${this.type} doesn't need water`)
        }
    }
}