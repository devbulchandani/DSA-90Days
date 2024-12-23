function generateSubSequenceUtil(i, nums, current, sum, final, result) {
    if (i === nums.length) {
        if (sum === final) {
            result.push([...current])
            return true;
        }
        return false;
    }

    current.push(nums[i]);
    sum += nums[i];
    if (generateSubSequenceUtil(i + 1, nums, current, sum, final, result) === true){
        return true;
    };
    current.pop(nums[i]);
    sum -= nums[i];
    if (generateSubSequenceUtil(i + 1, nums, current, sum, final, result) === true){
        return true;
    };

    return false;
}

function generateSubSequence(nums, sum) {
    let result =[];
    generateSubSequenceUtil(0, nums, [], 0, sum, result);
    return result[0];
}

let nums = [1, 2, 1], target = 2;
console.log(generateSubSequence(nums, target)); 