class Bird {
    constructor() {
        this.fly = true;
        this.swim = false;
        this.egg = true;
        this.milk = false;
    }
}

class Fish {
    constructor() {
        this.fly = false;
        this.swim = true;
        this.egg = true;
        this.milk = false;
    }
}

class Bat extends Bird{
    constructor() {
        super();
        this.egg = false;
        this.milk = true;
    }
}

class Whale extends Fish{
    constructor() {
        super();
        this.egg = false;
        this.milk = true;
    }
}