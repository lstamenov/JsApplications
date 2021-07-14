let isEvenOrOdd = require('./evenOrOdd');
let assert = require('chai').assert;

describe('Test isEvenOrOdd', function () {
    it('Not a string test', function () {
        let result = isEvenOrOdd(2);
        assert.equal(undefined, result);
    });

    it('Even', function () {
        let result = isEvenOrOdd('hi');
        assert.equal('even', result);
    });

    it('Odd', function () {
        let result = isEvenOrOdd('hello');
        assert.equal('odd', result);
    });
})


