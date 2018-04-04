// https://leetcode.com/problems/move-zeroes/description/
const moveAllElementsUpOneIndex = (arr, indexToMove) => {
  const element = arr[indexToMove]
  for (let i = indexToMove; i < arr.length - 1; i++) {
    arr[i] = arr[i+1]
  }
  arr[arr.length - 1] = element;
}

const moveZeroes = nums => {
  let numberOfZeroes = 0;
  for (let i = 0; i < nums.length - numberOfZeroes; i++) {
    if (nums[i] === 0) {
      moveAllElementsUpOneIndex(nums, i)
      i--;
      numberOfZeroes++;
    }
  }
};