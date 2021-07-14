let mathEnforcer = require('./math-enforcer');
let assert = require('chai').assert;

describe('Math Enforcer test', function () {
    it('AddFive should return undifined', function () {
        let result = mathEnforcer.addFive('num');
        assert.equal(undefined, result);
    });

    it('AddFive should return valid number', function () {
        let result = mathEnforcer.addFive(5);
        assert.equal(10, result);
    });

    it('subtractTen should return undifined', function () {
        let result = mathEnforcer.subtractTen('num');
        assert.equal(undefined, result);
    });

    it('subtractTen should return valid number', function () {
        let result = mathEnforcer.subtractTen(20);
        assert.equal(10, result);
    });

    it('sum should return undifined', function () {
        let result = mathEnforcer.sum('num', 2);
        assert.equal(undefined, result);
    });

    it('sum should return valid number', function () {
        let result = mathEnforcer.sum(5, 10);
        assert.equal(15, result);
    });
})