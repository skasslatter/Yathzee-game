class Board {
  constructor() {
    this.allDice = []
  }

  rollAllDice() {
    this.allDice.forEach(function(dice) {
        dice.rollDice(); 
    });
  }

  addDice(oneDice) {
    if (this.allDice.length < 6) {
      this.allDice.push(oneDice);
    }
    return this.allDice
  }

  removeDice(oneDice) {
    if (this.allDice.length > 0) {
      var index = this.allDice.indexOf(oneDice);
      this.allDice.splice(index, 1);
    }
  }
}


