function findRotatedMin(nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log(low, mid, high);
        if (nums[low] <= nums[mid] && nums[mid] <= nums[high]){
            return nums[low];
        }
        else if (mid === high){
            return nums[mid];
        }
        else if (nums[mid] <= nums[mid -1] && nums[mid] <= nums[mid + 1]){
            return nums[mid];
        }
        else if (nums[mid] >= nums[low] && nums[mid] >= nums[high]){
            low = mid + 1;
        }
        else if (nums[mid] <= nums[low] && nums[mid] <= nums[high]){
            high = mid - 1;
        }
    }
}

function findRotatedMin(nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    let ans = Infinity;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[low] <= nums[high]){
            ans = Math.min(ans, nums[low]);
            break;
        };
        if (nums[low] <= nums[mid]){
            ans = Math.min(ans, nums[low]);
            low = mid + 1;
        } else {
            ans = Math.min(ans, nums[mid]);
            high = mid - 1;
        }
    }
    return ans;
}


console.log(findRotatedMin([2,1]));