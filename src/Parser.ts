let symbols = {
    '3' : ['(',')'],
    '2' : ['*','/'],
    '1' : ['+','-']
};

function parseEquation(expression: string): string {
    return '';   
}

function containsAllSymbol(partialEquationString: string): boolean {
    getAllSymbols().forEach(symbol => {
        if (containsSymbol(symbol, partialEquationString))
            return true;
    });
    return false;
}

function containsSymbol( symbol: string, partialEquationString: string): boolean {
    return partialEquationString.search(symbol) != -1
}


function getAllSymbols(): Array<string> {
    return Object.keys(symbols)
    .map(key => symbols[key])
    .reduce((endArray, symArray) => {
        return endArray.push(...symArray);
    },[]);
}

module.exports = {
    parseEquation: parseEquation
}

