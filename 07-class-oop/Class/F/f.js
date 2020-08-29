class Gambler {
    constructor (options) {
        this.cash = options.cash;
        this.bet = options.bet;
        this.name = options.name;
        this.probability = Math.floor(Math.random() * 50);  //winning probabily factor
    }

    play () {
        let rand = Math.floor(Math.random() * 100) + 1;  //casino side
        if (rand >= this.probability) {  // if casino win
            if (this.cash < this.bet) {
                this.cash = 0;
            } else {
                this.cash-= this.bet;
            }
            console.log(`Gambler ${this.name} lost, $${this.cash} remaining`);
        } else {
            this.cash += this.bet;
            console.log(`Gambler ${this.name} win, $${this.cash} remaining`);
        }
    }
}

let peter = new Gambler({cash: 100, bet: 10, name: 'Peter'});
let tom = new Gambler({cash: 150, bet: 20, name: 'Tom'});
let player = [];
player.push(peter);
player.push(tom);

function casino(customer) {
    console.log(`Casino bets are in!`);
    let round = 1;
    let loser = [];
    let num = customer.length; //number of customers at the beginning
    do {
        console.log(`---- Round ${round} ----`);
        customer.forEach( (dude, code) => {
            let enter = Math.round(Math.random());   // enter - join the gamble or not
            if (enter) {dude.play();}
            if (dude.cash === 0) {
                loser.push(dude.name);    //record the losing order
                customer.splice(code, 1);  //kick the losing dude away
            }
        })
        round += 1;
    } while (loser.length < num);
    console.log(`The order of players that ran out of cash: ${loser}`);
}

casino(player);