function rotateKLeft(arr, k) {
    let temp = [];
    let n = arr.length;
    for (let i = 0; i < k; i++) {
        temp.push(arr[i]);
    }
    for (let i = 0; i < n - k; i++) {
        arr[i] = arr[i + k];
    }
    for (i = n - k; i < n; i++) {
        arr[i] = temp[i - (n - k)]
    }
} // time- O(n + k), space - O(k)

function rotateKRight(arr, k) {
    let temp = [];
    let n = arr.length;
    for (let i = n - k; i < n; i++) {
        temp.push(arr[i])
        // console.log("temp: ", temp);
    }
    for (i = n - 1; i >= k; i--) {
        arr[i] = arr[i - k]
    }
    for (i = 0; i < k; i++) {
        arr[i] = temp[i]
    }
} // time- O(n + k), space - O(k)

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
} //O(n/2) = O(n)

function rotateLeft(arr, k) {
    let n = arr.length;
    while (n < k) {
        k = k - n
    }
    if (k === n) {
        return
    }
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1)
    reverse(arr, 0, n - 1)
} //time - (n), space- O(1)

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
}//time - (n), space- O(1)

arr = [1];
rotateRight(arr, 2);
console.log(arr);


