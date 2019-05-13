'use strict';

let test = require('tape');
declare function require(test: any): any;
import { Anagramma } from './Anagram'
test('Should throw true', function (t: any) {
    let MyInputString: string = 'almAAA';
    let NindzsaharcosInputstring: string = 'LaAmAA';
    t.equal(Anagramma(MyInputString, NindzsaharcosInputstring), true);
    t.end();
});
test('Should throw false', function (t: any) {
    let YourInputString: string = 'uigchighcihg';
    let NindzsaharcosInputstring: string = 'LaAmAA';
    t.equal(Anagramma(YourInputString, NindzsaharcosInputstring), false);
    t.end();
});