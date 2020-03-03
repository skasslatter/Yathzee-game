let game = new Game();
let scoreCard = new ScoreCard();

let $rollDiceButton = document.getElementById("rollButton");
$rollDiceButton.addEventListener("click", function() {
  game.rollDice();
  renderGame(game, scoreCard);
});

let $boardDice = document.querySelectorAll("#board .dice");
$boardDice.forEach(function($dice, index) {
  $dice.addEventListener("click", function() {
    game.removeFromBoard(game.board.allDice[index]);
    renderGame(game, scoreCard);
  });

  let $handDice = document.querySelectorAll("#hand .dice");
  $handDice.forEach(function($dice, index) {
    $dice.addEventListener("click", function() {
      game.addToBoard(game.hand.allDice[index]);
      renderGame(game, scoreCard);
    });
  });
});

//SCORECARD
