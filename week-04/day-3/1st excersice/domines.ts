'use strict'

import { Printable } from "../3rd exercise/printable";

interface Comparable {
    compareTo(other: Comparable): number;
}

class Domino implements Comparable, Printable {
    a: number;
    b: number;
    constructor(elso: number, masodik: number) {
        this.a = elso;
        this.b = masodik;
    }
    printAllFields() {
        console.log(`${this.a} is one side of the Domino\n${this.b} is the other side of the Domino\n`)
    }
    compareTo(other: Domino): number {
        if (this.a < other.a) {
            return this.a - other.a
        } else if (this.a > other.a) {
            return this.a - other.a
        } return 0
    }
}
let dominoes: Domino[] = [];

dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

dominoes.sort((a: Domino, b: Domino): number => {
    return a.compareTo(b);
});
/*class Todo implements Comparable {
    compareTo() {
    }
}*/
//     It should compare the completed field first
//     Then the description

for (let domino of dominoes) {
    domino.printAllFields();
}