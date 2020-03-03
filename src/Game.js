class Game {
  constructor() {
    this.hand = new Hand();
    this.board = new Board();
    this.allDice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice()]; //5 dice
    //use to show in html
    this.throws = 0;
  }

  addToBoard(oneDice) {
    //adds to board and removes from hand
    this.board.addDice(oneDice);
    this.hand.removeDice(oneDice);
  }

  removeFromBoard(oneDice) {
    //adds to hand and removes from board
    this.hand.addDice(oneDice);
    this.board.removeDice(oneDice);
  }

  rollDice() {
    let self = this;
    if (this.throws === 0) {
      this.allDice.forEach(function(dice) {
        self.board.addDice(dice);
      });
    }
    if (this.throws < 3) {
      this.throws = this.throws + 1;
      this.board.rollAllDice();
    }
  }

  resetThrows() {
    this.throws = 0;
    return this.throws
  }
}
