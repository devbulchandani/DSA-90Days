function alternate(arr) {
    let n = arr.length;
    let finalArray = [];
    let pos = [];
    let neg = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] >= 0) {
            pos.push(arr[i]);
        } else {
            neg.push(arr[i]);
        }
    }
    for (let i = 0; i < pos.length; i++) {
        finalArray[2 * i] = pos[i];
        finalArray[2 * i + 1] = neg[i];
    }
    return finalArray;
}



function sign(arr) {
    let pos = 0;
    let neg = 1;
    let n = arr.length;
    let finalArray = new Int32Array(n).fill(0);

    for (let i = 0; i < n; i++){
        if (arr[i] >= 0){
            finalArray[pos] = arr[i];
            pos+=2;
        }
        if (arr[i] < 0){
            finalArray[neg] = arr[i];
            neg+=2;
        }
    }
    return finalArray
}

console.log(sign([-1, 1]));

