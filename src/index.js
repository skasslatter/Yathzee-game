let game = new Game();
let scoreCard = new ScoreCard();

let $rollDiceButton = document.getElementById("rollButton");
$rollDiceButton.addEventListener("click", function() {
  game.rollDice();
  animateDice();
  renderGame(game, scoreCard);
  animateDice();
});

let $boardDice = document.querySelectorAll("#board .dice");
$boardDice.forEach(function($dice, index) {
  $dice.addEventListener("click", function() {
    game.removeFromBoard(game.board.allDice[index]);
    renderGame(game, scoreCard);
  });
});

let $handDice = document.querySelectorAll("#hand .dice");
$handDice.forEach(function($dice, index) {
  $dice.addEventListener("click", function() {
    game.addToBoard(game.hand.allDice[index]);
    renderGame(game, scoreCard);
  });
});

//SCORECARD, bis 2 ok, ab 3 refactorn! (in render)
let $scoreOne = document.getElementById("1-score");
$scoreOne.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.allOnes === null) {
    scoreCard.addOnes(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $scoreTwo = document.getElementById("2-score");
$scoreTwo.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.allTwos === null) {
    scoreCard.addTwos(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

//fuer alle umstellen
let $scoreThree = document.getElementById("3-score");
$scoreThree.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.allThrees === null) {
    scoreCard.addThrees(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $scoreFour = document.getElementById("4-score");
$scoreFour.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.allFours === null) {
    scoreCard.addFours(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $scoreFive = document.getElementById("5-score");
$scoreFive.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.allFives === null) {
    scoreCard.addFives(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $scoreSix = document.getElementById("6-score");
$scoreSix.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.allSixes === null) {
    scoreCard.addSix(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $threeOfaKind = document.getElementById("3-kind");
$threeOfaKind.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.threeOfaKind === null) {
    scoreCard.addthreeOfaKind(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $fourOfaKind = document.getElementById("4-kind");
$fourOfaKind.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.fourOfaKind === null) {
    scoreCard.addFourOfaKind(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $fullHouse = document.getElementById("full-house");
$fullHouse.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.fullHouse === null) {
    scoreCard.addFullHouse(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $smallStraight = document.getElementById("small-straight");
$smallStraight.addEventListener("click", function(){
  if (game.throws > 0 && scoreCard.state.smallStraight === null) {
  scoreCard.addSmallStraight(game.allDice);
  game.resetThrows()
  renderGame(game, scoreCard);
  }
})

let $bigStraight = document.getElementById("big-straight");
$bigStraight.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.bigStraight === null) {
    scoreCard.addBigStraight(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $yahtzee = document.getElementById("yahtzee");
$yahtzee.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.yahtzee === null) {
    scoreCard.addYahtzee(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $chance = document.getElementById("chance");
$chance.addEventListener("click", function() {
  if (game.throws > 0 && scoreCard.state.chance === null) {
    scoreCard.addChance(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

//MODAL
let modal = document.getElementById("myModal");
let btn = document.getElementById("rulesButton");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let $newGame = document.getElementById("new-game")
$newGame.addEventListener("click", function(){
  game = new Game();
  scoreCard = new ScoreCard();
  renderGame(game, scoreCard);
})