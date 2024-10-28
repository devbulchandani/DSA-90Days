function reverseNumber(n){
    let sign = n < 0 ? -1 : 1
    let reversed = 0;
    n = Math.abs(n)
    while (n > 0){
        let ld = n%10
        if(reversed > (2147483647 - ld) / 10) return 0;
        reversed = (reversed * 10) + ld;
        n = Math.floor(n/10);
    }
    return sign * reversed
} //O(logN) base-10

const result = reverseNumber(-21);
console.log("Reverse Number: ", result);

