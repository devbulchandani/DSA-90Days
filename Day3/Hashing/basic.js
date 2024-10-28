//Given an array if you want to find frequency of each element in an array.
//For eg: [1,2,1,2,3], 1->2, 2->2, 3->1, 4->0, 10->0

//Brute force approach:
//works for characters/string too

function f(num, arr) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    return count;
}

function fTable(arr, numArray) {
    let fArray = [];
    for (let i = 0; i < numArray.length; i++) {
        fArray.push(f(numArray[i], arr));
    }
    console.log(numArray);
    console.log(fArray);
} //(m*n)

const arr = "abcbfbdr";
fTable(arr, ['a', 'b', 'c']);

//Time complexity too large, so we use hashing; Go to hasing.js