function search(nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            low = mid + 1;
        }
        if (nums[mid] > target) {
            high = mid - 1;
        }
    }
    return -1;
}

function Search(nums, low, high, target) {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
        while (nums[mid - 1] === nums[mid]) {
            mid--
        }
        return mid;
    } else if (nums[mid] < target) {
        return Search(nums, mid + 1, high, target);
    }
    else{
        return Search(nums, low, mid -1, target)
    }
}


let arr = [1,2,3,6,8,8,9,10]


console.log(Search(arr, 0, arr.length -1, 8));