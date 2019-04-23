'use strict';

//   The Flower
//needs water if its current water amount is less then 5
//   when watering it the flower can only absorb the 75% of the water
//   eg. watering with 10 the flower's amount of water should only increase with 7.5

export class Flower {
    color: string;
    type: string = 'Flower';
    waterAmount: number = 0;
    constructor(color: string) {
        this.color = color;
    }
    watering(amountOfWater: number) {
        if (this.waterAmount < 5) {
            this.waterAmount += (amountOfWater * 0.75)
        }
        if (this.waterAmount < 5) {
            console.log(`The ${this.color} ${this.type} needs water`)
        } else {
            console.log(`The ${this.color} ${this.type} doesn't need water`)
        }
    }
};