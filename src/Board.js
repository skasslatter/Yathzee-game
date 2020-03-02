// https://cardgames.io/yahtzee/

class Board {
  constructor() {
    this.allDice = [];
  }

  rollAllDice() {
    // this.allDice.forEach(function(dice) {
    //     aGame.allDice.rollAllDice; 
    // });

    //all dice in board rollDice aufrufen
    //mit loop, mit allen [i] rollDice method aufrufen (von Dice)
    //soll throws -1
  }
  addDice(oneDice) {
    if (this.allDice.length < 6) {
      this.allDice.push(oneDice);
    }
  }

  removeDice(oneDice) {
    if (this.allDice.length > 0) {
      var index = this.allDice.indexOf(oneDice);
      this.allDice.splice(index, 1);
    }
  }
}


