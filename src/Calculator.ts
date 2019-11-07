let displayNumbers: string = '0';

function getDisplayNumbers() {
    return displayNumbers;
}

function evalEquation(): string {
    return parseEquation(displayNumbers);
}

function submitOption(option) {
    console.log(`option submitted: ${option}`)
    if (displayNumbers.length < 13) {
        if(option == 'C') {
            displayNumbers = '0';
        } else if(option == '=') {
            displayNumbers = evalEquation();
        } else {
            displayNumbers = displayNumbers.concat(option);
        }
    }
    console.log(`displayNumbers updated to ${displayNumbers}`);
    return displayNumbers;
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