function isIsomorphic(s, t){
    let n = s.length;
    if (n !== t.length){
        return false;
    }
    let map = new Map();
    for (let i = 0; i < n; i++){
        if (map.has(s[i])){
            if (map.get(s[i]) !== t[i]){
                return false;
            }
        } else {
            map.set(s[i], t[i]);
        }
    }
    map.clear();
    for (let i = 0; i < n; i++){
        if (map.has(t[i])){
            if (map.get(t[i]) !== s[i]){
                return false;
            }
        } else {
            map.set(t[i], s[i]);
        }
    }
    return true;
}

function areIsomorphic(s, t){
    let n = s.length;
    let map1 = new Array(128);
    let map2 = new Array(128);
    for (let i = 0; i < n; i++){
        if (map1[s.charCodeAt(i)] !== map2[t.charCodeAt(i)]){
            return false;
        }
        map1[s.charCodeAt(i)] = i + 1;
        map2[t.charCodeAt(i)] = i + 1;
    }
    return true;
}

let s = "egg", t = "add"
console.log(isIsomorphic(s, t));