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
    game.removeFromBoard(game.board.allDice[index])
    renderGame(game, scoreCard);
  });
});

// board.allDice.forEach(function (dice, index) {
//   $dice[index].innerHTML = dice.eyes;
// });
