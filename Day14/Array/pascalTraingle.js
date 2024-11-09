function pascalTriangle(numRows) {
    let pascalTriangle = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        let row = [];
        row[0] = 1
        if (row.length < i ) {
            for (let j = 1; j < i ; j++) {
                row[j] = pascalTriangle[i -1][j -1] + pascalTriangle[i -1][j]
            }
        }
        row[i] = 1
        pascalTriangle[i] = (row)
    }
    return pascalTriangle;
}


console.log(pascalTriangle(5));