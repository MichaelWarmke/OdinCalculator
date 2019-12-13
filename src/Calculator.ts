let displayNumbers: string = '0';

function getDisplayNumbers() {
    return displayNumbers;
}

function tryEvalEquation(equation: string): string {
    let equationSlices = equation.split('+');

    let args: Array<string> = equationSlices
                .filter(equationSlice => containsAllSymbol(equation))
                .map(slice => tryEvalEquation(slice));
    
   return operate('+', parseInt(args[0]), parseInt(args[1]));             
}

function submitOption(option) {
    console.log(`option submitted: ${option}`)
    if (displayNumbers.length < 13) {
        if(option == 'C') {
            displayNumbers = '0';
        } else if(option == '=') {
            displayNumbers = tryEvalEquation(displayNumbers);
        } else {
            displayNumbers = displayNumbers.concat(option);
        }
    }
    console.log(`displayNumbers updated to ${displayNumbers}`);
    return displayNumbers;
}

function operate(symbol: string, arg1: number, arg2: number): string {
    switch(symbol) {
        case "+" :
            return add(arg1, arg2).toString();
            break;
        case "-" :
            return sub(arg1, arg2).toString();
            break;
        case "/" :
            return div(arg1, arg2).toString();
            break;
        case "*" :
            return multi(arg1, arg2).toString();
            break;
        default:
            console.log('Unsupprted Operation.');
    }
}

function add(numOne: number, numTwo: number): number {
    return numOne + numTwo;
}

function sub(numOne: number, numTwo: number): number {
    return numOne - numTwo;
}

function div(numOne: number, numTwo: number): number {
    return numOne / numTwo;
}

function multi(numOne: number, numTwo: number): number {
    return numOne * numTwo;
}

module.exports = {
    tryEvalEquation: tryEvalEquation
}