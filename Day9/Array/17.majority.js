function majority(arr) {
    const n = arr.length;
    const freq = new Map();
    for (let i = 0; i < n; i++) {
        freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
        if (freq.get(arr[i]) > Math.floor(n / 2)) {
            return arr[i];
        }
    }
}

function Majority(arr) {
    const n = arr.length;
    const element = arr[0];
    const count = 0;
    let i = 0;
    for (let i = 0; i < n; i++) {
        if (count === 0) {
            count = 1;
            element = arr[i]
        } else if (arr[i] === element) {
            count++;
        } else {
            count--;
        }
    }
    let freq = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === element) {
            freq++;
        }
    }
    if (freq > Math.floor(n / 2)) {
        return element;
    }
    return -1;
}

console.log(majority([3, 2, 4, 3, 3]));