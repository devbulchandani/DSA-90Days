function reverseWords(str){
    let temp = str.split(" ");
    reverseArray(temp);
    str = temp.join(" ");
    return str.replace(/\s+/g, ' ').trim()
}

function reverseArray(arr) {
    let p1 = 0;
    let p2 = arr.length - 1;
    while (p1 < p2) {
        let temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
        p1 += 1;
        p2 -= 1;
    }
}

console.log(reverseWords(" the sky is     blue "));