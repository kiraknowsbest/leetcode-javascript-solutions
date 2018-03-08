// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
const lengthOfLongestSubstring = s => {
	// using sliding window technique
  const n = s.length;
  let longest = 0;
  let characterAndMaxLengthPairs = {};
  for (let j = 0, i = 0; j < n; j++) {
    if (characterAndMaxLengthPairs.hasOwnProperty(s.charAt(j))) {
      i = Math.max(characterAndMaxLengthPairs[s.charAt(j)], i);
    }
    longest = Math.max(ans, j - i + 1);
    characterAndMaxLengthPairs[s.charAt(j)] = j + 1;
  }
  return longest;
};