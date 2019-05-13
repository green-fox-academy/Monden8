'use strict';

let getIndex = function (array: string[], value: string): number {
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i
        };
    }; return -1
};
export { getIndex };