'use strict';

//   Create a Person class with the following fields:
//   
//   name: the name of the person
//   age: the age of the person (integer number)
//   gender: the gender of the person (male / female)
//   And the following methods:
//   
//   introduce(): prints out 'Hi, I'm name, a age year old gender.'
//   getGoal(): prints out 'My goal is: Live for the moment!'
//   And the following constructors:
//   
//   Person(name, age, gender)
//   Person(): sets name to Jane Doe, age to 30, gender to female

export class Person {
    pName: string;
    pAge: number;
    pGender: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
        this.pName = name;
        this.pAge = age;
        this.pGender = gender;
    }

    introduce() {
        console.log(`Hi, I\'m ,${this.pName} a ${this.pAge} year old ${this.pGender}.`);
    }

    getGoal() {
        console.log('My goal is: Live for the moment!');
    }
};