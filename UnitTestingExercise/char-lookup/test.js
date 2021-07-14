const charLookup = require('./char-lookup');
let assert = require('chai').assert;

describe('Char Lookup Test', function () {
    it('No string', function () {
        let result = charLookup(123, 2);
        assert.equal(undefined, result);
    });

    it('Invalid index', function () {
        let result = charLookup('hi', 3);
        assert.equal('Incorrect index', result);
    });

    it('Correct values', function () {
        let result = charLookup('hello', 3);
        assert.equal('l', result);
    });
})
