//Divide and merge
//Divide the array into two parts
//Divide these parts again
//and keep dividng until single numbers arrays are left
//and mrge them one by one in sorted way 

// mergeSort(arr, low, high) {
//     if (low >= high) : return
//     mid = (low + high) / 2;
//     mergeSort(arr, low, mid);
//     mergeSort(arr, mid + 1, high);
//     merge(arr, low, mid, high)
// }

//merge(arr, low, mid, high){
//    result = []
//    left = low;
//    right = mid + 1;
//    while (left <=mid && right <=high):{
//      if(arr[left] <= arr[right]): result.add(arr[left]) left++
//      else result.add(arr[right]) right ++
//    }
//    while (left <= mid){
//        result.add(arr[left])
//        left++
//    }
//    while (right <= high){
//        result.add(arr[right])
//        right++
//    }
//    for (i low->high){
//    arr[i] = result[i -low]
//  }
//}


function mergeSort(arr, low, high) {
    if (low === high) {
        return;
    }
    let mid = Math.floor((low + high) / 2)
    // console.log(mid);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high)
}

function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }
    console.log(temp);
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low]
    }
} //O(nlogn)
//space - O(n)


arr = [5,4,3,2,1];
console.log(arr);
mergeSort(arr, 0, 4);
console.log(arr);