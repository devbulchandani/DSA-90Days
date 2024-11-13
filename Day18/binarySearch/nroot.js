function findNroot(n, m) {
    let low = 1;
    let high = m;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let val = mid ** n;
        if (val === m) {
            return mid
        }
        else if (val < m){
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(findNroot(2,9));