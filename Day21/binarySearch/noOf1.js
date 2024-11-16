function rowWithMax1s(arr) {
    let n = arr.length;
    let m = arr[0].length;
    let cnt = 0;
    let index = -1;

    for (let i = 0; i < n; i++) {
        let low = 0;
        let high = m - 1;
        let ans = m;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[i][mid] < 1) low = mid + 1;
            else {
                ans = mid;
                high = mid - 1
            }
        }
        let num = m - ans;
        if (num > cnt){
            cnt = num;
            index = i;
        }
    }
    return index;
}

let arr = [[0, 1, 1, 1],
[0, 0, 1, 1],
[1, 1, 1, 1],
[0, 0, 0, 0]]

console.log(rowWithMax1s(arr));