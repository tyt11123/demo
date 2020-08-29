let user = require('./input');
let computer = require('./computer');
let user1 = "";
let computer1 = "";
user.on("input", function (b) {
    user1 = b;
    //console.log('x',user1, 'y',computer1,'z');
    console.log(`Computer gives ${computer1}`);
    switch (user1.toLowerCase()) {
        case 'rock':
            switch (computer1) {
                case 'rock':
                    console.log("Draw");
                    break;
                case 'scissor':
                    console.log("You win");
                    break;
                case 'paper':
                    console.log("You lose");
                    break;
            }
        break;
        case 'paper':
            switch (computer1) {
                case 'rock':
                    console.log("You win");
                    break;
                case 'scissor':
                    console.log("You lose");
                    break;
                case 'paper':
                    console.log("Draw");
                    break;
            }
        break;
        case 'scissor':
            switch (computer1) {
                case 'rock':
                    console.log("You lose");
                    break;
                case 'scissor':
                    console.log("Draw");
                    break;
                case 'paper':
                    console.log("You win");
                    break;
            }
        break;
    }
})

computer.on("computer", function (a) {
    computer1 = a;
    //console.log('a',user1, 'b',computer1,'c');
})

//console.log('p', user1, 'q', computer1, 'r');