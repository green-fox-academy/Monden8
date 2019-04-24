'use strict';
import { Treee } from './Tree'
import { Flower } from './Flower'
import { GreenLeaf } from './green';
//     The Garden
//     is able to hold unlimited amount of flowers or trees
//     when watering it should only water those what needs water with equally divided amount amongst them
//     eg. watering with 40 and 4 of them need water then each gets watered with 10

class Garden {
    gName: string;
    greenleaves: GreenLeaf[];
    thirstyflowers: GreenLeaf[];
    constructor(GardenName: string) {
        this.gName = GardenName;
        this.greenleaves = [];
        this.thirstyflowers = [];
    }
    addGP(jani: GreenLeaf) {
        this.greenleaves.push(jani)
    }
    wateringGarden(sumAmountOfWater: number) {
        for (let i: number = 0; i < this.greenleaves.length; i++) {
            if (this.greenleaves[i].isDying()) {
                this.thirstyflowers.push(this.greenleaves[i])
            }
        }
            this.thirstyflowers.forEach(element => {
                element.watering(sumAmountOfWater / this.thirstyflowers.length)
            });
        this.thirstyflowers=[]
    }
}

let garden: Garden = new Garden('Simi Soma kertje')
let flower1: GreenLeaf = new Flower('yellow')
let flower2: GreenLeaf = new Flower('blue')
let tree1: GreenLeaf = new Treee('orange')
let tree2: GreenLeaf = new Treee('purple')
garden.addGP(flower1)
garden.addGP(flower2)
garden.addGP(tree1)
garden.addGP(tree2)
garden.wateringGarden(0)