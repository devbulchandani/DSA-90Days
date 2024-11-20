function isAnagram(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
}

function isStringAnagram(s, t){
    let n = s.length;
    if (n !== t.length) return false
    let charMap = new Array(128).fill(0);
    for (let i = 0; i < n; i++){
        charMap[s.charCodeAt(i)] ++;
    }
    console.log(charMap);
    for (let i = 0; i < n; i++){
        charMap[t.charCodeAt(i)] --;
        if (charMap[t.charCodeAt(i)] < 0) return false;
    }
    return true;
}

let s = "rat", t = "car"
console.log(isStringAnagram(s, t));