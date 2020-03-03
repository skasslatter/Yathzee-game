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
  if (game.throws > 0) {
    scoreCard.addTwos(game.allDice);
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

//fuer alle umstellen
let $scoreThree = document.getElementById("3-score");
$scoreThree.addEventListener("click", function() {
  if (game.throws > 0) {
    scoreCard.addThrees(game.allDice);
    $scoreThree.innerHTML = scoreCard.state.allThrees;
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $scoreFour = document.getElementById("4-score");
$scoreFour.addEventListener("click", function() {
  if (game.throws > 0) {
    scoreCard.addFours(game.allDice);
    $scoreFour.innerHTML = scoreCard.state.allFours;
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $scoreFive = document.getElementById("5-score");
$scoreFive.addEventListener("click", function() {
  if (game.throws > 0) {
    scoreCard.addFives(game.allDice);
    $scoreFive.innerHTML = scoreCard.state.allFives;
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $scoreSix = document.getElementById("6-score");
$scoreSix.addEventListener("click", function() {
  if (game.throws > 0) {
    scoreCard.addSix(game.allDice);
    $scoreSix.innerHTML = scoreCard.state.allSixes;
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $threeOfaKind = document.getElementById("3-kind");
$threeOfaKind.addEventListener("click", function() {
  if (game.throws > 0) {
    scoreCard.addthreeOfaKind(game.allDice);
    $threeOfaKind.innerHTML = scoreCard.state.threeOfaKind;
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $fourOfaKind = document.getElementById("4-kind");
$fourOfaKind.addEventListener("click", function() {
  if (game.throws > 0) {
    scoreCard.addFourOfaKind(game.allDice);
    $fourOfaKind.innerHTML = scoreCard.state.fourOfaKind;
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $fullHouse = document.getElementById("full-house");
$fullHouse.addEventListener("click", function() {
  if (game.throws > 0) {
    scoreCard.addFullHouse(game.allDice);
    $fullHouse.innerHTML = scoreCard.state.fullHouse;
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

// let $smallStraight = document.getElementById("small-straight");
// $smallStraight.addEventListener("click", function(){
//   if (game.throws > 0) {
//   scoreCard.addSmallStraight(game.allDice);
//   $smallStraight.innerHTML = scoreCard.state.smallStraight;
//   renderGame(game, scoreCard);
//   game.resetThrows()
//   }
// })

let $bigStraight = document.getElementById("big-straight");
$bigStraight.addEventListener("click", function() {
  if (game.throws > 0) {
    scoreCard.addBigStraight(game.allDice);
    $bigStraight.innerHTML = scoreCard.state.bigStraight;
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $yahtzee = document.getElementById("yahtzee");
$yahtzee.addEventListener("click", function() {
  if (game.throws > 0) {
    scoreCard.addYahtzee(game.allDice);
    $yahtzee.innerHTML = scoreCard.state.yahtzee;
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

let $chance = document.getElementById("chance");
$chance.addEventListener("click", function() {
  if (game.throws > 0) {
    scoreCard.addChance(game.allDice);
    $chance.innerHTML = scoreCard.state.chance;
    game.resetThrows();
    renderGame(game, scoreCard);
  }
});

// let $specChance = document.querySelector("#chance .speculative-score");
