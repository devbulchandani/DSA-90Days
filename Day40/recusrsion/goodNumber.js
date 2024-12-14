function noOfGood(n) {
    // Define the modulo value (10^9 + 7), using BigInt for large number arithmetic
    let MOD = BigInt(10**9 + 7);
    
    // Convert input `n` to BigInt for consistent arithmetic operations
    n = BigInt(n);

    // Calculate the number of positions that will contain even digits
    // If n is odd, (n + 1) ensures the extra position is allocated to even positions
    let evenPos = (n + 1n) / 2n;

    // Calculate the number of positions that will contain odd digits
    let oddPos = n / 2n;

    // Calculate the number of ways to fill the even positions (5 options: 0, 2, 4, 6, 8)
    let countEven = modPow(5n, evenPos, MOD);

    // Calculate the number of ways to fill the odd positions (4 options: 1, 3, 5, 7, 9)
    let countOdd = modPow(4n, oddPos, MOD);

    // Multiply the counts for even and odd positions and return the result modulo MOD
    return Number((countEven * countOdd) % MOD);
}

// Function to calculate (base^exp) % MOD efficiently using modular exponentiation
function modPow(base, exp, MOD) {
    // Base case: if exponent is 0, return 1 as any number raised to the power of 0 is 1
    if (exp === 0n) return 1n;

    // If the exponent is even, use the property (base^exp) = (base^(exp/2))^2
    if (exp % 2n === 0n) {
        const half = modPow(base, exp / 2n, MOD); // Recursive call for base^(exp/2)
        return (half * half) % MOD; // Combine the results and take modulo
    } else {
        // If the exponent is odd, use the property (base^exp) = base * base^(exp-1)
        return (base * modPow(base, exp - 1n, MOD)) % MOD; // Multiply by base and take modulo
    }
}

// Example usage
console.log(noOfGood(50)); // Calculates the number of "good" numbers for n = 50
