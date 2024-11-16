function search(nums, target) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return true;
        }
        if (nums[mid] < target) {
            low = mid + 1;
        }
        if (nums[mid] > target) {
            high = mid - 1;
        }
    }
    return false;
}

function searh2D(matrix, target) {
    let n = matrix.length;
    let low = 0;
    let high = n - 1;
    let index = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log(mid);
        if (matrix[mid][0] <= target) {
            index = mid;
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    if (index >= 0) {
        return search(matrix[index], target)
    } else {
        return false
    }

}

let matrix =[[1]], target = 0
console.log(searh2D(matrix, target));
