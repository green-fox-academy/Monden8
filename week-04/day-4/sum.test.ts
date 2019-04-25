'use strict';

import { Test } from 'tape';
var test = require('tape');
import { NindzsaAdder } from './sum'


let kalkulator: NindzsaAdder = new NindzsaAdder();
test('Should equal 0 as an empty array', function (t: any) {
    t.equal(kalkulator.sumOfElements(),0);
    t.end();
});
test('Should equal 8 as the single element array', function (t: any) {
    t.equal(kalkulator.sumOfElements(),8);
    t.end();
});
test('Should equal 45 as the 1-9 long array', function (t: any) {
    t.equal(kalkulator.sumOfElements(),45);
    t.end();
});
