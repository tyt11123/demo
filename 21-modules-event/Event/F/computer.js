const user = require("./input.js");
const EventEmitter = require("events");
const pc = new EventEmitter();
user.on("input", function (data) {
    let num = Math.floor(Math.random() * 3);
    //console.log(num);
    switch (num) {
        case 0:
            pc.emit("computer",'rock');
            break;
        case 1:
            pc.emit("computer",'paper');
            break;
        case 2:
            pc.emit("computer",'scissor');
            break;
    }
})
module.exports = pc;