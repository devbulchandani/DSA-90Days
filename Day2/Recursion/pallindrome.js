function pallindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

function pallindrome2(s, left, right) {
    if (left >= right) {
        return true;
    }
    if (s[left] !== s[right]){
        return false;
    }
    return pallindrome2(s, left + 1, right -1)
}

s = 'amanaplanacanalpanama'
console.log(pallindrome2(s, 0, s.length - 1));