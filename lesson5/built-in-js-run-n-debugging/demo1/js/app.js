/**
 * app.js
 */

const printNumsAndSum = function(nums) {
    let sum = 0;
    for(let i=0; i < nums.length; i++) {
        console.log(nums[i]);
        sum += nums[i];
    }
    return sum;
}

const nums = [1,2,3,4,5,6,7,8,9];

const sum = printNumsAndSum(nums);
console.log(`sum of nums (${nums}) = ${sum}`);