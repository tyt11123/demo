const EventEmitter = require('events');
module.exports = class BookKeeper extends EventEmitter {
    constructor() {
        super();
        this.book = {
            draw: 0,
            "player win": 0,
            "player lose": 0,
            total: 0
        }
        this.draw = 0;        // draw percentage
        this.user = 0;        // player win percentage
        this.pc = 0;          // computer win percentage
        this.userodds = 0;    // user win odds
        this.pcodds = 0;      // computer win odds
        this.bank = 100;
        this.lastResult = -1;
        this.round = 0;
    }
    // keep() {
    //     const that = this;
    //     const Referee = require('./referee');
    //     let referee = new Referee();
    //     let intervalObj = setInterval(() => {
    //         referee.judge();
    //         that.book.total++;
    //         that.book[Object.keys(that.book)[referee.result]]++;
    //         console.log(that.book);
    //     }, 500);
    //     setTimeout(function() {
    //         clearInterval(intervalObj);
    //         that.emit("keep",that.book);
    //     }, 10600);
    // }
    keep(result) {
        this.lastResult = result;
        this.book.total++;
        this.book[Object.keys(this.book)[result]]++;
        console.log(this.book);
        this.emit("keep",result);
    }
    check() {
        const that = this;
        this.draw = Math.floor(this.book.draw / this.book.total * 100);
        this.user = Math.floor(this.book["player win"] / this.book.total * 100);
        this.pc = Math.floor(this.book["player lose"] / this.book.total * 100);
        console.log(`Draw percentage: ${this.draw}%`);
        console.log(`Player win percentage: ${this.user}%`);
        console.log(`Computer win percentage: ${this.pc}%`);
        this.userodds = this.pc / 100 + 1.1;
        this.pcodds = this.user / 100 + 1.1;
        console.log(`Player win odds: ${this.userodds}`);
        console.log(`Computer win odds: ${this.pcodds}`);
        that.emit("bet", this.userodds, this.pcodds);
    }
    deduct(num) {
        this.bank -= num;
    }
    add(num) {
        this.bank += num;
    }
    dividends(gambler) {
        this.round++;
        let choice = (gambler.selection === 1) ? "user" : "computer";
        if (gambler.selection === this.lastResult) {
            let pay = (gambler.selection === 1) ? this.userodds : this.pcodds;
            pay = Math.floor(pay * gambler.bet);
            console.log(`Gambler wins; pay $${pay} to gambler`);
            gambler.add(pay);
            this.deduct(pay);
        } else {
            console.log(`Gambler lost on his round ${this.round} bet`);
        }
        console.log(`Gambler has $${gambler.bank} left.`)
        console.log(`Bookkeeper has $${this.bank} left.`)
    }
}

// let bookkeeper = new BookKeeper();
// bookkeeper.on("keep", function (a) {
//     bookkeeper.check();
// })
// bookkeeper.keep();