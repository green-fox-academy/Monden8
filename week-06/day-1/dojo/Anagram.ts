'use strict';

export function anagram(str1: string, str2: string): boolean {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
};