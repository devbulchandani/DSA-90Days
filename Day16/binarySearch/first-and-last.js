function searchLast(nums, target, n) {
    let result = -1
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            result = mid;
            low = mid + 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1
        }
    }
    return result;
}

function searchFirst(nums, target, n) {
    let result = -1
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            result = mid;
            high = mid - 1
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1
        }
    }
    return result;
}

function searchFirstAndLast(nums, target){
    let n = nums.length;
    return [searchFirst(nums, target, n), searchLast(nums, target, n)]
}
console.log(searchFirstAndLast([5,7,7,8,8,10], ));