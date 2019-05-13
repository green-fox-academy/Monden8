'use strict';

let test = require('tape');
declare function require(test: any): any;
import { Anagramma } from './Anagram'
let YourInputString: string = 'uigchighcihg';
let MyInputString: string = 'almAAA';
let NindzsaharcosInputstring: string = 'LaAmAA'
test('Should throw true', function (t: any) {
    t.equal(Anagramma(MyInputString, NindzsaharcosInputstring), true);
    t.end();
});
test('Should throw false', function (t: any) {
    t.equal(Anagramma(YourInputString, NindzsaharcosInputstring), false);
    t.end();
});