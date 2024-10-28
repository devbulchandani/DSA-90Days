function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact;
} //O(n)

function factorial2(n) {
    if (n === 0) return 1;
    return n * factorial2(n-1);
}

// console.log(factorial2(5));


function findFact(n){
    let facts = ""
    let fact = 1;
    let i = 1;
    while (fact <= n){
        facts += fact + " ";
        i++;
        fact = factorial(i);
    }
    return facts;
}
console.log(findFact(121));

