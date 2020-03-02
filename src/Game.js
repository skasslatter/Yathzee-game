class Game {
    constructor(){
        this.hand = new Hand();
        this.board = new Board();
        this.allDice = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice()] //5 Wuerfel
                                                                                    //benuetzen um im html anzuzeigen
        this.throws = 0;
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

    rollDice(){
        // falls throws < 3, soll rollDice von Board aufrufen
        //und dann throws +1
        //sonst passiert nichts
    }
}

let aGame = new Game
