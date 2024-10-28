function countDigits(n) {
    let count = 0;
    while (n > 0) {
        count += 1;
        n = Math.floor(n / 10);
    }
    return count;
} // O(log(n))

function countDigits2(n) {
    return Math.floor(Math.log10(n)) + 1;
} // O(1)

let digits = countDigits2(100);
console.log("Number of digits:", digits);