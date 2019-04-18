'use strict'

//  Reuse your Sharpie class
import { Sharpie } from './sharpie'
//  Create SharpieSet class
//  it contains a list of Sharpie
//  countUsable() -> sharpie is usable if it has ink in it
//  removeTrash() -> removes all unusable sharpies

class SharpieSet {

    lotOfSharpies: Sharpie[] = [];
    usable: Sharpie[] = [];



    pushSharpies(oneSharpie: Sharpie) {
        this.lotOfSharpies.push(oneSharpie)
    }


    countUsable() {
        for (let i = 0; i < this.lotOfSharpies.length; i++) {
            if (this.lotOfSharpies[i].getInkAmount() !== 0) {
                this.usable.push(this.lotOfSharpies[i])
            }
        } return console.log(this.usable.length)
    }


    removeTrash() {
        for (let i = 0; i < this.lotOfSharpies.length; i++) {
            if (this.lotOfSharpies[i].inkAmount === 0) {
                this.lotOfSharpies.splice(i, 1)
                i--
            }
        } return this.lotOfSharpies
    }
};
/*            let oneAwesomeSharpie1: Sharpie = new Sharpie("oneAwesomeSharpie", "blue", 50)
              oneAwesomeSharpie1.use()
              oneAwesomeSharpie1.use()
              oneAwesomeSharpie1.use()
              let oneAwesomeSharpie2: Sharpie = new Sharpie("oneAwesomeSharpie", "blue", 50)
              let oneAwesomeSharpie3: Sharpie = new Sharpie("oneAwesomeSharpie", "blue", 50)
              let oneAwesomeSharpie4: Sharpie = new Sharpie("oneAwesomeSharpie", "blue", 50)
              let oneAwesomeSharpie5: Sharpie = new Sharpie("oneAwesomeSharpie", "blue", 50)
              oneAwesomeSharpie5.use()
              oneAwesomeSharpie5.use()
              oneAwesomeSharpie5.use()
              let oneAwesomeSharpie6: Sharpie = new Sharpie("oneAwesomeSharpie", "blue", 50)
              let manySharpies: SharpieSet = new SharpieSet;
              manySharpies.pushSharpies(oneAwesomeSharpie1)
              manySharpies.pushSharpies(oneAwesomeSharpie2)
              manySharpies.pushSharpies(oneAwesomeSharpie3)
              manySharpies.pushSharpies(oneAwesomeSharpie4)
              manySharpies.pushSharpies(oneAwesomeSharpie5)
              manySharpies.pushSharpies(oneAwesomeSharpie6)
              manySharpies.countUsable()
              manySharpies.removeTrash()
              console.log(manySharpies.lotOfSharpies.length)               */


