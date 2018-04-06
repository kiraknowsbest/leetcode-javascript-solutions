// https://leetcode.com/problems/excel-sheet-column-number/description/
const getMultiplier = level => level === 0 ? 1 : getMultiplier(level - 1) * 26

var titleToNumber = function(s) {
    let column = level = 0;
    for (let i = s.length - 1; i > -1; i--, level++) column +=  getMultiplier(level) * (s[i].toLowerCase().charCodeAt(0) - 96)
    return column;
};