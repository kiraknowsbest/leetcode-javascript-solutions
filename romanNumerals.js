// https://leetcode.com/problems/roman-to-integer/
const romanToInt = s => {
    let total = 0;
    let mapping = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && mapping[s[i]] < mapping[s[i+1]]) {
            total += mapping[s[i+1]] - mapping[s[i++]]
        } else {
            total += mapping[s[i]]
        }
    }
    return total
};