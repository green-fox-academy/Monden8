'use strict';
import { Treee } from './Tree'
import { Flower } from './Flower'
//     The Garden
//     is able to hold unlimited amount of flowers or trees
//     when watering it should only water those what needs water with equally divided amount amongst them
//     eg. watering with 40 and 4 of them need water then each gets watered with 10

class Garden {
    gName: string;
    flowers: Flower[];
    trees: Treee[];
    constructor(GardenName: string) {
        this.gName = GardenName
        this.flowers = [];
        this.trees = [];
    }
    addT(tree: Treee) {
        this.trees.push(tree)
    }
    addF(flower: Flower) {
        this.flowers.push(flower)
    }
    wateringGarden(sumAmountOfWater: number) {


        this.trees.forEach(element => {
            element.watering(sumAmountOfWater / (this.trees.length + this.flowers.length))
        });

        this.flowers.forEach(element => {
            element.watering(sumAmountOfWater / (this.trees.length + this.flowers.length))  
        });
    }
}

let garden: Garden = new Garden('Simi Soma kertje')
let flower1: Flower = new Flower('yellow')
let flower2: Flower = new Flower('blue')
let tree1: Treee = new Treee('orange')
let tree2: Treee = new Treee('purple')
garden.addF(flower1)
garden.addF(flower2)
garden.addT(tree1)
garden.addT(tree2)


garden.wateringGarden(40)


