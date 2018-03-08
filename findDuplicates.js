// https://leetcode.com/problems/find-all-duplicates-in-an-array/
const findDuplicates = nums => {
	// upon seeing a number, make the value at that index negative
	// if a negative value is ever seen, it is a duplicate
	// due to problem definition of all values being within the range
	// -1 < val < nums.length
  let duplicates = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i])-1;
    if (nums[index] < 0) duplicates.push(Math.abs(index+1));
    nums[index] = -nums[index];
  }
  return duplicates;
};