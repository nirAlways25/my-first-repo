// calculator.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

console.log('Addition:', add(2, 3));          // Should print 5
console.log('Subtraction:', subtract(5, 2));  // Should print 3
console.log('Multiplication:', multiply(3, 4)); // Should print 12
console.log('Division:', divide(10, 2));  

// Export all functions
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
