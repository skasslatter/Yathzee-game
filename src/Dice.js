class Dice {   //equals 1 dice!
    constructor(){
        this.eyes = null;
    }

    rollDice () {
        let eyes = Math.floor((Math.random() * 6)+1)
        return eyes;
    }
}

//ok for now