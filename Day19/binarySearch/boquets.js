function possible(arr, day, m, k) {
    let n = arr.length;
    let cnt = 0;
    let noOfB = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] <= day) {
            cnt++;
        } else {
            noOfB += Math.floor(cnt / k);
            cnt = 0;
        }
    }
    noOfB += Math.floor(cnt / k);
    return noOfB >= m
}

function minDay(bloomDay, m, k) {
    let val = m * k;
    let n = bloomDay.length;
    if (val > n) return -1
    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (possible(bloomDay, mid, m, k)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

let bloomDay = [7, 7, 7, 7, 12, 7, 7], m = 2, k = 3
console.log(minDay(bloomDay, m, k));