var rect1 = {
    id: "12",
    size: {
        width: 20,
        height: 20
    },
    color: "#ccc"
};
var rect2 = {
    id: "12",
    size: {
        width: 20,
        height: 20
    }
};
rect2.color = "black";
var rect3 = {};
var rec4 = {}; /// стара запис
var rect5 = {
    id: "123",
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: "1px solid black",
    marginTop: '2px',
    borderRadius: '5px'
};
