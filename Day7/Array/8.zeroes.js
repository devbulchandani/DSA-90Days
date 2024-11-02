function moveZeroes(arr) {
    let newArr = []
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i]);
        }
    }
    let nl = newArr.length;
    for (let i = 0; i < nl; i++) {
        arr[i] = newArr[i];
    }

    for (let i = nl; i < n; i++) {
        arr[i] = 0;;
    }
}


function zeroes(nums) {
    let i = 0;  

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];  
            console.log(i, j);
            i++;
        }
        console.log(arr);
    }
}

arr = [1, 0, 2, 3, 0, 4, 0, 1]
zeroes(arr);
console.log(arr);