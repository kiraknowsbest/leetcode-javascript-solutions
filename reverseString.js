// https://leetcode.com/problems/reverse-string/
const reverseString = s => {
  let result = "";
  // verify s is of type string
  if (typeof s !== 'string') return null;
  // loop over s backwards
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
};