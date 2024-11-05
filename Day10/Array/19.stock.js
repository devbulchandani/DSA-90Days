function stock(arr) {
    let maxSub = arr[1] - arr[0];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            maxSub = Math.max(maxSub, arr[j] - arr[i])
        }
    }
    return maxSub <= 0 ? 0 : maxSub;
}

function profit(arr) {
    let min = arr[0];
    let maxPro = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] < min){
            min = arr[i];
        }
        else if ((arr[i] - min ) > maxPro){
            maxPro = arr[i] - min;
        }
    }
    return maxPro;
}



console.log(profit([7, 1, 5, 3, 6, 4]));