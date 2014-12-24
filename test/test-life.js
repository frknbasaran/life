var Lab = require('lab');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var expect = Lab.expect;

var life = require('../');

describe('life', function() {
    it('name-surname', function(done) {
        var eray = new life({
            name : "eray",
            surname : "arslan"
        });

        expect(eray.getFullName()).to.equal("eray arslan");
        done();
    });
    it('soul-mate', function(done) {
        var eray = new life({
            name : "eray",
            surname : "arslan",
            sex : "male"
        });

        var adriana = new life({
            name : "adriana",
            surname : "lima",
            sex : "female"
        });

        eray.setSoulMate(adriana);

        expect(adriana.soulMate.getFullName()).to.equal("eray arslan");
        done();
    });
    it('marriage', function(done) {
        var eray = new life({
            name : "eray",
            surname : "arslan",
            sex : "male"
        });

        var adriana = new life({
            name : "adriana",
            surname : "lima",
            sex : "female"
        });

        eray.setSoulMate(adriana);
        adriana.marriage();

        expect(eray.soulMate.getFullName()).to.equal("adriana arslan");
        done();
    });
});