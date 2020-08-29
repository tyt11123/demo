const EventEmitter = require('events');
module.exports = class Referee extends EventEmitter {
    constructor() {
        super();
        this.result = -1;
    }
    judge() {
        let input = require('./input');
        let pc = require('./computer');
        let user = new input();
        let computer = new pc();
        const that = this;
        let flag = 0;
        user.on("input", function() {
            if (flag === 1) {
                check();
                that.emit("judge",that.result);
            } else {flag++;}
        })
        computer.on("computer", function() {
            if (flag === 1) {
                check();
                that.emit("judge",that.result);
            } else {flag++;}
        })
        user.play();
        computer.play();

        function check() {
            console.log(`User gives ${user.input}`);
            console.log(`Computer gives ${computer.response}`);
            switch (user.input.toLowerCase()) {
                case 'rock':
                    switch (computer.response) {
                        case 'rock':
                            that.result = 0;
                            break;
                        case 'scissor':
                            that.result = 1;
                            break;
                        case 'paper':
                            that.result = 2;
                            break;
                    }
                break;
                case 'paper':
                    switch (computer.response) {
                        case 'rock':
                            that.result = 1;
                            break;
                        case 'scissor':
                            that.result = 2;
                            break;
                        case 'paper':
                            that.result = 0;
                            break;
                    }
                break;
                case 'scissor':
                    switch (computer.response) {
                        case 'rock':
                            that.result = 2;
                            break;
                        case 'scissor':
                            that.result = 0;
                            break;
                        case 'paper':
                            that.result = 1;
                            break;
                    }
                break;
            }
            switch (that.result) {
                case 0:
                    console.log("Draw");
                    break;
                case 1:
                    console.log("Player win");
                    break;
                case 2:
                    console.log("Computer win");
                    break;
            }
        }
    }
}