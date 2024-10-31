function removeDuplicate(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}  //O(n), space- O(n)


function removeDuplicates(arr) {
    let set = new Set(arr);
    let uniqueArr = Array.from(set);
    for (let i = 0; i < uniqueArr.length; i++) {
        arr[i] = uniqueArr[i];
    }
    return uniqueArr.length;
}

var removeDuplicated = function(nums) {
    let i = 0;
    let n = nums.length
    for (let j = 0; j < nums.length; j++ ){
        if (nums[j] !== nums[i]){
            nums[i + 1] = nums[j];
            i++;
        }    
    }
    return i + 1;
};

const arr = [1, 1, 2, 2, 2, 3, 3];




console.log(removeDuplicated(arr));
console.log(arr);
