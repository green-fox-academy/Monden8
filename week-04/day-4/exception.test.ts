'use strict';

import { Test } from 'tape';
var test = require('tape');
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 3), 5);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([7, 1, 3, 5]), 4);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.equal(isVowel('a'),true);
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.equal(isVowel('u'),true);
  t.end();
});

test('is vowel: k', function(t: any): any {
  t.equal(isVowel('k'),false);
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bmabaaabo'), 'bmavabavavabovo');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});