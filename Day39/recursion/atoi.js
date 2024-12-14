function atoi(str) {
    let n = str.length;
    if (str.match(/^[A-Za-z]+$/)) {
        return 0;
    }
    if (n == 1) {
        return str[0].charCodeAt() - '0'.charCodeAt();
    }
    return (10 * atoi(str, n - 1) + str[n - 1].charCodeAt() - '0'.charCodeAt());
}



console.log(atoi("113"));