class Dice {   //equals 1 dice!
    constructor(){
        this.eyes = null;
    }

    rollDice () {
        this.eyes = Math.floor((Math.random() * 6)+1)
        return this.eyes;
    }
}

//ok for now