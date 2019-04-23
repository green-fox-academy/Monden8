'use strict';

//   The Tree
//needs water if its current water amount is less then 10
//   when watering it the tree can only absorb the 40% of the water
//   eg. watering with 10 the tree's amount of water should only increase with 4

export class Treee {
    color: string;
    type: string = 'Tree';
    waterAmount: number = 0;
    constructor(color: string) {
        this.color = color;
    }
    watering(amountOfWater: number) {
        this.waterAmount + (amountOfWater * 0.4)
    }
}