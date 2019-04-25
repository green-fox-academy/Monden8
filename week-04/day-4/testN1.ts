'use strict';

import { Test } from 'tape';
var test = require('tape');
import {Apple} from './apple'

let alma: Apple = new Apple();

test('should return apple', function (t: any) {
    let nindzsa7 = alma.getApple();
    t.equal(nindzsa7, 'apple');
    t.end();
});