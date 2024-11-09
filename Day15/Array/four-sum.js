function fourSum(nums, target) {
    let n = nums.length;
    let ans = [];
    if (n < 4) return ans
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                for (let m = k + 1; m < n; m++) {
                    console.log(i, j, k, m);
                    let sum = nums[i] + nums[j] + nums[k] + nums[m];
                    if (sum === target) {
                        console.log(sum);
                        let temp = [nums[i], nums[j], nums[k], nums[m]];
                        temp.sort((a, b) => a - b);
                        ans.push(temp);
                    }
                }
            }
        }
    }
    let set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}


function fourSum(nums, target) {
    let n = nums.length;
    let ans = [];
    if (n < 4) return ans
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let hash = new Set();
            for (let k = j + 1; k < n; k++) {
                let fourth = target - nums[i] - nums[j] - nums[k]
                if (hash.has(fourth)) {
                    let temp = [nums[i], nums[j], nums[k], fourth];
                    temp.sort((a, b) => a - b);
                    ans.push(temp);
                }
                hash.add(nums[k])
            }
        }
    }
    let set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}

function fourSum(nums, target) {
    let ans = [];
    let n = nums.length;
    if (n < 4) return ans;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        for (let m = n - 1; m > i; m--) {
            if (i !== 0 && nums[i] === nums[i - 1]) continue;
            if (m !== n - 1 && nums[m] === nums[m + 1]) continue;
            let j = i + 1;
            let k = m - 1;
            while (j < k) {
                let sum = nums[i] + nums[j] + nums[k] + nums[m];
                if (sum < target) {
                    j++;
                } else if (sum > target) {
                    k--;
                }
                else {
                    let temp = [nums[i], nums[j], nums[k], nums[m]];
                    ans.push(temp);
                    j++;
                    k--;
                    while ((j < k) && (nums[j] === nums[j - 1])) j++;
                    while ((j < k) && (nums[k] === nums[k + 1])) k--;
                }
            }
        }
    }
    return ans;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));