/**
 * @module life
 * author eray arslan
 */

module.exports = function(o) {
    // scope
    var that = this;
    // static
    var version = "0.0.1";
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
    this.girlfriend = undefined;
    this.boyfriend = undefined;
    this.sex = o.sex;
    //
    this.getFullName = function() {
        return this.name + " " + this.surname;
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
    this.setGirlFriend = function(o) {
        if(o instanceof that && this.sex === "male" && o.sex === "female") {
            this.girlfriend = o;
            o.boyfriend = this;
        } else {
            throw new Error("i-ih :'(");
        }
    };
    this.getGirlFriend = function() {
        return this.girlfriend;
    };
    this.setBoyFriend = function(o) {
        if(o instanceof that && this.sex === "female" && o.sex === "male") {
            this.boyfriend = o;
            o.girlfriend = this;
        } else {
            throw new Error("i-ih :'(");
        }
    };
    this.getBoyFriend = function() {
        return this.boyfriend;
    };
    this.getVersion = function() {
        return version;
    };
};
