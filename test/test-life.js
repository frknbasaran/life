var Lab = require('lab');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var expect = Lab.expect;

var life = require('../');

describe('life', function() {
    it('name-surname', function (done) {
        var eray = new life({
            name : "eray",
            surname : "arslan"
        });

        expect(eray.getFullName()).to.equal("eray arslan");
        done();
    });
});