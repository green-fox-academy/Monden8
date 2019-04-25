'use strict';

export function add(a: number, b: number): number {
    return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b
    }
    return c;
};
function sortNumber(a:number,b:number) {
    return a - b;
}

export function median(pool: number[]): any {
    pool.sort(sortNumber)
    let anyuci:number=pool.length
    for (let i: number = 0; i < anyuci; i++) {
        console.log(0, pool)
        if (pool.length > 3) {
            pool.splice(0, 1)
            pool.splice(pool.length-1, 1)
        } else if (pool.length == 3) {
            return (pool[1])
        } else if (pool.length == 2) {
            return (pool[0] + pool[1]) / 2
        } else if (pool.length == 1) {
            return pool[0];
        } else {
            return 0
        }
    }
};

export function isVowel(character: string): boolean {
    return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character);
}

export function translate(hungarian: string): string {
    let teve = hungarian;
    let length = teve.length;

    for (let i = 0; i < length; i++) {
        let c = teve[i];
        if (isVowel(c)) {
            teve = teve.split(c).join(`${c}v${c}`);
            i += 2;
            length += 2;
        }
    }
    return teve;
}