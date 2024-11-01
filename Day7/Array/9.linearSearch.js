function linearSearch(arr, target){
    let n = arr.length;
    for (let i = 0; i < n; i++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1,2,3,4,5], 3));
