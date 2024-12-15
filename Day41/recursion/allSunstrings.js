function solve(i, nums, current, result) {
    if (i === nums.length) {
        result.push([...current]); 
        return;
    }

    current.push(nums[i]);
    solve(i + 1, nums, current, result);

    current.pop();
    solve(i + 1, nums, current, result);
}

function subsets(nums) {
    const result = [];
    solve(0, nums, [], result);
    return result;
}

const nums = [1, 2, 3];
const output = subsets(nums);

console.log("Output:", output);
