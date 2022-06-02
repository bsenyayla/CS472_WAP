/**
 * main.js
 * @author okalu
 * @since 2022-05-20
 */
"use strict";

const findOdds = function(array) {
    const odds = [];
    for (const num of array) {
        if(num % 2 != 0) {
            odds.push(num);
        }
    }
    return odds;
}

const array = [1,2,3,4,5,6,7,8,9];
const odds = findOdds(array);
console.log(`Given the array, ${array}, the odds are:`);
console.table(odds);
