require('./Sum');
let assert = require('chai').assert;

describe('Sum Test', function () {
    it('testSum', function () {
        let arr = [1, 2, 3, 5];

        let sum = function (arr) {
            let arrSum = 0;
            for (let i = 0; i < arr.length; i++) {
                arrSum += Number(arr[i]);
            }
            return arrSum;
        }

        assert.equal(11, sum(arr));
    })
})