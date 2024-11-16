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

function search2D(matrix, target) {
    let n = matrix.length;
    let i = 0;
    while (i < n && matrix[i][0] <= target) {
        if (matrix[i][0] === target) return true;
        if (search(matrix[i], target)) {
            return true
        }
        i++;
    }
    return false
}


function Search2D(matrix, target){
    let n = matrix.length;
    let m = matrix[0].length;

    let row = 0;
    let column = m - 1;

    while (row < n && column >= 0){
        if (matrix[row][column] === target){
            return true;
        }
        else if (matrix[row][column] > target) column--;
        else row ++;
    }
    return false;
}


let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
console.log(Search2D(matrix, target));