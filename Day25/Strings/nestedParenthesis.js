function nestingDepth(s) {
    let n = s.length;
    let cnt = 0;
    let maxCount = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            cnt++;
            maxCount = Math.max(cnt, maxCount)
        }
        else if (s[i] === ')') {
            cnt--
        }
    }
    return maxCount;
}

let s = "(1)+((2))+(((3)))"

console.log(nestingDepth(s));