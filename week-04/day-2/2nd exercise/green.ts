'use strict';
export class GreenLeaf {
    color: string;
    type: string;
    waterAmount: number = 0;
    dyingPlant:number;
    absorption:number;
    constructor(color: string, type: string) {
        this.color = color;
        this.type = type;
        this.absorption=0;
        this.dyingPlant=0;
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