function one(arr) {
    let ones = 0;
    let tempOnes = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 1) {
            tempOnes++;
            if (tempOnes > ones) {
                ones = tempOnes;
            }
            if (arr[i + 1] !== 1) {
                tempOnes = 0;
            }
        }
    }
    return ones;
}

console.log(one([1, 0, 1, 1, 0, 1]));