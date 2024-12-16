/**
 * Utility function to generate all binary strings of length K such that no two '1's are adjacent.
 * @param {number} K - The length of binary strings to generate.
 * @param {Array} str - The current string being generated as an array of characters.
 * @param {number} n - The current position in the string being processed.
 * @param {Array} result - The array to store all valid binary strings.
 */
function generateAllStringsUtil(K, str, n, result) {
    // Base case: If the string reaches length K, add it to the result
    if (n === K) {
        str[n] = "\0"; // Add a null terminator (not necessary in JS but mimics C-like style)
        result.push(str.slice(0, n).join("")); // Push the generated string to the result array
        return;
    }

    // Case 1: If the previous character is '1', the current character can only be '0'
    if (str[n - 1] === "1") {
        str[n] = "0"; // Set the current character to '0'
        generateAllStringsUtil(K, str, n + 1, result); // Recurse for the next position
    }

    // Case 2: If the previous character is '0', the current character can be either '0' or '1'
    if (str[n - 1] === "0") {
        str[n] = "0"; // Set the current character to '0'
        generateAllStringsUtil(K, str, n + 1, result); // Recurse for the next position

        str[n] = "1"; // Set the current character to '1'
        generateAllStringsUtil(K, str, n + 1, result); // Recurse for the next position
    }
}

/**
 * Main function to generate all binary strings of length K such that no two '1's are adjacent.
 * @param {number} K - The length of binary strings to generate.
 * @returns {Array} - An array of all valid binary strings.
 */
function generateAllStrings(K) {
    // If K is non-positive, return an empty array as there are no valid strings
    if (K <= 0) return [];

    let result = []; // Array to store all valid binary strings
    let str = new Array(K); // Array to represent the current binary string being constructed

    // Start by considering the first character as '0' and generate strings
    str[0] = "0"; // Initialize the first character as '0'
    generateAllStringsUtil(K, str, 1, result); // Recurse to generate the rest of the string

    // Start by considering the first character as '1' and generate strings
    str[0] = "1"; // Initialize the first character as '1'
    generateAllStringsUtil(K, str, 1, result); // Recurse to generate the rest of the string

    return result; // Return the list of all valid binary strings
}

// Test the function with K = 3
var K = 3;
console.log(generateAllStrings(K));

//Dry run - https://drive.google.com/file/d/1DAnrtJEcldO0Dpi9kLXJWJTXXKYfT2nJ/view?usp=drive_link