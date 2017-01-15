// https://leetcode.com/problems/two-sum/
const twoSum = (nums, target) => {
  if (nums.length < 2) return null;
  let compliments = {};
  for (let i = 0; i < nums.length; i++) {
    let desired = target - nums[i];
    if (compliments.hasOwnProperty(desired)) {
      return [compliments[desired], i];
    } else {
      compliments[nums[i]] = i;
    }
  }
  return [];
};