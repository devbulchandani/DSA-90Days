function countDigits(n) {
    return Math.floor(Math.log10(n)) + 1;
} // O(1)

function amrstrong(n){
    const k = countDigits(n);
    let m = n;
    result = 0
    while (m > 0){
        d = m %10;
        result += d**3;
        m = Math.floor(m/10);
    }

    return result === n ? true : false
} //O(logn)

console.log(amrstrong(28));