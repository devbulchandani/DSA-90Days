//1.Get the minimum element of the entire array
//2.Swap it with the first element of the array. Now this portion is sorted
//3.Now take the unsorted part and repeat the same process.

//for(i = 0; i < n-2; i++):
//    min = i;
//    for (j = i; j < n; j++):
//        if arr[j] < arr[min]: min = j;
//        swap(i, min);

function selectionSort(arr) {
    n = arr.length;
    for (let i = 0; i <= n - 2; i++) {
        min = i;
        for (let j = i; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
} //O(n^2)

arr = [1, 2, 4, 5, 3];
console.log(arr);
selectionSort(arr);
console.log(arr);