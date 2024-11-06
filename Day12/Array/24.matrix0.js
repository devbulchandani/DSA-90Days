function matrix0(matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
            if (matrix[i][j] === 0) {
                for (let k = 0; k < rows; k++) {
                    if (matrix[k][j] !== 0) {
                        matrix[k][j] = -1;
                    }
                }
                for (let k = 0; k < columns; k++) {
                    if (matrix[i][k] !== 0) {
                        matrix[i][k] = -1;
                    }
                }
            }
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] === -1) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix
}

function zeroMatrix(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let rows = new Int32Array(n).fill(0);
    let cols = new Int32Array(m).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = 1;
                cols[j] = 1;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (rows[i] || cols[j]) {
                matrix[i][j] = 0;
                console.log(matrix);
            }
        }
    }
    return matrix;
}

function zeroMat(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    let col0 = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;

                if (j === 0) {
                    col0 = 0;
                } else {
                    matrix[0][j] = 0;
                }
                console.log("col 0:", col0);
                console.log(matrix);
            }
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] !== 0) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                    console.log(matrix);
                }
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
            console.log(matrix);
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
            console.log(matrix);
        }
    }
    return matrix
}

const matrix =
    [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
    ];

console.log(zeroMat(matrix));