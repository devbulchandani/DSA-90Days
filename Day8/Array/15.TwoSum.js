function TwoSum(arr, k){
    let n = arr.length;
    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            if (arr[i] + arr[j] === k){
                return [i, j]
            }
        }
    }
}


function twoSum(arr, target){
    const hash = new Map();
    let n = arr.length;
    for (let i = 0; i < n; i++){
        let number = target - arr[i];
        if (hash.has(number)){
            return [hash.get(number), i]
        }
        hash.set(arr[i], i)
    }
}


function twosum(arr, target){
    arr.sort();
    let n = arr.length;
    let i = 0;
    let j = n-1;
    while (i < j){
        if (arr[i] + arr[j] < target){
            i++;
            console.log("i:", i);
            console.log("j:", j);
        }
        if (arr[i] + arr[j] > target){
            j++;
            console.log("i:", i);
            console.log("j:", j);
        }
        if (arr[i] + arr[j] === target) {
            console.log(arr[i], arr[j]);
            return [i, j]
        }
    }
    
}

console.log(twosum([3,2,4], 6));