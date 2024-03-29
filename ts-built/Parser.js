var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var symbols = {
    '3': ['(', ')'],
    '2': ['*', '/'],
    '1': ['+', '-']
};
function parseEquation(expression) {
    return '';
}
function containsAllSymbol(partialEquationString) {
    getAllSymbols().forEach(function (symbol) {
        if (containsSymbol(symbol, partialEquationString))
            return true;
    });
    return false;
}
function containsSymbol(symbol, partialEquationString) {
    return partialEquationString.search(symbol) != -1;
}
function getAllSymbols() {
    return Object.keys(symbols)
        .map(function (key) { return symbols[key]; })
        .reduce(function (endArray, symArray) {
        return endArray.push.apply(endArray, __spread(symArray));
    }, []);
}
module.exports = {
    parseEquation: parseEquation
};
