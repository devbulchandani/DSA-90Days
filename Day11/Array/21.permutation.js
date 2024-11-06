function reverse(arr,p1, p2) {
    while (p1 < p2) {
        let temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
        p1 += 1;
        p2 -= 1;
    }
    return arr;
}

function nextPermutation(arr){
    let n = arr.length;
    let breakIndex = -1;
    for (let i = n-2; i >= 0; i--){
        if (arr[i] < arr[i + 1]){
            breakIndex = i;
            break;
        }
    }

    if (breakIndex === -1){
        reverse(arr, 0, n-1)
        return arr;
    }

    for (let i = n - 1; i >= 0; i--){
        if (arr[i] > arr[breakIndex]){
            temp = arr[i];
            arr[i] = arr[breakIndex];
            arr[breakIndex] = temp;
            break;
        }
    }
    
    reverse(arr, breakIndex + 1, n-1)
    return arr;
}

console.log(nextPermutation([2,1,5,4,3,0,0]));