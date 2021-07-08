let require1 = require('./symetric');
let assert = require('chai').assert;

describe('Are arrays symetric', function () {
    it('true test', function () {
        let arr = [1, 2, 1];
        assert.isTrue(require1(arr));
    });

    it('false test', function () {
        let arr = [1, 2, 3];
        assert.isFalse(require1(arr));
    })
})
