'use strict'

//  Create a Counter class
//  which has an integer property
//  when creating it should have a default value 0 or we can specify it when creating
//  we can add(number) to increase the counter's value by a whole number
//  or we can add() without parameters just increasing the counter's value by one
//  and we can get() the current value as string
//  also we can reset(c) the value to the initial value

class Counter {

    integer: number;
    private init: number;

    constructor(integer: number = 0, init?: number) {
        this.integer = integer;
        this.init = integer;
    }

    addnumber(egyszam: number) {
        console.log(`Your number is currently : ${this.integer}.`)
        return this.integer += egyszam;
    }
    add() {
        console.log(`Your number is currently : ${this.integer}.`)
        return this.integer++;
    }
    get() {
        console.log(`Your number is currently : ${this.integer}.`);
        return 0;
    }
    reset() {
        console.log(`Your number is currently : ${this.init}.`)
        return this.integer = this.init;
    }

}
let old: Counter = new Counter(28)
old.add()
old.addnumber(21)
old.get()
old.reset()

