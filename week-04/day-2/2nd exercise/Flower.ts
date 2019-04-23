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
        this.waterAmount + (amountOfWater * 0.75)
    }
}