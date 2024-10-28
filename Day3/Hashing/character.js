//if we take only lowercase characters, hash array would have to be of size 26
//we can use the ascii value of character
//asci of a = 97, index = a(97)-a(97) = 0;
//ascii of  b = 98, index = b(98) - a(97) = 1;
//and so on..

//to accomadate for every charcter possible, we can make hash array size to 256 directly index on ascii values

function hash(str){
    let hash = [];
    hash.length = 256;
    hash.fill(0);
    for (let i = 0; i < str.length; i++){
        hash[str[i].charCodeAt(0)] += 1;
    }
    return hash;
}

function fetch(charArray, str){
    const Hash = hash(str);
    let fArray = [];
    for (let i = 0; i < charArray.length; i++){
        fArray.push(Hash[charArray[i].charCodeAt(0)]);
    }
    return fArray;
} //O(n)

console.log(["a", "b", "c", "d", "e", "%", "^"]);
console.log(fetch(["a", "b", "c", "d", "e", "%", "^"], "abcdbce%^%^"))