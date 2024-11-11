function lowerBound(nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            if (nums[mid - 1] < target) {
                return mid - 1;
            }
            high = mid - 1;
        }
        else {
            return mid
        }
    }
    return -1
}



console.log(lowerBound([1, 2, 8, 10, 11, 12, 19], 5));