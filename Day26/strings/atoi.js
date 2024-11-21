function atoi(s) {
    let n = s.length;
    s = s.trim();
    let sign = s[0] === '-' ? -1 : 1;
    if (s[0] === '+' || s[0] === '-') s = s.substring(1, n)
    let result = '';
    for (let i = 0; i < n; i++) {
        if (s[i] !== '0') {
            s = s.substring(i, n);
            break;
        }
    }
    for (let i = 0; i < n; i++) {
        if (!isNaN(s[i]) && s[i] !== ' ') {
            result += s[i]
        } else {
            break;
        }
    }
    result = result === '' ? 0 : sign * parseInt(result);
    if (result > (Math.pow(2, 31) - 1)) return (Math.pow(2, 31) - 1);
    else if (result < Math.pow(-2, 31)) return Math.pow(-2, 31);
    return result
}

function atoi(s) {

    let result = 0;

    let i = 0;
    let isNeg = false;


    while (i < s.length && s[i] === " ") {
        i++;
    }

    if (i < s.length && (s[i] === "+" || s[i] === "-")) {
        isNeg = s[i] === "-";
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));

        if (result > 2 ** 31 - 1) {
            return isNeg ? -(2 ** 31) : 2 ** 31 - 1;
        }

        i++;
    }

    return isNeg ? -result : result;
}

console.log(atoi("   +0 123"));