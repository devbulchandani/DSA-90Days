function quickSort(arr, low, high) {
    if (low < high) {
        partitionIndex = partition(arr, low, high);
        console.log("Partition:", partitionIndex);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
} //O(nlogn), space- O(1);

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i] <= pivot && i <= high -1) {
            i++;
            //console.log("i:", i);
            //console.log("j:", j);
        }
        while (arr[j] > pivot && j >= low + 1) {
            j--;
            //console.log("i:", i);
            //console.log("j:", j);
        }

        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            //console.log(arr);
        }
    }
    //console.log(arr);
    temp = pivot;
    arr[low] = arr[j];
    arr[j] = pivot;
    //console.log(arr);
    return j;
} 

let arr = [1, 5, 4, 3, 2];
//console.log(arr);
quickSort(arr, 0, arr.length - 1);
//console.log(arr);