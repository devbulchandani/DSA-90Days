function linearSearch(arr, num) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === num)
            return true;
    }
    return false;
}


function consecutive(arr) {
    let n = arr.length;
    let longest = 1;
    for (let i = 0; i < n; i++) {
        let x = arr[i];
        let count = 1;
        while (linearSearch(arr, x + 1) === true) {
            x += 1;
            count += 1;
        }
        longest = Math.max(longest, count);
    }
    return longest;
}

function findConsecutive(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    arr.sort((a, b) => a - b);
    let longest = 1;
    let last_smallest = arr[0];
    count = 1;

    for (let i = 0; i < n; i++) {
        if (arr[i] - 1 === last_smallest) {
            count++;
            last_smallest = arr[i];
        }
        else if (arr[i] !== last_smallest) {
            last_smallest = arr[i];
            count = 1;
        }
        longest = Math.max(longest, count)
    }
    return longest;
}


function longestConsecutive(arr) {
    let n = arr.length;
    if (n === 0) return 0;
    let longest = 1;
    let set = new Set();
    for (let i = 0; i < n; i++){
        set.add(arr[i]);
    }

    for (let num of set){
        if (!set.has(num -1)){
            let count = 1;
            let x = num;
            while (set.has(x + 1)){
                count++;
                x++;
            }
            longest = Math.max(longest, count);
        }
    }

    return longest;
}

let arr = [100, 200, 1, 2, 3, 4];
let ans = longestConsecutive(arr);
console.log(ans);