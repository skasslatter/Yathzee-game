class Hand {
    constructor(){
        this.allDice = [];
    }

    addDice(oneDice){
        if (this.allDice.length < 6){
            this.allDice.push(oneDice) 
        }
    }
    
    removeDice (oneDice){
        if (this.allDice.length > 0){
            var index = this.allDice.indexOf(oneDice);
            this.allDice.splice(index, 1);
        }
    }
    
}

//ok for now