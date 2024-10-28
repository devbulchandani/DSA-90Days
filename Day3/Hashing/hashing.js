// lets say we have an array which can contain max 12 different elements;
// So we create a hash array of size 13: [0, 0, 0 ..., 0], index from 0 to 12;
// we will traverse the array and update the count of each element based in index; This is pre-storing/pre-calculation;
//then we can fetch the frequency of a number by seeing the value at its index


//precompute
function hash(arr) {
    let hash = []
    hash.length = 12
    hash.fill(0);

    for (let i = 0; i < arr.length; i++){
        hash[arr[i]] += 1;
    }
    return hash;
}

//fetching
function fetch(numArray, arr){
    const Hash = hash(arr);
    let fArray = []
    for (let i = 0; i < numArray.length; i++){
        fArray.push(Hash[numArray[i]]);
    }
    return fArray;
} //O(n)

arr = [1,2,1,2,4,3,]
console.log([1,2,3,4,5]);
console.log(fetch([1,2,3,4,5], arr));

//Now see character hashing at character.js