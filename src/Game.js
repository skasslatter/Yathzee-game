class Game {
    constructor(){
        this.hand = new Hand();
        this.board = new Board();
        this.allDice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice()]
        this.throws = 3;
    }
    startGame (){
        this.allDice.forEach(function (dice){
            this.board.addDice(dice)    
        })
    }
    addToBoard(){
        //ruft add von board auf und remove von hand
    }

    removeFromBoard(){
        //ruft remove von board auf und add von hand

    }
}