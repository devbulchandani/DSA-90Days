function linearSearch(arr, target) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

function hashing(arr){
    let hash = [];
    let n = arr.length
    hash.length = n + 1;
    hash.fill(0);

    for (let i = 0; i < n; i++){
        hash[arr[i]] += 1;
    }

    return hash
} 

function missing(arr) {
    let n = arr.length;
    for (let i = 0; i <= n + 1; i++){
        if (linearSearch(arr, i) === -1){
            return i;
        }
    }
    return -1;
}

function findMissing(arr){
    const hash = hashing(arr);
    let n = arr.length;
    for (let i = 0; i < n+1; i++){
        if (hash[i] === 0){
            return i;
        }
    }
    return -1;
}

function missingNumber(arr){
    let sum = 0;
    let n = arr.length;
    for (let i=0; i < n ; i++){
        sum += arr[i];
    }
    const nSum = n*(n + 1)/2;
    return nSum - sum;
}

function findMissingNumber(arr){
    let n = arr.length;
    let xor1 = 0;
    let xor2 = 0;
    for (let i = 0; i <= n; i++){
        xor1 = xor1 ^ i;
        xor2 = xor2 ^ arr[i]
    }
    return xor1 ^ xor2
}

console.log(findMissingNumber([0]));
