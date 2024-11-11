function upperBound(arr, k) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > k){
            if (arr[mid - 1] <= k){
                return mid;
            }
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

console.log(upperBound([3,5,8,9,15,19], 9));