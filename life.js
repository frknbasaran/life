// dirty life cod3

function life(o) {
    // scope
    var that = this;
    // static
    const version = 0.1;
    // private
    var totalSec = 0;
    var timer = undefined;
    var time = function() {
        //
    };
    // public
    this.name = o.name || "";
    this.surname = o.surname || "";
    this.birth = new Date(); // 1min = 1year
    this.girlfriend = undefined;
    this.boyfriend = undefined;
    this.sex = o.sex || "";
    //
    this.getFullName = function() {
        return this.name + " " + this.surname;
    };
    this.getAge = function() {
        return Math.floor(Math.floor((new Date() - this.birth) / 1000) / 60);
    };
    this.live = function() {
        // under construction
        timer = setInterval(function () { totalSec++; time(); }, 1000 );
    };
    this.death = function() {
        clearInterval(timer);
        timer = undefined;
    };
    this.setGirlFriend = function(o) {
        if(o instanceof life && this.sex === "male" && o.sex === "female") {
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
        if(o instanceof life && this.sex === "female" && o.sex === "male") {
            this.boyfriend = o;
            o.girlfriend = this;
        } else {
            throw new Error("i-ih :'(");
        }
    };
    this.getBoyFriend = function() {
        return this.boyfriend;
    };
}

var eray = new life({
    name    : "eray",
    surname : "arslan",
    sex     : "male"
});

// sadece kız olarak nefes alıyo işte
var just_a_girl = new life({
    sex     : "female"
});

eray.setGirlFriend(just_a_girl);

console.log(just_a_girl.getBoyFriend().getFullName()); // output : eray arslan

// eray.live();
