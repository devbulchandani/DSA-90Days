function generateAllStrings(n, arr, i) {
    if (i === n) {
        printTheArray(arr, n);
        return;
    }
    arr[i] = '(';
    generateAllStrings(n, arr, i + 1);

    arr[i] = ')';
    generateAllStrings(n, arr, i + 1);
}

function printTheArray(arr, n) {
    for (let i = 0; i < n; i++) {
        process.stdout.write(arr[i] + " ");
    }
    console.log();
}

let n = 4;

let arr = new Array(n);
arr.fill(0);

generateAllStrings(n, arr, 0);
