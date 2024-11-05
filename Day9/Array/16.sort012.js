function sort(arr) {
    let n = arr.length;
    let zeroes = 0;
    let ones = 0;
    let twos = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] == 0) zeroes++;
        else if (arr[i] == 1) ones++;
        else twos++;
    }
    for (let i = 0; i < zeroes; i++) {
        arr[i] = 0;
    }
    for (let i = zeroes; i < zeroes + ones; i++) {
        arr[i] = 1;
    }
    for (let i = zeroes + ones; i < n; i++) {
        arr[i] = 2;
    }
}

function Sort(arr) {
    let n = arr.length;
    let low = 0;
    let mid = 0;
    let high = n - 1;
    while (mid <= high) {
        if (arr[mid] === 0) {
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        }

        else if (arr[mid] === 1) {
            mid++;
        }

        else {
            temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
}

let arr = [2, 0, 1];
Sort(arr)
console.log(arr);