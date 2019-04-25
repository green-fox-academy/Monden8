'use strict';

import { Test } from 'tape';
var test = require('tape');
import { fibonacci } from './fibonacci.copy'

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

test('Should return FN number by index starting from 0', function (hapci:any){
    let FNnumber5:number=3;
    hapci.equal(fibonacci(4),FNnumber5)
    hapci.end()
});
test('Should return FN number by index starting from 0', function (hapci:any){
    let FNnumber6:number=123123;
    hapci.equal(fibonacci(22),FNnumber6)
    hapci.end()
});