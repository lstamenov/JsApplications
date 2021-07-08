let calc = require('./calculator');
let assert = require('chai').assert;

describe('Calculator tests', function () {
    it('test get', function () {
        assert.equal(0, calc.get());
    });

    it('test add', function () {
        calc.add(7);
        assert.equal(7, calc.get());
    })

    it('test get', function () {
        let initVal = calc.get();
        calc.subtract(initVal);

        assert.equal(0, calc.get());
    })
})