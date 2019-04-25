'use strict';

export function fibonacci(hanyadik: number): number {
    if (hanyadik == 2) {
        return 1
    } else if (hanyadik == 1) {
        return 1
    } else if (hanyadik == 0) {
        return 0
    } return fibonacci(hanyadik - 1) + fibonacci(hanyadik - 2)
};

