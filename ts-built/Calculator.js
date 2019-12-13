var displayNumbers = '0';
function getDisplayNumbers() {
    return displayNumbers;
}
function tryEvalEquation(equation) {
    var equationSlices = equation.split('+');
    var args = equationSlices
        .filter(function (equationSlice) { return containsAllSymbol(equation); })
        .map(function (slice) { return tryEvalEquation(slice); });
    return operate('+', parseInt(args[0]), parseInt(args[1]));
}
function submitOption(option) {
    console.log("option submitted: " + option);
    if (displayNumbers.length < 13) {
        if (option == 'C') {
            displayNumbers = '0';
        }
        else if (option == '=') {
            displayNumbers = tryEvalEquation(displayNumbers);
        }
        else {
            displayNumbers = displayNumbers.concat(option);
        }
    }
    console.log("displayNumbers updated to " + displayNumbers);
    return displayNumbers;
}
function operate(symbol, arg1, arg2) {
    switch (symbol) {
        case "+":
            return add(arg1, arg2).toString();
            break;
        case "-":
            return sub(arg1, arg2).toString();
            break;
        case "/":
            return div(arg1, arg2).toString();
            break;
        case "*":
            return multi(arg1, arg2).toString();
            break;
        default:
            console.log('Unsupprted Operation.');
    }
}
function add(numOne, numTwo) {
    return numOne + numTwo;
}
function sub(numOne, numTwo) {
    return numOne - numTwo;
}
function div(numOne, numTwo) {
    return numOne / numTwo;
}
function multi(numOne, numTwo) {
    return numOne * numTwo;
}
module.exports = {
    tryEvalEquation: tryEvalEquation
};
