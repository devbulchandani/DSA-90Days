function generateSubSequenceUtil(i, nums, sum, final) {
    if (sum > final) return 0;
    if (i === nums.length) {
        if (sum === final) {
            return 1;
        }
        return 0;
    }
    sum += nums[i];
    let l = generateSubSequenceUtil(i + 1, nums, sum, final);
    sum -= nums[i];
    let r = generateSubSequenceUtil(i + 1, nums, sum, final);
    return l + r;
}

function generateSubSequence(nums, sum) {
    return generateSubSequenceUtil(0, nums, 0, sum);
}

let nums = [1, 2, 1], target = 2;
console.log(generateSubSequence(nums, target));