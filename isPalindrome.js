// https://leetcode.com/problems/palindrome-number/description/
const isPalindrome = x => {
  let a = x.toString();
  for (let i = 0, j = a.length - 1; i <= j; i++, j--) {
    if (a[i] !== a[j]) return false;
  }
  return true;
};