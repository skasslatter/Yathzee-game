class ScoreCard {
  constructor() {
    this.state= {
      allOnes: null,
      allTwos: null,
      allThrees: null,
      allFours: null,
      allFives: null,
      allSixes: null,
    }
  }

  addThrees(numbersArray){
    
  }
}


function calcYahtzee(allEyes){
	let isYahtzee = true;
	var sumYahtzee = 0;
  for(i = 1; i < allEyes.length; i++){
		if(allEyes[i] !== allEyes[i-1]){
			isYahtzee = false;
			return false;
		}
    else {
      sumYahtzee = 50;
      return true
      ('#yahtzee span').text(`${sumYahtzee}`)
		}
	}
}

function calcChance(allEyes){
	var sumChance = 0;
	for (i = 0; i < allEyes.length; i++) {
		sumChance += allEyes[i];
	}
  // ('#chance span').text(`${sumChance}`)
  return sumChance;
}

function calcOnes(allEyes){
  var sumOne = 0;
	for (i = 0; i < allEyes.length; i++) {
		if(allEyes[i] === 1){
		  sumOne += 1;
		}
	}
	('#ones span').text(sumOne);
}

function calcTwo(allEyes){
	var sumTwo = 0;
	for (i = 0; i < allEyes.length; i++) {
		if(allEyes[i] === 2){
			sumTwo += 2;
    }
  }
	('#twos span').text(sumTwo);
}

function calcThree(allEyes){
	var sumThree = 0;
	for (i = 0; i < allEyes.length; i++) {
		if(allEyes[i] === 3){
			sumThree += 3;
		}
	} return sumThree
		// ('#threes span').text(sumThree);
}

function calcFour(allEyes){
	var sumFour = 0;
	for (i = 0; i < allEyes.length; i++) {
		if(allEyes[i] === 4){
			sumFour += 4;
		}
	}
	$('#fours span').text(sumFour);
}

function calcFive(allEyes){
	var sumFive = 0;
	for (i = 0; i < allEyes.length; i++) {
		if(allEyes[i] === 5){
			sumFive += 5;
		}
	}
	$('#fives span').text(sumFive);
}

//////////
function calcSix(allEyes){
	return calcN(allEyes, 6)
}

///////allgemein
function calcN(allEyes, number){
	var sum = 0;
	for (i = 0; i < allEyes.length; i++) {
		if(allEyes[i] === number){
			sum = sum + number;
    }
  }
  return sum;
}