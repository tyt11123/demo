class Monster {
    constructor (options) {
        this.name = options.name;
        this.health = options.health;
    }

    wound (damage) {
        this.health -= damage;
        if (this.health <= 0) {
            console.log("monster dead");
        }
    }
}

let hero = function(monster) {
    let max = 20;
    let min = 5;
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Hero hurt ${monster.name} by ${rand}`);
    monster.wound(rand);
}

let slime = new Monster ({name: 'Slime', health: 100});
do {
    hero(slime);
} while (slime.health > 0);