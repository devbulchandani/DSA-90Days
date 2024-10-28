// javascript array cannot store more than 10^6 elements, 
//we have to crerate a map(object) to store value and frequency in key value pairs, to avoid unneccerasy waste of storage

function hash(arr){
    map = {};
    for ( i = 0; i < arr.length; i++){
        map[arr[i]] === undefined ? map[arr[i]] = 1 : map[arr[i]]++
    }
    return map;
} //O(logn)

function fetch(numArray, arr ){
    const Hash = hash(arr);
    const fArray = [];
    for (let i = 0; i < numArray.length; i++){
        fArray.push(
            Hash[numArray[i]] ? Hash[numArray[i]] : 0
        ); //O(logn)
    }
    return fArray;
} 


arr = [1,4,2,4,1,2,4,3,]
console.log(hash(arr));
console.log([1,2,3,4,5]);
console.log(fetch([1,2,3,4,5], arr));
