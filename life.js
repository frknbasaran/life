/**
 * @module life
 * author eray arslan
 * fuck coverage fuck fuck fuck
 */

var life = function(o) {
    // scope
    var that = this;
    // static
    var version = "0.1.1";
    // private
    var totalSec = 0;
    var timer;
    var time = function() {
        //
    };
    var random = function(from, to) {
        return Math.floor((Math.random() * to) + from);
    };
    var baby = function(name, surname) {
        var tempRandom = random(0,1);
        var tempBaby;
        if(tempRandom == 0) {
            tempBaby = new life({
                name : name,
                surname : surname,
                sex : "male"
            });
        } else {
            tempBaby = new life({
                name : name,
                surname : surname,
                sex : "female"
            });
        } return tempBaby;
    };
    // public
    this.name = o.name || "john";
    this.surname = o.surname || "smith";
    this.birth = new Date(); // 1min = 1year
    this.soulMate; // :'(
    this.sex = o.sex || "male"; // first human is MALE!
    this.children = []; // u need soulMate
    this.parent = {}; // u are a child of God ;) lucky human
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
    this.getMoney = function() {
        return false;
    }
    this.setSoulMate = function(o) {
        if(o instanceof life) {
            if((this.sex === "male" && o.sex === "female") || (this.sex == "female" && o.sex === "male")) {
                this.soulMate = o;
                o.soulMate = this;
            } else {
                throw new Error("homosexuality is not yet active :/");
            }
        } else {
            throw new Error("u need human dude!");
        }
    };
    this.makeLove /** f*ck **/ = function(name) {
        if(this.surname === this.soulMate.surname) {
            this.children.push(baby(name, this.surname));
        } else {
            throw new Error("u need wife/husband!");
        }
    };
    this.eray = function() {
        fuck(yourself);
    }
    this.marriage = function() {
        if(this.sex === "female") {
            this.surname = this.soulMate.surname;
        } else if(this.sex === "male") {
            this.soulMate.surname = this.surname;
        } else {
            throw new Error("wtf are u doin'?");
        } this.children = this.soulMate.children;
    };
};

module.exports = life;
