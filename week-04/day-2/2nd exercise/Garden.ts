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
    }
    watering(amountOfWater) {


        this.trees.forEach(element => {this.watering(amountOfWater/(this.trees.length+this.flowers.length))
        });

        this.flowers.forEach(element => {this.watering(amountOfWater/(this.trees.length+this.flowers.length))

        });
    }
}