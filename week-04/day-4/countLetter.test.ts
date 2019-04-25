'use strict';

import { Test } from 'tape';
var test = require('tape');
import { countLetter } from './countLetter'

let objectToTest: object = {
    H: 1,
    a: 3,
    r: 4,
    m: 1,
    i: 1,
    n: 1,
    c: 3,
    k: 2,
    e: 6,
    t: 3,
    s: 1,
    ' ': 1
}
test('should return an object', function (t: any) {
    let nindzsa11 = countLetter('Haaarminccckettesek terrree');
    t.deepEqual(nindzsa11, objectToTest);
    t.end();
});