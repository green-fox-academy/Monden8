'use strict';
import { Person } from './Person'
import { Mentor } from './Mentor'
import { Student } from './Student'
import { Sponsor } from './Sponsor'

//    Create a Cohort class that has the following
//    
//    fields:
//    name: the name of the cohort
//    students: a list of Students
//    mentors: a list of Mentors
//    methods:
//    addStudent(Student): adds the given Student to students list
//    addMentor(Mentor): adds the given Mentor to mentors list
//    info(): prints out 'The name cohort has students.size students and mentors.size mentors.'
//    The Cohort class has the following constructors:
//    
//    Cohort(name): beside the given parameter, it sets students and mentors as empty lists

class Cohort {
        cName: string;
        cStudents: Student[];
        cMentors: Mentor[];

        constructor(name: string = 'GFA') {
            this.cName = name;
            this.cStudents = [];
            this.cMentors = [];
        }

        addStudent(aStudent: Student) {
            this.cStudents.push(aStudent)
        }
        addMentor(aMentor: Mentor) {
            this.cMentors.push(aMentor)
        }
        info() {
            console.log(`The name cohort has ${this.cStudents.length} students and ${this.cMentors.length} mentors.`)
        }
    }
    
    
/*    let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();  */