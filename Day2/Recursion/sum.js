let sum = 0;

function Sum(n){
    if (n === 0){
        return;
    }
    sum+=n;
    Sum(n-1);
    return sum;
}

function sum2(n){
    if ( n=== 0){
        return 0;
    }
    return n + sum2(n-1);
}

console.log(sum2(5));