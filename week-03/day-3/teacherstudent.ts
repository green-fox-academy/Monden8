'use strict'
//  Create Student and Teacher classes
//  Student
//  learn()
//  question(teacher) -> calls the teachers answer method
//  Teacher
//  teach(student) -> calls the students learn method
//  answer()

class Student {
    learn() {
        console.log('Im learning');
    }
    question(teacher: Teacher) {
        teacher.answer();
    }
};

class Teacher {
    answer() {
        console.log('Im answering');
    }
    teach(student: Student) {
        student.learn();
    }
};
let janiba: Teacher = new Teacher;
let pistke: Student = new Student;