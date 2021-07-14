let stringBuilder = require('./string-builder');
let assert = require('chai').assert;
let expect = require('chai').expect;

let sb = new stringBuilder('');
describe('StringBuilder test', function () {

    it('should not return error', function () {
        assert.doesNotThrow(() => stringBuilder._vrfyParam('word'));
    });

    it('should return error', function () {
        assert.throw(() => new stringBuilder(12), 'Argument must be a string');
    });

    it('should append string', function () {
        sb.append('hi');
        assert.equal('hi', sb.toString());
    });

    it('should return error when append', function () {
        assert.throws(() => sb.append(213), 'Argument must be a string');
    });

    it('should prepend string', function () {
        sb = new stringBuilder(' world');
        sb.prepend('hello');
        assert.equal('hello world', sb.toString());
    });

    it('should return error when append', function () {
        assert.throws(() => sb.prepend(213), 'Argument must be a string');
    });

    it('should insert string at specific position', function () {
        sb = new stringBuilder('helrld');
        sb.insertAt('lo wo', 3);
        assert.equal('hello world', sb.toString());
    });

    it('should throw error when insert', function () {
        assert.throws(() => sb.insertAt(12, 3));
    });

    it('should remove string at specific position', function () {
        sb = new stringBuilder('hello world');
        sb.remove(5, 6);
        assert.equal('hello', sb.toString());
    });
})