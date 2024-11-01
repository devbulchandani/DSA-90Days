function allDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }

    return divisors
} //O(n)

function divisor(n){
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            divisors.push(i);
            if (i !== n/i){
                divisors.push(n/i);
            }
        }
    }
    return divisors;
}

console.log(divisor(36));