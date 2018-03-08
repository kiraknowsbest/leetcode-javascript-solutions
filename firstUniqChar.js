// https://leetcode.com/problems/first-unique-character-in-a-string/
const firstUniqChar = s => {
	// check for each value that first instance is not same index as last index
  for (var i = 0; i < s.length; i++) {
  	if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};