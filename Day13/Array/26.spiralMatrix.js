function spiralMatrix(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    console.log(m, n);
    let result = []
    let top = 0;
    let bottom = n - 1
    let left = 0;
    let right = m - 1
    while (top <= bottom && left <= right) {
        console.log('1');
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j])
        }
        top++;
        for (let j = top; j <= bottom; j++) {
            result.push(matrix[j][right])
        }
        right--;

        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j])
            }
            bottom--;
        }

        if (left <= right) {
            for (let j = bottom; j >= top; j--) {
                result.push(matrix[j][left])
            }
            left++;
        }
    }

    return result;
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralMatrix(matrix));