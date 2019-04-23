'use strict';
import { Person } from './Person'
import { Mentor } from './Mentor'

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