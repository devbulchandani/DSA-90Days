function subArray(arr, k) {
    let n = arr.length;
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0, 1)
    for (let i = 0; i < n; i++) {
        sum+= arr[i];
        if (map.has(sum -k)){
            count += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}

arr = [1,2,3];
console.log(subArray(arr, 3));