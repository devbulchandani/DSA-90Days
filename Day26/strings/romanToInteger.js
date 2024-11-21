function romanToInteger(s) {
    let n = s.length;

    let sum = 0;
    for (let i = 0; i < n; i++) {
        switch (s[i]) {
            case 'I':
                if ((s[i + 1] == 'V' || s[i + 1] == 'X')) {
                    sum--;
                    break;
                }
                sum++;
                break;
            case 'V':
                sum += 5;
                break;
            case 'X':
                if ((s[i + 1] == 'L' || s[i + 1] == 'C')) {
                    sum -= 10;
                    break;
                }
                sum += 10;
                console.log(sum);
                break;
            case 'L':
                sum += 50;
                break;
            case 'C':
                if ((s[i + 1] == 'D' || s[i + 1] == 'M')) {
                    sum -= 100;
                    break;
                }
                sum += 100;
                break;
            case 'D':
                sum += 500;
                break;
            case 'M':
                sum += 1000;
                break;
        }
    }

    return sum;
}


function romanTOInteger(s){
    const romanNumbers = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    total = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (romanNumbers[s[i]] >= romanNumbers[s[i + 1]]) {
            total += romanNumbers[s[i]];
        } else {
            total -= romanNumbers[s[i]];
        }
    }

    total += romanNumbers[s.slice(-1)];

    return total;
}

let s = "MCMXCIV";
console.log(romanToInteger(s));