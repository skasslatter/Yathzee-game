function renderScorecard(game, scoreCard) {
  //actual score
  let $scoreOne = document.getElementById("1-score");
  $scoreOne.innerHTML = scoreCard.state.allOnes;

  let $scoreTwo = document.getElementById("2-score");
  $scoreTwo.innerHTML = scoreCard.state.allTwos;

  //...fuer alle

  //speculative score

  let $specOne = document.getElementById("1-score-spec");
  if (scoreCard.state.allOnes === null) {
    $specOne.innerHTML = calcOnes(game.allDice);
  } else {
    $specOne.innerHTML = "";
  }

  //...fuer alle


  //bonus
  let $bonus = document.getElementById("bonus");
  if (scoreCard.getBonus() !== 0) {
    $bonus.innerHTML = scoreCard.getBonus();
  }

  //total
  let $total = document.getElementById("total");
  $total.innerHTML = scoreCard.getTotal();
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
  let $progressBar = document.getElementById("progress-bar");
  let $rollButton = document.getElementById("rollButton");

  if (game.throws === 0) {
    $rollButton.disabled = false;
    $progressBar.innerHTML = "0/3 Throws";
    $progressBar.style = "width:0%";
  } else if (game.throws === 1) {
    $rollButton.disabled = false;
    $progressBar.innerHTML = "1/3 Throws";
    $progressBar.style = "width:33%";
  } else if (game.throws === 2) {
    $rollButton.disabled = false;
    $progressBar.innerHTML = "2/3 Throws";
    $progressBar.style = "width:66%";
  } else if (game.throws === 3) {
    $rollButton.disabled = true;
    $progressBar.innerHTML = "3/3 Throws";
    $progressBar.style = "width:100%";
  }
}

function renderFinish() {
  let $game = document.getElementById("game")
  if (scoreCard.isGameFinished() === true){
    $game.style.display = "none"
  }
  else {
    $game.style.display = "block"
  }

  //hier fehlt noch der container fue den Score
  //zb Well done, your score is xx
  //dann ein button zb start new game
  //der button setzt style.display wieder auf block/none
}


function renderGame(game, scorecard) {
  renderBoard(game.board);
  renderHand(game.hand);
  renderScorecard(game, scorecard);
  renderThrow(game.throws);
  renderFinish()
}
