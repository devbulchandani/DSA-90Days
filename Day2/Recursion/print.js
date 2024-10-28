let count = 1;
function print(N){
    if (count == N + 1){
        return;
    }
    console.log(count);
    count++;
    print(N)
}

function print2(N){
    if (N > 0){
        print2(N-1);
        process.stdout.write(N + " ");
    }
    return;
}

function printName(n){
    if (n === 0){
        return;
    }
    console.log("Dev");
    printName(n-1);
}

function printRev(i, n){
    if (i < 1) return;
    console.log(i);
    printRev(i-1, n);
}

function printRev2(n){
    if (n === 0) return;
    console.log(n);
    printRev(n-1);
}



printRev2(5)
