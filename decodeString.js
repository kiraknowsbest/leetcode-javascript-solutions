// https://leetcode.com/problems/decode-string/description/
var decodeString = function (s) {
    let res = "";
    // keep reference to how many of each snippet
    var countStack = [];
    // keep reference of each snippet
    var resStack = [];
    var idx = 0;
    while (idx < s.length) {
        // if first character is a number
        if (s[idx].charCodeAt(0) > 47 && s[idx].charCodeAt(0) < 58) {
            // resetting count
            var count = '';
            // find the rest of the number
            while (s[idx].charCodeAt(0) > 47 && s[idx].charCodeAt(0) < 58) {
                count += s[idx];
                idx++;
            }
            // parse the number
            count = parseInt(count)
            // add number to count stack
            countStack.push(count);
        }
        else if (s[idx] === '[') {
            // add the current snippet to the stack, a new one is starting
            resStack.push(res);
            // reset res
            res = "";
            idx++;
        }
        else if (s[idx] === ']') {
            // get reference to last snippet
            var temp = resStack.pop();
            // get reference to last int
            var repeatTimes = countStack.pop();
            // add res * repeatTimes to temp
            for (var i = 0; i < repeatTimes; i++) {
                temp += res;
            }
            // store temp
            res = temp;
            idx++;
        }
        else {
            // a normal character, it is included in current snippet
            res += s.charAt(idx++);
        }
    }
    return res;
};
