function findDivisor(nums, threshold) {
    let n = nums.length;
    let low = 1;
    let high = Math.max(...nums);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (isPossible(nums, mid, threshold, n)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

function isPossible(nums, divisor, threshold, n) {
    sum = 0
    for (let i = 0; i < n; i++) {
        sum += Math.ceil(nums[i] / divisor);
    }
    return sum <= threshold;
}

let nums = [44,22,33,11,1], threshold = 5

console.log(findDivisor(nums, threshold));
