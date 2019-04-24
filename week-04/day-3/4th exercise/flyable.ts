'use strict';
import { Bird } from './zoo'

interface Flyable {
    land(): void;
    fly(): void;
    takeOff(): void;
};
abstract class Vehicle {
    field1: any;
    field2: any;
    field3: any;
}
class Helicopter extends Vehicle implements Flyable {
    land() {

    }
    fly() {

    }
    takeOff() {

    }
}
class Birdie extends Bird implements Flyable {
    land() {

    }
    fly() {

    }
    takeOff() {

    }
}