function longestPrefix(strs) {
    let n = strs.length;
    if ( n === 1){
        return strs[0]
    }
    let longest = strs[0];
    let exists = false
    for (let i = 1; i < n; i++) {
        let m = strs[i].length;
        for (j = m; j >= 0; j--) {
            if (strs[i].slice(0, j + 1) === longest.slice(0, j + 1)){
                exists = true;
                longest = longest.slice(0, j + 1);
                break;
            }
            exists = false;
        }
    }
    return exists ? longest : "";
}

let  strs = ["flower","flow","flight"]

console.log(longestPrefix(strs));