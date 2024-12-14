function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

function isGood(str) {
    let n = str.length;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0 && parseInt(str[i]) % 2 !== 0) {
            return false;
        } else if (i % 2 === 1 && !isPrime(parseInt(str[i]))) {
            return false
        }
    }
    return true;
}

function noOfGood(n){
    let cnt = 0;
    let i = 0;
    while (true){
        let num = i.toString()
        if (isGood(num)){
            cnt++;
        }
        i++;
        if (num.length > n){
            return cnt;
        }
    }
}

console.log(noOfGood(4));