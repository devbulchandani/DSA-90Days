function isSorted(arr) {
    let n = arr.length;
    for (i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true;
} //O(n)

function reverse(arr, i, j) {
    let p1 = i;
    let p2 = j;
    while (p1 < p2) {
        let temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
        p1 += 1;
        p2 -= 1;
    }
}

function rotateRight(arr, k) {
    let n = arr.length;
    while (n < k) {
        k = k - n
    }
    if (k === n) {
        return
    }

    reverse(arr, n - k, n - 1);
    reverse(arr, 0, n - k - 1);
    reverse(arr, 0, n - 1)
}



function isRotated(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        rotateRight(arr, 1)
        if (isSorted(arr)) {
            return true;
        }
    }
    return false;
}

function isRotate(arr) {
    let n = arr.length
    let pivot = 0;
    if (isSorted(arr)) {
        return true;
    }
    for (let i = 0; i < n; i++) {
        if (i === n - 1) {
            if (arr[i] <= arr[0] && arr[i] <= arr[i - 1]) {
                if (arr[i] <= arr[pivot] || pivot === 0) {
                    pivot = i;
                }
            }
        }

        if (arr[i] <= arr[i + 1] && arr[i] <= arr[i - 1]) {
            if (arr[i] < arr[pivot] || pivot === 0) {
                pivot = i;
            }
        }
    }
    console.log(pivot);
    for (let i = pivot; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }

    for (let i = 0; i < pivot - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // console.log(i);
            return false
        }
    }

    if (arr[n - 1] > arr[0]) {
        return false;
    }
    return true;
}


console.log(isRotate([2,2,3,4,5,2]))