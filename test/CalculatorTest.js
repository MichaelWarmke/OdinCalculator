const assert = require('chai').assert;
const parser = require('../ts-built/Calculator.js')

describe('Calculator', () => {
    describe('tryEvalEquation', () => {
        it('simple addition 1 + 1 = 2', () => {
            assert.equal(tryEvalEquation('1+1'), '2')
        });
    });
});