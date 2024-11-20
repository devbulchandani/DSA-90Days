function isRotated(s, goal) {
    let n = goal.length;
    if (s.length !== n) return false
    s = s + s;
    for (let i = 0; i < n; i++) {
        if (s.substring(i, n + i) === goal){
            return true;
        }
    }
    return false;
}

let s = "aa", goal = "a"
console.log(isRotated(s, goal));