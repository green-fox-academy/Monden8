'use strict'
import { Animal } from './animal'

//   Farm
//   Reuse your Animal class
//   Create a Farm class
//   it has list of Animals
//   it has slots which defines the number of free places for animals
//   breed() -> creates a new animal if there's place for it
//   slaughter() -> removes the ???least??? hungry animal
let arrayAnimals = ['Unicorn', 'Nyuszi',]
class Farm {

    helpingArray: Animal[] = [];
    farmanimals: Animal[] = [];
    slotss: number = 10;

    getInfoAboutMyFarm() {
        if (this.farmanimals.length !== 0) {
            //console.log(this.farmanimals.map(element => element.Unicorn))
            this.farmanimals.forEach(element => console.log(element.Unicorn))
        }else console.log('You are out of animals my friend.')
    }
    breed(anAnimal: Animal) {
        if (this.slotss == 0) {
            console.log('Buy more farm land for the animals before breeding them!!!')
        } else if (this.slotss > 0) {
            this.farmanimals.push(anAnimal)
            this.slotss--
            console.log('Someone came early')
            return this.farmanimals
        }
    }
    slaughter() {
        for (let i = 0; i < this.farmanimals.length - 1; i++) {
            if (this.farmanimals[i].hunger > this.farmanimals[i + 1].hunger) {
                this.helpingArray.push(this.farmanimals.splice(i, 1)[0])
                i--
                if (this.farmanimals.length === 1) {
                    this.farmanimals.splice(i, 1)
                }
            }
        } this.slotss++
        return this.farmanimals = this.helpingArray;
    }
};
let Pony: Animal = new Animal('Pony')
let Alligator: Animal = new Animal('Alligator')

let farmanimals: Farm = new Farm();
farmanimals.breed(new Animal('nyuszi'));
farmanimals.getInfoAboutMyFarm()
farmanimals.slaughter()
farmanimals.getInfoAboutMyFarm()
