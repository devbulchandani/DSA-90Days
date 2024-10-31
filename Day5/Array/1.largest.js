function largest(arr){
    let max = arr[0];
    let n = arr.length;
    for ( let i = 0; i < n; i++){
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

console.log(largest([2,5,1,3,0]));