function possible(weights, weight, days, n) {
    let count = 1;
    let w = 0;
    for (let i = 0; i < n; i++) {
        if (w + weights[i] > weight) {
            count++;
            w += weights[i];
        } else {
            w += weights[i];
        }
        
    }
    console.log("Days : ", count);
    return count <= days;
}

function noOfDays(weights, days) {
    let n = weights.length;
    let low = -Infinity;
    for (let i = 0; i < n; i++) {
        low = Math.max(low, weights[i]);
    }
    let high = 0;
    for (let i = 0; i < n; i++) {
        high += weights[i];
    }
    console.log(low, high);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        console.log(low, high, mid);
        if (possible(weights, mid, days, n)){
            high = mid - 1;
        }else {
            low = mid + 1;
        }
    }
    return low;
}



let weights = [1,2,3,4,5,6,7,8,9,10], days = 5
console.log(noOfDays(weights, days));

// Not able to solve it now, will come back later