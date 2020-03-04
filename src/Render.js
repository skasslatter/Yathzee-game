function renderScorecard(game, scoreCard) {
  //ACTUAL score
  let $scoreOne = document.getElementById("1-score");
  $scoreOne.innerHTML = scoreCard.state.allOnes;

  let $scoreTwo = document.getElementById("2-score");
  $scoreTwo.innerHTML = scoreCard.state.allTwos;

  let $scoreThree = document.getElementById("3-score");
  $scoreThree.innerHTML = scoreCard.state.allThrees;

  let $scoreFour = document.getElementById("4-score");
  $scoreFour.innerHTML = scoreCard.state.allFours;

  let $scoreFive = document.getElementById("5-score");
  $scoreFive.innerHTML = scoreCard.state.allFives;

  let $scoreSix = document.getElementById("6-score");
  $scoreSix.innerHTML = scoreCard.state.allSixes;

  let $threeOfaKind = document.getElementById("3-kind");
  $threeOfaKind.innerHTML = scoreCard.state.threeOfaKind;

  let $fourOfaKind = document.getElementById("4-kind");
  $fourOfaKind.innerHTML = scoreCard.state.fourOfaKind;

  let $fullHouse = document.getElementById("full-house");
  $fullHouse.innerHTML = scoreCard.state.fullHouse;

  let $smallStraight = document.getElementById("small-straight");
  $smallStraight.innerHTML = scoreCard.state.smallStraight;

  let $bigStraight = document.getElementById("big-straight");
  $bigStraight.innerHTML = scoreCard.state.bigStraight;

  let $yahtzee = document.getElementById("yahtzee");
  $yahtzee.innerHTML = scoreCard.state.yahtzee;

  let $chance = document.getElementById("chance");
  $chance.innerHTML = scoreCard.state.chance;

  //SPECULATIVE score
  let $specOne = document.getElementById("1-score-spec");
  if (scoreCard.state.allOnes === null) {
    $specOne.innerHTML = "+" + calcOnes(game.allDice);
  } else {
    $specOne.innerHTML = "";
  }

  let $specTwo = document.getElementById("2-score-spec");
  if (scoreCard.state.allTwos === null) {
    $specTwo.innerHTML = "+" + calcTwo(game.allDice);
  } else {
    $specTwo.innerHTML = "";
  }

  let $specThree = document.getElementById("3-score-spec");
  if (scoreCard.state.allThrees === null) {
    $specThree.innerHTML = "+" + calcThree(game.allDice);
  } else {
    $specThree.innerHTML = "";
  }

  let $specFour = document.getElementById("4-score-spec");
  if (scoreCard.state.allFours === null) {
    $specFour.innerHTML = "+" + calcFour(game.allDice);
  } else {
    $specFour.innerHTML = "";
  }

  let $specFive = document.getElementById("5-score-spec");
  if (scoreCard.state.allFives === null) {
    $specFive.innerHTML = "+" + calcFive(game.allDice);
  } else {
    $specFive.innerHTML = "";
  }

  let $specSix = document.getElementById("6-score-spec");
  if (scoreCard.state.allSixes === null) {
    $specSix.innerHTML = "+" + calcSix(game.allDice);
  } else {
    $specSix.innerHTML = "";
  }

  let $spec3ofaKind = document.getElementById("3-kind-spec");
  if (scoreCard.state.threeOfaKind === null) {
    $spec3ofaKind.innerHTML = "+" + calcThreeOfAKind(game.allDice);
  } else {
    $spec3ofaKind.innerHTML = "";
  }

  let $spec4ofaKind = document.getElementById("4-kind-spec");
  if (scoreCard.state.fourOfaKind === null) {
    $spec4ofaKind.innerHTML = "+" + calcFourOfAKind(game.allDice);
  } else {
    $spec4ofaKind.innerHTML = "";
  }

  let $specFullHouse = document.getElementById("full-house-spec");
  if (scoreCard.state.fullHouse === null) {
    $specFullHouse.innerHTML = "+" + calcFullHouse(game.allDice);
  } else {
    $specFullHouse.innerHTML = "";
  }

  let $specSmallStraight = document.getElementById("small-straight-spec");
  if (scoreCard.state.smallStraight === null) {
    $specSmallStraight.innerHTML = "+" + calcSmallStraight(game.allDice);
  } else {
    $specSmallStraight.innerHTML = "";
  }

  let $specBigStraight = document.getElementById("big-straight-spec");
  if (scoreCard.state.bigStraight === null) {
    $specBigStraight.innerHTML = "+" + calcBigStraight(game.allDice);
  } else {
    $specBigStraight.innerHTML = "";
  }

  let $specYahtzee = document.getElementById("yahtzee-spec");
  if (scoreCard.state.yahtzee === null) {
    $specYahtzee.innerHTML = "+" + calcYahtzee(game.allDice);
  } else {
    $specYahtzee.innerHTML = "";
  }

  let $specChance = document.getElementById("chance-spec");
  if (scoreCard.state.chance === null) {
    $specChance.innerHTML = "+" + calcChance(game.allDice);
  } else {
    $specChance.innerHTML = "";
  }

  //bonus
  let $bonus = document.getElementById("bonus");
  if (scoreCard.getBonus() !== 0) {
    $bonus.innerHTML = scoreCard.getBonus();
  }

  //total
  let $total = document.getElementById("total");
  $total.innerHTML = scoreCard.getTotal();
}

function renderDice(dice) {
  let symbols = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    if (dice.eyes === 1) {
      return symbols[0];
    } else if (dice.eyes === 2) {
      return symbols[1];
    } else if (dice.eyes === 3) {
      return symbols[2];
    } else if (dice.eyes === 4) {
      return symbols[3];
    } else if (dice.eyes === 5) {
      return symbols[4];
    } else if (dice.eyes === 6) {
      return symbols[5];
    }
}

function renderBoard(board) {
  let $board = document.getElementById("board");
  let $dice = $board.querySelectorAll(".dice");
  $dice.forEach(function($oneDice) {
    $oneDice.style.visibility = "hidden";
  });
  board.allDice.forEach(function(dice, index) {
    $dice[index].innerHTML = renderDice(dice);
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
    $dice[index].innerHTML = renderDice(dice);
    $dice[index].style.visibility = "visible";
  });
}

function resetSpecScore() {
  let $specScore = document.querySelectorAll(".speculative-score");
  $specScore.forEach(function($oneScore) {
    $oneScore.innerHTML = "";
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
  let $game = document.getElementById("game");
  if (scoreCard.isGameFinished() === true) {
    $game.style.display = "none";
  } else {
    $game.style.display = "block";
  }
}
  //hier fehlt noch der container fue den Score
  //zb Well done, your score is xx
  //dann ein button zb start new game
  //der button setzt style.display wieder auf block/none

function renderGame(game, scorecard) {
  resetSpecScore();
  renderBoard(game.board);
  renderHand(game.hand);
  renderScorecard(game, scorecard);
  renderThrow(game.throws);
  renderFinish();
}
