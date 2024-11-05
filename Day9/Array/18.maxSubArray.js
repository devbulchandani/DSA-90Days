function maximumSubArray(arr) {
    let n = arr.length;
    let maxSum = arr[0];

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            maxSum = Math.max(sum, maxSum)
        }
    }
    return maxSum;
}

function maxSubArray(arr) {
    let sum = 0;
    let maxSum = arr[0];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (sum < 0) {
            sum = 0;
        }
        sum += arr[i];
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
}


function sumSubArray(arr) {
    let sum = 0;
    let maxSum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        sum = Math.max(arr[i], sum + arr[i]);
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum;
}

console.log(sumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));