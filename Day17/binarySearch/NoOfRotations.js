function findRotation(arr) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[low] <= arr[mid] && arr[mid] <= arr[high]) {
            return low ;
        }
        else if (mid === high) {
            return mid ;
        }
        else if (arr[mid] <= arr[mid - 1] && arr[mid] <= arr[mid + 1]) {
            return mid ;
        }
        else if (arr[mid] >= arr[low] && arr[mid] >= arr[high]) {
            low = mid + 1;
        }
        else if (arr[mid] <= arr[low] && arr[mid] <= arr[high]) {
            high = mid - 1;
        }
    }
}

console.log(findRotation([4,5,6,7,0,1,2,3]));