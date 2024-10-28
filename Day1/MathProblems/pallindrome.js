function reverse(n){
    let reversed = 0;
    while (n > 0){
        reversed = (10 * reversed) + (n % 10);
        n = Math.floor(n/10)
    }
    return reversed;
}

function checkPallindrome(x){
    if (x === reverse(x)){
        return true;
    }
    return false;
}

console.log(checkPallindrome(120));