// https://leetcode.com/problems/find-all-duplicates-in-an-array/
const findDuplicates = nums => {
  let duplicates = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i])-1;
    if (nums[index] < 0) duplicates.push(Math.abs(index+1));
    nums[index] = -nums[index];
  }
  return duplicates;
};