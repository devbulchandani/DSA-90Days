function rotate(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let finalMatrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            finalMatrix[i][j] = matrix[n - j -1][i];
        }
        }
        return finalMatrix;
}



function rotateMatrix(matrix){
    let n = matrix.length;
    let m = matrix[0].length;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < i; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
            console.log(matrix);
        }
    }
    for (let j = 0; j < m; j++){
        matrix[j].reverse();
    }
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotateMatrix(arr)
console.log(arr);