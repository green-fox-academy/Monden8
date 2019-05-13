'use strict';

export let getIndex = function (array: string[], value: string): number[] {
    let multipleIndexArray: number[] = [];
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] == value) {
            multipleIndexArray.push(i)
        }
    };
    return multipleIndexArray.length ? multipleIndexArray : [-1];
};