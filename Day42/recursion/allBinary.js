function generateAllStringsUtil(K, str, n, result)
{
    if (n === K) {
        str[n] = "\0";
        result.push(str.slice(0, n).join(""));
        return;
    }
    if (str[n - 1] === "1") {
        str[n] = "0";
        generateAllStringsUtil(K, str, n + 1, result);
    }
    if (str[n - 1] === "0") {
        str[n] = "0";
        generateAllStringsUtil(K, str, n + 1, result);
        str[n] = "1";
        generateAllStringsUtil(K, str, n + 1, result);
    }
}



function generateAllStrings(K)
{
    if (K <= 0) return [];
    let result = [];
    let str = new Array(K);

    str[0] = "0";
    generateAllStringsUtil(K, str, 1, result);

    str[0] = "1";
    generateAllStringsUtil(K, str, 1, result);

    return result;

}

var K = 3;
console.log(generateAllStrings(K));