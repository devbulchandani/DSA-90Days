function reverse(arr) {
    length = arr.length;
    let newArr = [];
    for (let i = 0; i < length; i++) {
        newArr.push(arr.pop());
    }
    return newArr;
}

function reverse2(arr) {
    let p1 = 0;
    let p2 = arr.length - 1;
    while (p1 < p2) {
        let temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
        p1 += 1;
        p2 -= 1;
    }
    return arr;
}

function reverse3(arr, start, end) {
    if (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        reverse3(arr, start + 1, end - 1);   
    }
    return arr;
}
function revrse4(arr, start, emd){
    if (start < end) {
        let temp = arr [start];
        arr[start] = arr[end];
        arr[end] = temp;
        reverse4(arr, start + 1, end -1);
    }
    return arr;
}

console.log(reverse3([5, 4, 3, 2, 1], 0, 4));