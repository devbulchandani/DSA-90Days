function findMax(matrix, n, mid) {
    let max = matrix[0][mid];
    let index = 0;
    for (let i = 0; i < n; i++) {
        console.log(matrix[i][mid]);
        if (matrix[i][mid] > max) {
            max = matrix[i][mid];
            index = i;
        }
    }
    return index;
}


function peak(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let low = 0; let high = m - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = findMax(matrix, n, mid);
        let ele = matrix[row][mid]
        console.log(row, ele);
        let left = mid - 1 >= 0 ? matrix[row][mid - 1] : -1;
        let right = mid + 1 < m ? matrix[row][mid + 1] : -1;
        if (ele > left && ele > right) {
            return [row, mid];
        } else if (ele < left) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return [-1, -1];
}

let mat = [
    [3, 47, 23, 40, 28, 18, 41, 4, 5],
    [43, 41, 26, 24, 33, 48, 44, 11, 2],
    [10, 39, 44, 29, 3, 9, 5, 16, 50],
    [42, 24, 25, 37, 39, 10, 44, 29, 24],
    [24, 29, 49, 5, 37, 9, 34, 24, 26],
    [21, 42, 18, 16, 8, 2, 48, 12, 32],
    [34, 25, 36, 8, 17, 50, 17, 46, 29]
]


console.log(peak(mat));