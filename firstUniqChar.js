// https://leetcode.com/problems/first-unique-character-in-a-string/
const firstUniqChar = s => {
    for (var i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
    }
    return -1;
};