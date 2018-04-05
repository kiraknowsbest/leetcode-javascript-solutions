// https://leetcode.com/problems/missing-number/description/
// using XOR we return the unique number
// since we have duplicates of each number from 0-n 
// in the array and we use i as an iterator
// with the exception of the missing number
const missingNumber = nums => {
    let x = 0;
    for (let i = 0; i < nums.length; i++) x = x^i^nums[i]
    return x^nums.length
};