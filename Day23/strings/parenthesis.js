let removeOuterParentheses = function (s) {
    let ans = ''
    let cnt = 0
    for (ch of s) {
        if (ch === '(') {
            if (cnt > 0) ans += ch;
            cnt++;
        }
        else {
            cnt--;
            if (cnt > 0) ans += ch;
        }
    }
    return ans
};

console.log(removeOuterParentheses("(()())(())"));