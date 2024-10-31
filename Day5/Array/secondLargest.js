function secondLargest(arr){
    let max = arr[0];
    let n = arr.length;
    for (let i = 0; i < n; i++){
        if (arr[i] > max) max = arr[i];
    }
    let secondMax = -1
    for (let i = 0; i < n; i++){
        if (arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i];
        }
    }
    return secondMax;
}// O(2N) == O(N)

function secLargest(arr){
    let n = arr.length;
    let max = arr[0];
    let secondMax = -1;

    for (let i = 0; i < n; i++){
        if (arr[i] === max){
            secondMax = max;
            max = arr[i];
        }
        if (arr[i] < max && arr[i] > secondMax){
            secondMax = arr[i];
        }
    }
    return secondMax;
}

console.log(secLargest([1,4,5,6,6,3,5]));