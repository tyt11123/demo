class Fly {
    constructor(options) {
        this.speed = options.speed;
    }
    dash() {
        console.log('fap');
    }
}

class Swim {
    constructor(options) {
        this.speed = options.speed;
    }
    dash() {
        console.log('swish');
    }
}

class Egg {
    constructor(options) {
        this.quantity = options.quantity;
    }
}

class Milk {
    constructor(options) {
        this.volume = options.volume;
    }
}

class Bird {
    constructor() {
        this.fly = new Fly({speed: 10});
        this.egg = new Egg({quantity: 1});
    }
    dash() {
        return this.fly.dash();
    }
}

class Fish {
    constructor() {
        this.swim = new Swim({speed: 5});
        this.egg = new Egg({quantity: 10000});
    }
    dash() {
        return this.swim.dash();
    }
}

class Bat {
    constructor() {
        this.fly = new Fly({speed: 8});
        this.milk = new Milk({volume: 1});
    }
    dash() {
        return this.fly.dash();
    }
}

class Whale {
    constructor() {
        this.swim = new Swim({speed: 10});
        this.milk = new Milk({volume: 10000});
    }
    dash() {
        return this.swim.dash();
    }
}