function upperBound(arr, x, n) {
    let low = 0, high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        if (arr[mid] > x) {
            ans = mid;
            // look for a smaller index on the left
            high = mid - 1;
        }
        else {
            low = mid + 1; // look on the right
        }
    }
    return ans;
}

function countSmall(matrix, m, x) {
    let cnt = 0;
    for (let i = 0; i < m; i++) {
        cnt += upperBound(matrix[i], x, m);
    }
    return cnt;
}

function median(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let low = 0; high = 2000;
    let req = Math.floor((m * n) / 2);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let noOfSmall = countSmall(matrix, m, mid);
        if (noOfSmall <= req) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}


let M = [[1, 3, 5],
[2, 6, 9],
[3, 6, 9]]

console.log(median(M));