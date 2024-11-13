function findSqrt(n) {
    if (n === 1) return 1;
    let low = 1;
    let high = n / 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if ((mid * mid <= n) && ((mid + 1) * (mid + 1) > n)) {
            return mid;
        }
        else if (mid * mid < n) {
            low = mid + 1;
        }
        else if (mid * mid > n) {
            high = mid - 1;
        }
    }
    return -1;
}

function findSqrt(n) {
    let low = 1;
    let high = n;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let val = mid * mid;
        if (val <= n){
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return high;
}


console.log(findSqrt(16));