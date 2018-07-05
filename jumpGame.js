// https://leetcode.com/problems/jump-game/description/
const canJump = nums => {
    // instead of moving from start to end, we go backwards
    if (!nums || nums.length < 2) return true;
    // we calculate the number of jumps needed to reach where we are
    let currentJumpsNeeded = 1;
    for (let i = nums.length - 2; i > -1; i--) {
        if (nums[i] < currentJumpsNeeded) {
            // the current element doesn't provide enough jumps
            currentJumpsNeeded++;
        } else {
            // reset jumps to 1
            currentJumpsNeeded = 1;
        }
    }
    // return if we have enough jumps or not
    return nums[0] >= currentJumpsNeeded;
};
