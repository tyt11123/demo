const Referee = require('./referee');
const BookKeeper = require('./bookkeeper');
const Gambler = require('./gambler');
let referee = new Referee();
let bookkeeper = new BookKeeper();
let gambler = new Gambler();

referee.on("judge", function(result) {
    bookkeeper.keep(result);
})
bookkeeper.on("keep", function(){
    bookkeeper.check();
})
bookkeeper.on("bet", function() {
    gambler.gamble(bookkeeper);
})
referee.on("dividend", function(){
    bookkeeper.dividends(gambler);
})
let i = 0;
let intervalObj = setInterval(() => {
    i++;
    console.log(`-------- Round ${i} --------`);
    referee.judge();
    if (i > 1) { referee.emit("dividend");}
    if (gambler.bank <= 0 || bookkeeper.bank <= 0) {
        clearInterval(intervalObj);
        console.log("Game ended");
    }
}, 500);