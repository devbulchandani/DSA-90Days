function missingK(vec, n, k) {
    for (let i = 0; i < n; i++) {
        if (vec[i] <= k) {
            k++;
            console.log(i, vec[i], k);
        }
        else break;
    }
    return k;
}

function missing(arr, k) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let missing = arr[mid] - (mid + 1);
        if (missing < k){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low + k;
}

let vec = [2, 3, 4, 7, 11];
let n = vec.length, k = 5;
let ans = missing(vec, n, k);
console.log("The missing number is:", ans);