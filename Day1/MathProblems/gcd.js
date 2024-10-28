function gcd(a, b) {
    let gcd = 1;
    smaller = Math.min(a, b);
    for (i = 1; i <= smaller; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    return gcd;
} //O(n)

function gcd2(a, b) {
    smaller = Math.min(a, b);
    for (i = smaller; i > 0; i--) {
        if (a % i === 0 && b % i === 0) {
            return i
        }
    }
} //O(n) but better in real life cases


function gcd3(a, b) {
    while (a > 0 && b > 0){
        if (a > b){
            a = a%b
        }else {
            b = b % a;
        }
    }

    if ( a === 0){
        return b;
    }
    return a;
}  //O(n) best

console.log(gcd3(10, 15)); 
