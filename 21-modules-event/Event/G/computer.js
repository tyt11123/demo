const EventEmitter = require("events");
module.exports = class PC extends EventEmitter {
    constructor() {
        super();
        this.response = "";
    }
    respond() {
        const input = require("./input.js");
        const user = new input();
        const that = this;
        user.play();
        user.on("input", function (data) {
            let num = Math.floor(Math.random() * 3);
            switch (num) {
                case 0:
                    that.response = 'rock';
                    break;
                case 1:
                    that.response = 'paper';
                    break;
                case 2:
                    that.response = 'scissor';
                    break;
            }
            console.log(that.response);
            that.emit("computer",that.response);
        })
    }
    play() {
        const that = this;
        let num = Math.floor(Math.random() * 3);
        switch (num) {
            case 0:
                that.response = 'rock';
                break;
            case 1:
                that.response = 'paper';
                break;
            case 2:
                that.response = 'scissor';
                break;
        }
        that.emit("computer",that.response);
    }
}