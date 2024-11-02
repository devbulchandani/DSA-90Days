function longestSub(arr, l) {
    let n = arr.length;
    let len = 0;
    for (let i = 0; i < n; i++) {
        for (j = i; j < n; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[k];
                if (sum === l)
                    len = Math.max(len, j - i + 1);
            }
        }
    }
    return len;
}


function longestSubArray(arr, k) {
    let n = arr.length;
    let len = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            if (sum === k)
                len = Math.max(len, j - i + 1);
        }
    }
    return len;
}


function subArray(arr, k) {
    const hash = new Map();
    let sum = 0;
    let len = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (sum === k) {
            len = Math.max(len, i + 1);
        }
        let rem = sum - k;
        if (hash.has(rem)) {
            len = Math.max(len, i - hash.get(rem))
        }
        if (!hash.has(sum)) {
            hash.set(sum, i)
        }
    }
    return len
}


function longestPositive(arr, k) {
    let i = 0;
    let j = 0;
    let sum = arr[0];
    let len = 0;
    let n = arr.length;
    while (j < n) {
        while (i <= j && sum > k) {
            sum -= arr[i];
            i++;
        }
        if (sum === k) {
            len = Math.max(len, j - i + 1)
        }
        j++;
        if (j < n) {
            sum += arr[j];
        }
    }
    return len;
}

arr = [2, 3, 5, 1, 9]
console.log(longestPositive(arr, 10));