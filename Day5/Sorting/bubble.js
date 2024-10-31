function recursiveBubbleSort(arr, n) {
    if (n === 1) return;
    let didSwap = 0;
    console.log("Runs: ", 6 - n);
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            didSwap = 1;
        }
        console.log(arr);
    }
    if (didSwap === 0) {
        return;
    }
    console.log("");
    recursiveBubbleSort(arr, n - 1);
}// O(n^2), best - O(n)

arr = [1,2,3,4,5];
console.log(arr);
bubbleSort(arr);
console.log(arr);