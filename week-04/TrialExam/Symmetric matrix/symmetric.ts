'use strict';

let arrayMatrix: number[][] = [[1, 2, 3], [2, 1, 3], [3, 2, 1]]
const isSymmetric = function (matrix: number[][]): boolean {
    if (matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2]) {
        return true
    } else {
        return false
    }
};