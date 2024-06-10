function transformString(input) {
    const length = input.length;
    let result = "";

    if (length % 15 === 0) {
        // If length is divisible by 15
        result = input.split('').reverse().join('');
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // If length is divisible by 3
        result = input.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // If length is divisible by 5
        result = input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // If none of the above, return the original string
        result = input;
    }

    return result;
}

// Example usage:
console.log(transformString("Hamburger"));         // Output: "regrubmaH"
console.log(transformString("Pizza"));             // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
console.log(transformString("Random String"));     // Output: "Random String" (if it doesn't meet any conditions)
