//    Create a sum method in your class which has a list of integers as parameter
//    It should return the sum of the elements in the list

export class NindzsaAdder {
    listOfInteger: number[] = [];

    returnValue: number = 0;
    sumOfElements() {
        for (let i: number = 0; i < this.listOfInteger.length; i++) {
            this.returnValue += this.listOfInteger[i]
        } return this.returnValue
    }
}

