function threeSum(nums) {
    let n = nums.length;
    let ans = []
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let temp = [nums[i], nums[j], nums[k]];
                    temp.sort((a, b) => a - b);
                    ans.push(temp);
                }
            }
        }
    }
    let set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}

function triplet(nums) {
    let n = nums.length;
    let ans = [];
    for (let i = 0; i < n; i++) {
        let hash = new Set();
        for (let j = i + 1; j < n; j++) {
            let third = -(nums[i] + nums[j])
            if (hash.has(third)) {
                temp = [nums[i], nums[j], third]
                temp.sort((a, b) => a - b);
                ans.push(temp);
            }
            hash.add(nums[j]);
        }
    }
    let set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}

function ThreeSum(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let ans = [];
    for (let i = 0; i < n; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                let temp = [nums[i], nums[j], nums[k]]
                ans.push(temp);
                j++;
                k--;
                while ((j < k) && (nums[j] === nums[j - 1])) j++;
                while ((j < k) && (nums[k] === nums[k + 1])) k--;
            }
        }
    }
    return ans;
}

console.log(ThreeSum([-1, 0, 1, 2, -1, -4]));