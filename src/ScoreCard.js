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
      bigStraight: null,
      yahtzee: null,
      chance: null
    };
  }

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

  getBonus() {
    let totalUpperSection =
      this.state.allOnes +
      this.state.allTwos +
      this.state.allThrees +
      this.state.allFours +
      this.state.allFives +
      this.state.allSixes;
    if (totalUpperSection >= 63) {
      return 50;
    }
    return 0;
  }

  getTotal() {
    var total = 0;
    var bonus = this.getBonus();
    for (let property in this.state) {
      total += this.state[property];
    }
    return total + bonus;
  }

  isGameFinished() {
    for (let property in this.state) {
      if (this.state[property] === null) {
        return false;
      }
    }
    return true;
  }
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
  let frequency = calcFrequency(diceArray);
  if (frequency.includes(3) || frequency.includes(4) || frequency.includes(5)) {
    return sum(diceArray);
  }
  return 0;
}

function calcFourOfAKind(diceArray) {
  let frequency = calcFrequency(diceArray);
  if (frequency.includes(4) || frequency.includes(5)) {
    return sum(diceArray);
  }
  return 0;
}

function calcFullHouse(diceArray) {
  let frequency = calcFrequency(diceArray);
  if (frequency.includes(2) && frequency.includes(3)) {
    return 25;
  } else return 0;
}

// bigStraight is always 40
function calcBigStraight(diceArray) {
  let frequency = calcFrequency(diceArray);
  let stringFrequency = frequency.toString();
  if (
    stringFrequency === "1,1,1,1,1,0" ||
    stringFrequency === "0,1,1,1,1,1" ||
    frequency.includes(5) //to check if it's yahtzee. Yahtzee enables you to choose small or big Staight too
  ) {
    return 40;
  }
  return 0;
}

// smallStraight is always 30
function calcSmallStraight(diceArray) {
  let frequency = calcFrequency(diceArray);
  if (frequency.includes(5)) {
    //to check if it's yahtzee. Yahtzee enables you to choose small or big Staight too
    return 30;
  }
  let nrArray = transformArray(diceArray);
  nrArray.sort();
  let uniqueArray = uniquifyArray(nrArray); //to get rid of duplicates
  let count = 0;

  for (let i = 1; i < uniqueArray.length; i++) {
    if (uniqueArray[i] === uniqueArray[i - 1] + 1) {
      count = count + 1;
      if (count >= 3) {
        return 30;
      }
    } else {
      count = 0;
    }
  }
  return 0;
}

// function calcSmallStraight(diceArray) {
//   debugger
//   let frequency = calcFrequency(diceArray);
//   if (frequency.includes("5")) {    //to check if it's yahtzee. Yahtzee enables you to choose small or big Staight too
//     return 30;
//   }

//   let nrArray = transformArray(diceArray);
//   nrArray.sort();

//   let uniqueArray = uniquifyArray(nrArray)
//   let count = 0;

//   for (let i = 1; i < uniqueArray.length; i++) {
//     if (uniqueArray[i] === uniqueArray[i - 1] -1) {
//       count = count + 1;
//       if (count >= 3) {
//         return 30;
//       }
//     } else {
//       count = 0;
//     }
//   }
//   return 0;
// }

//yathzee is always 50. Yatzee enables you to choose small or big Staight too
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

////HELPER FUNCTIONS

function transformArray(diceArray) {
  let newArray = [];
  diceArray.forEach(function(dice) {
    newArray.push(dice.eyes);
  });
  return newArray;
}

function sum(diceArray) {
  var sum = 0;
  for (i = 0; i < diceArray.length; i++) {
    sum = sum + diceArray[i].eyes;
  }
  return sum;
}

function counter(array, item) {
  var counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}

function calcN(diceArray, number) {
  var calc = 0;
  for (i = 0; i < diceArray.length; i++) {
    if (diceArray[i].eyes === number) {
      calc = calc + number;
    }
  }
  return calc;
}

function calcFrequency(diceArray) {
  let frequency = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < diceArray.length; i++) {
    let value = diceArray[i].eyes;
    frequency[value - 1] = frequency[value - 1] + 1;
  }
  return frequency;
}

function uniquifyArray(array) {
  let uniqueArray = [];
  for (i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
