// https://leetcode.com/problems/valid-palindrome/description/
var isPalindrome = function(s) {
    // use RegEx to remove non-alphanumeric characters
    let newS = s.replace(/[^A-Z0-9a-z]/g, '').toLowerCase()
    // base case: if length is 0 or 1, it is valid
    if (newS.length < 2) return true
    // use two pointers that move closer to each other
    for (let i = 0, j = newS.length - 1; i < Math.floor(newS.length / 2); i++, j--) {
        // if not equal, return false
        if (newS[j] !== newS[i]) return false
    }
    return true
};
