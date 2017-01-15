// https://leetcode.com/problems/reverse-string/
const reverseString = s => {
  let result = "";
  if (typeof s !== 'string') return null;
  for (let i = s.length - 1; i >= 0; i--) {
      result += s[i];
  }
  return result;
};