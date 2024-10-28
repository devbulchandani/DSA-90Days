function lcm(a, b) {
    let lcm = 0;
    for (i = 1; i <= a * b; i++) {
        if (i % a === 0 && i % b === 0) {
            return i;
        }
    }
} //O(m*n)

function gcd(a, b) {
    while (a > 0 && b > 0) {
        if (a > b) {
            a = a % b
        } else {
            b = b % a;
        }
    }

    if (a === 0) {
        return b;
    }
    return a;
}

function lcm2(a, b) {
    return (a * b) / gcd(a, b);
}//O(min(m, n))


console.log(lcm(5, 10));