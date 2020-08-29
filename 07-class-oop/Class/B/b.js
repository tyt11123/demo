class Player {
    constructor(options) {
        this.name = options.name;
        this.health = options.health;
    }
    attack(opponent) {
        console.log(`${this.name} attacks ${opponent.name}, he has done 10 worth of damage.`)
        opponent.health -= 10;
        console.log(`The target has ${opponent.health} health left.`)
    };
    
    heal(target) {
        console.log(`${this.name} heals ${target.name}, he has done 5 worth of heal.`)
        target.health += 5;
        console.log(`The target has ${target.health} health left.`)        
    }
}

const hector = new Player ({name: "Hector", health: 150});
const achilles = new Player ({name: "Achilles", health: 140});

let count = 0;
do {
    let rand = Math.floor(Math.random() * 100);
    if (rand % 2) {
        hector.attack(achilles);   // counter goes positive when hector attack
        if (count >= 0) {count += 1;} else {count = 1;}
    } else {
        achilles.attack(hector);  // counter goes negative when achilles attack
        if (count <= 0) {count -= 1;} else {count = -1;}
    }
    if (count == 3) {       // hector attack 3 in a row
        console.log('Three rounds of attack in a row');
        hector.heal(hector);
        count = 0;
    }
    if (count == -3) {        // achilles attack 3 in a row
        console.log('Three rounds of attack in a row');
        achilles.heal(achilles);
        count = 0;
    }
} while ( (hector.health > 0) && (achilles.health > 0) );

if (hector.health <= 0) {
    console.log('Achilles is the winner');
} else {
    console.log("Hector is the winner");
}