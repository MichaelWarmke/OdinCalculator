
let symbols = {
    '3' : ['(',')'],
    '2' : ['*','/'],
    '1' : ['+','-']
};

function parseEquation(expression: string): string {
    let lexedTree = lex(expression);
    return "";
}

function lex(expression) {
    getAllSymbols().reduce((lexedExpression, lexor) => {
        return lexedExpression.
    }, [`${expression}`]);
}

function getAllSymbols(): Array<String> {
    return Object.keys(symbols)
    .map(key => symbols[key])
    .reduce((endArray, symArray) => {
        return endArray.push(...symArray);
    },[]);
}

