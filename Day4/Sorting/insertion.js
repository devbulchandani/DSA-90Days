//Take an element and insert in right place by gradually increasing the range of array

//for (i = 0; i < n-1; i++):
//    j = i;
//    while (j > 0 && arr[j-1] > a[j]): swap, j--


function insertionSort(arr) {
    n = arr.length;
    for (i = 0; i < n; i++) {
        j = i;
        while (j > 0 && (arr[j - 1] > arr[j])) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--
        }
    }
} //O(n^2), best Case - O(n)

arr = [1, 2, 4, 5, 3];
console.log(arr);
insertionSort(arr);
console.log(arr);