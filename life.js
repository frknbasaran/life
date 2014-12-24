/**
 * @module life
 * author eray arslan
 */

var life = function(o) {
    // scope
    var that = this;
    // static
    var version = "0.0.3";
    // private
    var totalSec = 0;
    var timer;
    var time = function() {
        //
    };
    // public
    this.name = o.name;
    this.surname = o.surname;
    this.birth = new Date(); // 1min = 1year
    this.soulMate;
    this.sex = o.sex;
    this.children = [];
    this.parent = {};
    //
    this.getFullName = function() {
        return this.name + " " + this.surname;
    };
    this.setParent = function(o) {
        this.parent.father = o.father;
        this.parent.mother = o.mother;
    };
    this.getAge = function() {
        var now = new Date();
        var diffMs = now - this.birth;
        var diffSec = Math.floor(diffMs / 1000);
        return Math.floor(diffSec / 60);
    };
    this.live = function() {
        // under construction
        timer = setInterval(function () { totalSec++; time(); }, 1000 );
    };
    this.death = function() {
        clearInterval(timer);
    };
    this.setSoulMate = function(o) {
        if(o instanceof life) {
            if((this.sex === "male" && o.sex === "female") || (this.sex == "female" && o.sex === "male")) {
                this.soulMate = o;
                o.soulMate = this;
            }
        }
    };
    this.makeLove /** f*ck **/ = function() {
        // under construction
    };
    this.marriage = function() {
        if(this.sex === "female") {
            this.surname = this.soulMate.surname;
        } else {
            this.soulMate.surname = this.surname;
        } this.children = this.soulMate.children;
    };
};

module.exports = life;
