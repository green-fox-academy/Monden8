'use strict';

let test = require('tape');
declare function require(test: any): any;
import { getIndex } from './getIndex'
test('Correct solution', (t: any) => {
    const testArray: string[] = ['alma', 'banan', 'citrom', 'dinnye', 'eper'];
    t.deepEqual(getIndex(testArray, 'alma'), [0]);
    t.end();
}),

    test('Correct solution', (t: any) => {
        const testArray: string[] = ['alma', 'banan', 'citrom', 'dinnye', 'eper'];
        t.deepEqual(getIndex(testArray, 'afonya'), [-1]);
        t.end();
    })

test('Correct solution', (t: any) => {
    const testArray: string[] = ['alma', 'banan', 'citrom', 'dinnye', 'eper', 'alma'];
    t.deepEqual(getIndex(testArray, 'alma'), [0, 5]);
    t.end();
})