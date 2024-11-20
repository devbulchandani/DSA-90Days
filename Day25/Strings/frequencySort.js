function frequencySort(s) {
    let frequency = new Map();
    for (let c of s) frequency.set(c, (frequency.get(c) || 0) + 1);
    
    let arr = [...frequency.entries()]
    arr.sort((a, b) => b[1] - a[1]);

    let res = "";
    for (let letter of arr) res += letter[0].repeat(letter[1]);

    return res;

}



let s = 'Aabb'
console.log(frequencySort(s));