function searchRotated(nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1
            } else {
                low = mid + 1;
            }
        }
        if (nums[mid] <= nums[high]){
            if (nums[mid] <= target && target <= nums[high]){
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}

function findRotated(nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target || nums[low] === target || nums[high] === target) {
            return true;
        }

        if (nums[low] === nums[mid] && nums[mid] === nums[high]){
            low ++;
            high --;
            continue;
        }
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1
            } else {
                low = mid + 1;
            }
        }
        if (nums[mid] <= nums[high]){
            if (nums[mid] <= target && target <= nums[high]){
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return false;
}

let arr = [1,0,1,1,1];
console.log(findRotated(arr, 0));
