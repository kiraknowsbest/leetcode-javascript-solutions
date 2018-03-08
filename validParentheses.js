// https://leetcode.com/problems/valid-parentheses/
const isValid = s => {
<<<<<<< HEAD
  let stack = [];
  let mapping = {
    '{':'}',
    '[':']',
    '(':')'
  };
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    if (mapping[cur]) {
      stack.push(cur);
    } else {
      if (mapping[stack.pop()] !== cur) return false;
    }
  }
  return stack.length === 0;
};