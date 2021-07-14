let PaymentCheck = require('./payment-ckeck');
let assert = require('chai').assert;

describe('Payment test', function () {
    it('should create object', function () {
        let paymentCheck = new PaymentCheck('check', 1000);
        assert.equal('check', paymentCheck.name);
        assert.equal(1000, paymentCheck.value);
    });

    it('should not create object', function () {
        assert.throws(() => new PaymentCheck(1, 1000));
    });

    it('should not create object', function () {
       assert.throws(() => new PaymentCheck('caca', 'five'));
    });

    it('should change name', function () {
        let paymentCheck = new PaymentCheck('check', 1000);
        paymentCheck.name = 'new';
        assert.equal('new', paymentCheck.name);
    });

    it('should change value', function () {
        let paymentCheck = new PaymentCheck('check', 1000);
        paymentCheck.value = 1002;
        assert.equal(1002, paymentCheck.value);
    });

    it('should change VAT', function () {
        let paymentCheck = new PaymentCheck('check', 1000);
        paymentCheck.VAT = 30;
        assert.equal(30, paymentCheck.VAT);
    });

    it('should change active', function () {
        let paymentCheck = new PaymentCheck('check', 1000);
        paymentCheck.active = false;
        assert.equal(false, paymentCheck.active);
    });

    it('should get VAT', function () {
        let paymentCheck = new PaymentCheck('check', 1000);
        assert.equal(20, paymentCheck.VAT);
    });

    it('should get active', function () {
        let paymentCheck = new PaymentCheck('check', 1000);
        assert.equal(true, paymentCheck.active);
    });
})
