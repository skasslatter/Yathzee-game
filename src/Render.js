function renderScorecard(scorecard) {
  
}

function renderBoard(board) {
  let $board = document.getElementById("board");
  let $dice = $board.querySelectorAll(".dice");

  $dice.forEach(function($oneDice) {
    $oneDice.style.visibility = "hidden";
  });

  board.allDice.forEach(function(dice, index) {
    $dice[index].innerHTML = dice.eyes;
    $dice[index].style.visibility = "visible";
  });
}

function renderHand(hand) {
  let $hand = document.getElementById("hand");
  let $dice = $hand.querySelectorAll(".dice");

  $dice.forEach(function($oneDice) {
    $oneDice.style.visibility = "hidden";
  });

  hand.allDice.forEach(function(dice, index) {
    $dice[index].innerHTML = dice.eyes;
    $dice[index].style.visibility = "visible";
  });
}

function renderThrow() {
  $progressBar = document.getElementById("progress-bar");
  if (game.throws === 1) {
    $progressBar.innerHTML = "1/3 Throws";
    $progressBar.style = "width:33%";
  } else if (game.throws === 2) {
    $progressBar.innerHTML = "2/3 Throws";
    $progressBar.style = "width:66%";
  } else if (game.throws === 3) {
    $progressBar.innerHTML = "3/3 Throws";
    $progressBar.style = "width:100%";
  }
}

function renderGame(game, scorecard) {
  renderScorecard(scorecard);
  renderBoard(game.board);
  renderHand(game.hand);
  renderThrow(game.throws);
}
