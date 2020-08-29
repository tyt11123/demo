const readline = require("readline");
const EventEmitter = require('events');
const fire = new EventEmitter();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input1 = '';
rl.question("Rock, paper, scissor? ", function(input2) {
    input1 = input2;
    console.log(`You give ${input2}`);
    rl.close();
});

rl.on("close", function() {
    //console.log(`${input1}`);
    fire.emit("input", input1);
    process.exit(0);
});

module.exports = fire;