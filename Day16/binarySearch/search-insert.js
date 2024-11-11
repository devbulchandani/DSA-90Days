function searchInsert(nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((high + low)/2)
        if (nums[mid] > target) {
            if (nums[mid - 1] < target) {
                return mid;
            }
            high = mid - 1;
        } else if (nums[mid] === target){
            return mid
        } else {
            if (mid === n - 1){
                return n
            }
            low = mid + 1;
        }
    } 
    return 0;
}

console.log(searchInsert([1,3,5,6], 0));