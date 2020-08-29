const readline = require("readline");
const EventEmitter = require('events');

module.exports = class Fire extends EventEmitter {
    constructor() {
        super();
        this.input = "";
    }
    play() {
        const that = this;
        let num = Math.floor(Math.random() * 3);
        switch (num) {
            case 0:
                that.input = 'rock';
                break;
            case 1:
                that.input = 'paper';
                break;
            case 2:
                that.input = 'scissor';
                break;
        }
        that.emit("input",that.input);
    }
    realplay() {
        const that = this;

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question("Rock, paper, scissor? ", function(input2) {
            that.input = input2;
            //console.log(`You give ${input2}`);
            rl.close();
        });
        
        rl.on("close", function() {
            //console.log(`${that.input}`);
            that.emit("input", that.input);
            process.exit(0);
        });
    }
}