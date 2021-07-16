
function add (a, b) {
    return a + b; 
}

function substract (a, b) {
    return a - b; 
}

function multiply (a, b) {
    return a * b; 
}

function divide (a, b) {
    if (b == 0) {
        console.log ("Divide by 0 is not allowed");
    }
    else {
        return a / b;
    }
}

 
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
 


/*
const Math = {};
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;
module.exports = Math;
*/
