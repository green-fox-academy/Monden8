'use strict';
import { Person } from './Person'
//   Create a Student class that has the same fields and methods as the Person class, and has the following additional
//   
//   fields:
//   previousOrganization: the name of the student’s previous company / school
//   skippedDays: the number of days skipped from the course
//   methods:
//   getGoal(): prints out 'My goal is: Be a junior software developer.'
//   introduce(): 'Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already.'
//   skipDays(numberOfDays): increases skippedDays by numberOfDays
//   The Student class has the following constructors:
//   
//   Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
//   Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0

class Student extends Person {

    previousOrganization: string = '';
    skippedDays: number = 0;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female',
    previousOrganization: string='The school of life') {
        super(name,age,gender);
        this.previousOrganization=previousOrganization;
        this.skippedDays = 0;
    }

    skipDays(numberOfDays: number) {
        return this.skippedDays += numberOfDays
    }

    getGoal() {
        console.log('My goal is: Be a junior software developer.')
    }
    introduce() {
        console.log(`Hi, I\'m ${this.pName}, a ${this.pAge} year old ${this.pGender} from ${this.previousOrganization}
        who skipped ${this.skippedDays} days from the course already.`)
    }
}
