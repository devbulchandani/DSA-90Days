function majority(nums) {
    let n = nums.length;
    let result = [];
    let map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        if (map.get(nums[i]) > Math.floor(n / 3)) {
            result.push(nums[i])
            map.set(nums[i], Number.MIN_SAFE_INTEGER)
            if (result.length === 2) break;
        }
    }
    return result;
}

function Majority(nums) {
    let n = nums.length;
    let ct1 = 0;
    let ct2 = 0;
    let el1, el2;
    let result = [];
    for (let i = 0; i < n; i++) {
        if (ct1 === 0 && el2 !== nums[i]) {
            ct1 = 1;
            el1 = nums[i]
        }
        else if (ct2 === 0 && el1 !== nums[i]) {
            ct2 = 1;
            el2 = nums[i];
        }
        else if (el1 === nums[i]) {
            ct1++;
        }
        else if (el2 === nums[i]) {
            ct2++;
        }
        else {
            ct1--;
            ct2--
        }
    }
    let c1 = 0;
    let c2 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === el1) {
            c1++;
        }
        if (nums[i] === el2) {
            c2++;
        }
    }
    if (c1 > Math.floor(n / 3)) {
        result.push(el1);
    }
    if (c2 > Math.floor(n / 3)) {
        result.push(el2);
    }
    return result
}


console.log(Majority([1, 2, 2, 3, 2]));