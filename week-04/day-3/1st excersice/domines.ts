'use strict'

interface Comparable {
    compareTo(other: Comparable): number;
}

class Domino implements Comparable {
    a: number;
    b: number;
    constructor(elso: number, masodik: number) {
        this.a = elso;
        this.b = masodik;
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

console.log(dominoes)
/*class Todo implements Comparable {
    compareTo() {
    }
}*/
//     It should compare the completed field first
//     Then the description