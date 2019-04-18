'use strict'

//  Create a Station and a Car classes
//  Station
//  gasAmount
//  refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
//  Car
//  gasAmount
//  capacity
//  create constructor for Car where:
//  initialize gasAmount -> 0
//  initialize capacity -> 100

class Station {
    gasAmount: number = 1000;

    constructor() {
        this.gasAmount;
    }

    refill(car: Car) {
        this.gasAmount -= car.capacity ;
        car.gasAmount += car.capacity
       // car.capacity=0;
    }
}
class Car {
    gasAmount: number;
    capacity: number;

    constructor() {
        this.gasAmount = 0;
        this.capacity = 100;
    }
}

let mazda6 : Car = new Car;
let omw : Station = new Station;
omw.refill(mazda6)
console.log(omw)
console.log(mazda6)