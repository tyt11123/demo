const EventEmitter = require('events');
module.exports = class Gambler extends EventEmitter {
    constructor() {
        super();
        this.bank = 100;
        this.bet = 10;
        this.selection = -1;
    }
    deduct(num) {
        this.bank -= num;
    }
    add(num) {
        this.bank += num;
    }
    gamble(bookkeeper) {                      
        this.deduct(this.bet);
        bookkeeper.add(this.bet);
        this.selection = (bookkeeper.userodds > bookkeeper.pcodds) ? 1 : 2;
        // selection = 1, bet player wins; selection = 2, bet computer wins
        let choice = (this.selection === 1) ? "user" : "computer";
        console.log(`Gambler bet $${this.bet} for ${choice}`);
        this.emit("bet",this.selection);
    }
}