function parseEquation(expression) {

}

function operate(symbol, arg1, arg2) {
    switch(symbol) {
        case "+" :
            add(arg1, arg2);
            break;
        case "-" :
            sub(arg1, arg2);
            break;
        case "/" :
            div(arg1, arg2);
            break;
        case "*" :
            multi(arg1, arg2);
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