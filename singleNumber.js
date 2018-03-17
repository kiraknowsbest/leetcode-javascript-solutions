// https://leetcode.com/problems/single-number/description/
// this uses bitwise XOR, which is commutative
// 1 ^ 2 ^ 4 ^ 2 ^ 1 is the same as 1^1^2^2^4
// any number ^ itself results in 0
// any number ^ 0 results in itself
// so 1 ^ 0 -> 1
// 1 ^ 1 -> 0
// by iterating the nums array and using ^ on 
// each value, we get the single value
const singleNumber = nums => nums.reduce((a,b) => a^b);