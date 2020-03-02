class ScoreCard {
  constructor() {
    this.state = {
      allOnes: null,
      allTwos: null,
      allThrees: null,
      allFours: null,
      allFives: null,
      allSixes: null,
      threeOfaKind: null,
      fourOfaKind: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yahtzee: null,
      chance: null
    };
  }
  //potential score
  //actual score

  addOnes(diceArray) {
    if (this.state.allOnes === null) {
      this.state.allOnes = calcOnes(diceArray);
    }
  }

  addTwos(diceArray) {
    if (this.state.allTwos === null) {
      this.state.allTwos = calcTwo(diceArray);
    }
  }

  addThrees(diceArray) {
    //gets array, calc sum of all 3s in array
    //write sum in 3-field
    if (this.state.allThrees === null) {
      this.state.allThrees = calcThree(diceArray);
    }
  }
  addFours(diceArray) {
    if (this.state.allFours === null) {
      this.state.allFours = calcFour(diceArray);
    }
  }
  addFives(diceArray) {
    if (this.state.allFives === null) {
      this.state.allFives = calcFive(diceArray);
    }
  }
  addSix(diceArray) {
    if (this.state.allSixes === null) {
      this.state.allSixes = calcSix(diceArray);
    }
  }
}

///////generic calc function
function calcN(diceArray, number) {
  var calc = 0;
  for (i = 0; i < diceArray.length; i++) {
    if (diceArray[i].eyes === number) {
      calc = calc + number;
    }
  }
  return calc;
}

///////generic sum function
function sum(diceArray) {
  var sum = 0;
  for (i = 0; i < diceArray.length; i++) {
    sum = sum + diceArray[i].eyes;
  }
  return sum;
}

/////generic counter function
function counter(diceArray, dice) {
  var counter = 0;
  for (let i = 0; i < diceArray.length; i++) {
    if (diceArray[i].eyes === dice.eyes) {
      counter++;
    }
  }
  return counter;
}

///// UPPER SECTION calc functions
function calcOnes(diceArray) {
  return calcN(diceArray, 1);
}

function calcTwo(diceArray) {
  return calcN(diceArray, 2);
}

function calcThree(diceArray) {
  return calcN(diceArray, 3);
}

function calcFour(diceArray) {
  return calcN(diceArray, 4);
}

function calcFive(diceArray) {
  return calcN(diceArray, 5);
}

function calcSix(diceArray) {
  return calcN(diceArray, 6);
}

///// LOWER SECTION calc functions

function calcThreeOfAKind(diceArray) {
  if (
    counter(diceArray, 1) >= 3 ||
    counter(diceArray, 2) >= 3 ||
    counter(diceArray, 3) >= 3 ||
    counter(diceArray, 4) >= 3 ||
    counter(diceArray, 5) >= 3 ||
    counter(diceArray, 6) >= 3
  ) {
    return sum(diceArray);
  }
}

function calcFourOfAKind(diceArray) {
  if (
    counter(diceArray, 1) >= 4 ||
    counter(diceArray, 2) >= 4 ||
    counter(diceArray, 3) >= 4 ||
    counter(diceArray, 4) >= 4 ||
    counter(diceArray, 5) >= 4 ||
    counter(diceArray, 6) >= 4
  ) {
    return sum(diceArray);
  }
}

function calcFullHouse(diceArray) {
  if (
    (counter(diceArray, 1) >= 3 ||
      counter(diceArray, 2) >= 3 ||
      counter(diceArray, 3) >= 3 ||
      counter(diceArray, 4) >= 3 ||
      counter(diceArray, 5) >= 3 ||
      counter(diceArray, 6) >= 3) &&
    (counter(diceArray, 1) >= 2 ||
      counter(diceArray, 2) >= 2 ||
      counter(diceArray, 3) >= 2 ||
      counter(diceArray, 4) >= 2 ||
      counter(diceArray, 5) >= 2 ||
      counter(diceArray, 6) >= 2)
  ) {
    return 25; //full house is always 25
  }
}

function bigStraight(diceArray) {
  let sortedArray = diceArray.eyes.sort();
  if (sortedArray === [1, 2, 3, 4, 5, 6]) {
    //needs to have all numbers from 1-6
    return 40; //bigStraight is always 40
  }
}

function smallStraight(diceArray) {
  //noch eyes??
  if (diceArray.includes(2, 3, 4, 5, 6)
  || diceArray.includes(1, 2, 3, 4, 5)) {
    return 30; //smallStraight is always 30
  }
}

function calcYahtzee(diceArray) {
  for (i = 1; i < diceArray.length; i++) {
    if (diceArray[i].eyes === diceArray[i - 1].eyes) {
      return 50;
    } else {
      return 0;
    }
  }
}

function calcChance(diceArray) {
    return sum(diceArray);
}   //the sum of all dice, no rules

///// TOTAL SUM FUNCTION
function total(ScoreCard) {
  var total = 0;
  for (let property in ScoreCard.state) {
    total += ScoreCard.state[property];
  }
  return total;
}
