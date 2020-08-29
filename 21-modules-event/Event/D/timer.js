const EventEmitter = require("events");
module.exports = class Timer extends EventEmitter {
    constructor() {
        super();
    }
    tick(time) {
        let that = this;
        let intervalObj = setInterval(() => {
            that.emit("tick", time);
            time--;
            if (time < 0) {clearInterval(intervalObj);}
        }, 1000);
    }
}
