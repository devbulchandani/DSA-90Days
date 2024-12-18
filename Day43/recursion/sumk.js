function generateSubSequenceUtil(i, nums, current, sum, final, result) {
    if (i === nums.length) {
        if (sum === final) {
            result.push([...current])
        }
        return;
    }
    current.push(nums[i]);
    sum += nums[i];
    generateSubSequenceUtil(i + 1, nums, current, sum, final, result);
    current.pop(nums[i])
    sum -= nums[i];
    generateSubSequenceUtil(i + 1, nums, current, sum, final, result);
}

function generateSubSequence(nums, sum) {
    let result = [];
    generateSubSequenceUtil(0, nums, [], 0, sum, result);
    return result;
}

let nums = [1,2,1], target = 2;
console.log(generateSubSequence(nums, target));