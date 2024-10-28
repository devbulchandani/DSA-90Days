function fibonacci(n) {
    let fibo = [0, 1]
    for (let i = 2; i < n + 1; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}

function fib(n) {
    if (n <= 1){
        return n
    }
    return fib(n-1) + fib(n-2);
}


console.log(fibonacci(10))
console.log(fib(10));