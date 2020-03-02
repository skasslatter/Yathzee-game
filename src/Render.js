function renderScorecard(scorecard) {}

function renderBoard(board) {
  let $board = document.getElementById("board");
  let $dice = $board.querySelectorAll(".dice");
 
  $dice.forEach(function ($oneDice){
    $oneDice.style.visibility = "hidden";
  });

  board.allDice.forEach(function (dice, index) {
    $dice[index].innerHTML = dice.eyes;
    $dice[index].style.visibility = "visible"
  });

}

function renderHand(hand) {

}

function renderThrow(throws) {

}

function renderGame(game, scorecard) {
  renderScorecard(scorecard);
  renderBoard(game.board);
  renderHand(game.hand);
  renderThrow(game.throws);
}


