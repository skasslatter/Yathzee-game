class ScoreCard {
  constructor() {
    this.state = {
      allOnes: null,
      allTwos: null,
      allThrees: null,
      allFours: null,
      allFives: null,
      allSixes: null,
      bonus: false,
      threeOfaKind: null,
      fourOfaKind: null,
      fullHouse: null,
      smallStraight: null,
      bigStraight: null,
      yahtzee: null,
      chance: null
    };
  }
  //potential score

  
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
  addthreeOfaKind(diceArray) {
    if (this.state.threeOfaKind === null) {
      this.state.threeOfaKind = calcThreeOfAKind(diceArray);
    }
  }
  addFourOfaKind(diceArray) {
    if (this.state.fourOfaKind === null) {
      this.state.fourOfaKind = calcFourOfAKind(diceArray);
    }
  }
  addFullHouse(diceArray) {
    if (this.state.fullHouse === null) {
      this.state.fullHouse = calcFullHouse(diceArray);
    }
  }
  addSmallStraight(diceArray) {
    if (this.state.smallStraight === null) {
      this.state.smallStraight = calcSmallStraight(diceArray);
    }
  }
  addBigStraight(diceArray) {
    if (this.state.bigStraight === null) {
      this.state.bigStraight = calcBigStraight(diceArray);
    }
  }
  addYahtzee(diceArray) {
    if (this.state.yahtzee === null) {
      this.state.yahtzee = calcYahtzee(diceArray);
    }
  }
  addChance(diceArray) {
    if (this.state.chance === null) {
      this.state.chance = calcChance(diceArray);
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
function counter(array, item) {
  var counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}

/////generic frequency function
function calcFrequency(diceArray) {
  let frequency = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < diceArray.length; i++) {
    let value = diceArray[i].eyes;
    frequency[value - 1] = frequency[value - 1] + 1;
  }
  return frequency;
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

function calcBonus(ScoreCard) {
  let totalUpperSection = (ScoreCard.state.allOnes + ScoreCard.state.allTwos + ScoreCard.state.allThrees + ScoreCard.state.allFours + ScoreCard.state.allFives + ScoreCard.state.allSixes)
  if (totalUpperSection >= 63){
    return ScoreCard.state.bonus = true;
  }
  else return ScoreCard.state.bonus = false;
}

///// LOWER SECTION calc functions
function calcThreeOfAKind(diceArray) {
  let frequency = calcFrequency(diceArray);
  if (frequency.includes(3)){
    return sum(diceArray);
  }
  return 0;
}

// function calcThreeOfAKind(diceArray) {
//   if (
//     counter(diceArray, 1) >= 3 ||
//     counter(diceArray, 2) >= 3 ||
//     counter(diceArray, 3) >= 3 ||
//     counter(diceArray, 4) >= 3 ||
//     counter(diceArray, 5) >= 3 ||
//     counter(diceArray, 6) >= 3
//   ) {
//     return sum(diceArray);
//   }
// }

function calcFourOfAKind(diceArray) {
  let frequency = calcFrequency(diceArray);
  if (frequency.includes(4)){
    return sum(diceArray);
  }
  return 0;
}

function calcFullHouse(diceArray) {
  let frequency = calcFrequency(diceArray);
  if (frequency.includes(2) && frequency.includes(3)){
    return 25;
  }
  else return 0;
}

function calcBigStraight(diceArray) {
  let frequency = calcFrequency(diceArray);
  let stringFrequency = frequency.toString()
  if (stringFrequency === "1,1,1,1,1,0" || stringFrequency === "0,1,1,1,1,1"){
    return 40;
  }
  else return 0;
}

function calcSmallStraight(diceArray) {

}

// bigStraight is always 40
// smallStraight is always 30
//yathzee is alwazs 50


function calcYahtzee(diceArray) {
  for (i = 1; i < diceArray.length; i++) {
    if (diceArray[i].eyes !== diceArray[i - 1].eyes) {
      return 0;
    }
  }
  return 50;
}

function calcChance(diceArray) {
  return sum(diceArray);
} //the sum of all dice, no rules


///// TOTAL SUM FUNCTION

function total(scoreCard) {
  var total = 0;
  for (let property in scoreCard.state) {
    total += scoreCard.state[property];
  }
  if (this.state.bonus === true){
    total = total + 50;
  }
  return total;
}
