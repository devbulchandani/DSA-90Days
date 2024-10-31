function insertionSort(arr, i) {
    if (i === arr.length) {
        return;
    }
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
        console.log(arr);
        j--;
    }
    console.log('');
    insertionSort(arr, i + 1)
}

arr = [1,5,4,3,2];
console.log(arr);
insertionSort(arr, 0);
console.log(arr);