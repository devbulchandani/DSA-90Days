function hashing(arr) {
    let hash = [];
    let n = arr.length;
    let maxi = arr[0];
    for (let i = 0; i < n; i++) {
        maxi = Math.max(maxi, arr[i]);
    }

    hash.length = maxi + 4;
    hash.fill(0);

    for (let i = 0; i < n; i++) {
        hash[arr[i]]++;
    }
    return hash;
}

function once(arr) {
    const Hash = hashing(arr);
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (Hash[arr[i]] === 1) {
            return arr[i];
        }
    }
}

function findOnce(arr) {
    const freq = new Map();
    for (num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (const [key, value] of freq) {
        if (value === 1) {
            return key;
        }
    }
}

function find(arr){
    let xor = 0;
    let n = arr.length
    for (let i = 0;i < n; i++){
        xor = xor ^ arr[i];
    }
    return xor
}

console.log(find([4,1,2,1,2]));