const calculator = require('./index');
let assert = require('chai').assert;
describe('Calc Test', function () {
    it('test', function () {
        assert(10, calculator(2, 8));
    })
})