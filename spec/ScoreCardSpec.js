let aScoreCard = new ScoreCard();

describe("The scorecard", function() {
  describe("The calcOnes function", function() {
    it("should sum all the 1s", function() {
      let diceArray = [
        (dice1 = { eyes: 2 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      expect(calcOnes(diceArray)).toBe(3);
    });

    it("should return 0 if the array doesn't have 1s", () => {
      let diceArray = [
        (dice1 = { eyes: 2 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 4 })
      ];
      expect(calcOnes(diceArray)).toBe(0);
    });
  });

  describe("The calcTwo function", function() {
    it("should sum all the 2s", function() {
      let diceArray = [
        (dice1 = { eyes: 2 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      expect(calcTwo(diceArray)).toBe(4);
    });

    it("should return 0 if the array doesn't have 2s", () => {
      let diceArray = [
        (dice1 = { eyes: 4 }),
        (dice2 = { eyes: 4 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 4 })
      ];
      expect(calcTwo(diceArray)).toBe(0);
    });
  });

  describe("The calcThree function", function() {
    it("should sum all the 3s", function() {
      let diceArray = [
        (dice1 = { eyes: 3 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 1 })
      ];
      expect(calcThree(diceArray)).toBe(9);
    });

    it("should return 0 if the array doesn't have 3s", () => {
      let diceArray = [
        (dice1 = { eyes: 4 }),
        (dice2 = { eyes: 4 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 4 })
      ];
      expect(calcThree(diceArray)).toBe(0);
    });
  });

  describe("The calcFour function", function() {
    it("should sum all the 4s", function() {
      let diceArray = [
        (dice1 = { eyes: 4 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 4 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 1 })
      ];
      expect(calcFour(diceArray)).toBe(12);
    });

    it("should return 0 if the array doesn't have 4s", () => {
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 3 })
      ];
      expect(calcFour(diceArray)).toBe(0);
    });
  });

  describe("The calcFive function", function() {
    it("should sum all the 5s", function() {
      let diceArray = [
        (dice1 = { eyes: 4 }),
        (dice2 = { eyes: 5 }),
        (dice3 = { eyes: 5 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 1 })
      ];
      expect(calcFive(diceArray)).toBe(10);
    });

    it("should return 0 if the array doesn't have 5s", () => {
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 3 })
      ];
      expect(calcFour(diceArray)).toBe(0);
    });
  });

  describe("The calcSix function", function() {
    it("should sum all the 6s", function() {
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 6 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 1 })
      ];
      expect(calcSix(diceArray)).toBe(18);
    });

    it("should return 0 if the array doesn't have 6s", () => {
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 3 })
      ];
      expect(calcFour(diceArray)).toBe(0);
    });
  });

  describe("The calcThreeOfAKind function", function() {
    it("should check if there are 3 dice of a kind and return the sum of all dice", function() {
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 6 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      expect(calcThreeOfAKind(diceArray)).toBe(20);
    });

    it("should return 0 if the array doesn't have 3 dice of a kind", () => {
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 3 })
      ];
      expect(calcThreeOfAKind(diceArray)).toBe(0);
    });
  });

  describe("The calcFourOfAKind function", function() {
    it("should check if there are 4 dice of a kind and return the sum of all dice", function() {
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 6 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 6 }),
        (dice5 = { eyes: 1 })
      ];
      expect(calcFourOfAKind(diceArray)).toBe(25);
    });

    it("should return 0 if the array doesn't have 4 dice of a kind", () => {
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 3 })
      ];
      expect(calcThreeOfAKind(diceArray)).toBe(0);
    });
  });

  describe("The calcFullHouse function", function() {
    it("should check if there are 2 dice of a kind plus 3 dice of a kind and return 25", function() {
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 6 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      expect(calcFullHouse(diceArray)).toBe(25);
    });

    it("should return 0 if the array doesn't have 2 dice of a kind plus 3 dice of a kind", () => {
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 5 })
      ];
      expect(calcFullHouse(diceArray)).toBe(0);
    });
  });

  describe("The calcBigStraight function", function() {
    it("should check if there are 5 dice in a row and return 40", function() {
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 4 }),
        (dice3 = { eyes: 5 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 2 })
      ];
      expect(calcBigStraight(diceArray)).toBe(40);
      let diceArray2 = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 4 }),
        (dice3 = { eyes: 5 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 2 })
      ];
      expect(calcBigStraight(diceArray2)).toBe(40);
    });

    it("should check if there are 5 of a kind and return 40", () => {
      let diceArray = [
        (dice1 = { eyes: 3 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 3 })
      ];
      expect(calcBigStraight(diceArray)).toBe(40);
    });

    it("should return 0 if the array doesn't have 5 dice in a row", () => {
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 4 })
      ];
      expect(calcBigStraight(diceArray)).toBe(0);
    });
  });

  describe("The calcSmallStraight function", function() {
    it("should check if there are 4 dice in a row and return 30", function() {
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 4 }),
        (dice3 = { eyes: 5 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 3 })
      ];
      expect(calcSmallStraight(diceArray)).toBe(30);
      let diceArray2 = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 4 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 2 })
      ];
      expect(calcSmallStraight(diceArray2)).toBe(30);
    });

    it("should check if there are 5 of a kind and return 30", () => {
      let diceArray = [
        (dice1 = { eyes: 3 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 3 })
      ];
      expect(calcSmallStraight(diceArray)).toBe(30);
    });

    it("should return 0 if the array doesn't have 4 dice in a row", () => {
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 3 })
      ];
      expect(calcSmallStraight(diceArray)).toBe(0);
    });
  });

  describe("The calcYahtzee function", function() {
    it("should check if there are 5 dice of a kind and return 50", function() {
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 6 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 6 }),
        (dice5 = { eyes: 6 })
      ];
      expect(calcYahtzee(diceArray)).toBe(50);
    });

    it("should return 0 if the array doesn't have 5 dice of a kind", () => {
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 3 })
      ];
      expect(calcYahtzee(diceArray)).toBe(0);
    });
  });

  describe("The calcChance function", function() {
    it("should return the sum of all dice", function() {
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 6 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      expect(calcChance(diceArray)).toBe(15);
    });
  });

  //ADD METHODS
  describe("The addOnes function", function() {
    it("should add all the 1s to the scoreCard", function() {
      aScoreCard.state.allOnes = null;
      let diceArray = [
        (dice1 = { eyes: 2 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      aScoreCard.addOnes(diceArray);
      expect(aScoreCard.state.allOnes).toEqual(3);
    });

    it("should not add anything if there are no 1s", function() {
      aScoreCard.state.allOnes = null;
      let diceArray = [
        (dice1 = { eyes: 2 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 6 })
      ];
      aScoreCard.addOnes(diceArray);
      expect(aScoreCard.state.allOnes).toEqual(0);
    });
  });

  describe("The addTwos function", function() {
    it("should add all the 2s to the scoreCard", function() {
      aScoreCard.state.allTwos = null;
      let diceArray = [
        (dice1 = { eyes: 2 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      aScoreCard.addTwos(diceArray);
      expect(aScoreCard.state.allTwos).toEqual(4);
    });

    it("should not add anything if there are no 2s", function() {
      aScoreCard.state.allTwos = null;
      let diceArray = [
        (dice1 = { eyes: 3 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 6 })
      ];
      aScoreCard.addTwos(diceArray);
      expect(aScoreCard.state.allTwos).toEqual(0);
    });
  });

  describe("The addThrees function", function() {
    it("should add all the 3s to the scoreCard", function() {
      aScoreCard.state.allThrees = null;
      let diceArray = [
        (dice1 = { eyes: 3 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      aScoreCard.addThrees(diceArray);
      expect(aScoreCard.state.allThrees).toEqual(6);
    });

    it("should not add anything if there are no 3s", function() {
      aScoreCard.state.allThrees = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 6 })
      ];
      aScoreCard.addThrees(diceArray);
      expect(aScoreCard.state.allThrees).toEqual(0);
    });
  });

  describe("The addFours function", function() {
    it("should add all the 4s to the scoreCard", function() {
      aScoreCard.state.allFours = null;
      let diceArray = [
        (dice1 = { eyes: 4 }),
        (dice2 = { eyes: 4 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      aScoreCard.addFours(diceArray);
      expect(aScoreCard.state.allFours).toEqual(8);
    });

    it("should not add anything if there are no 4s", function() {
      aScoreCard.state.allFours = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 6 }),
        (dice5 = { eyes: 6 })
      ];
      aScoreCard.addFours(diceArray);
      expect(aScoreCard.state.allFours).toEqual(0);
    });
  });

  describe("The addFives function", function() {
    it("should add all the 5s to the scoreCard", function() {
      aScoreCard.state.allFives = null;
      let diceArray = [
        (dice1 = { eyes: 4 }),
        (dice2 = { eyes: 4 }),
        (dice3 = { eyes: 5 }),
        (dice4 = { eyes: 5 }),
        (dice5 = { eyes: 5 })
      ];
      aScoreCard.addFives(diceArray);
      expect(aScoreCard.state.allFives).toEqual(15);
    });

    it("should not add anything if there are no 5s", function() {
      aScoreCard.state.allFives = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 6 }),
        (dice5 = { eyes: 6 })
      ];
      aScoreCard.addFives(diceArray);
      expect(aScoreCard.state.allFives).toEqual(0);
    });
  });

  describe("The addSix function", function() {
    it("should add all the 6s to the scoreCard", function() {
      aScoreCard.state.allSixes = null;
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 6 }),
        (dice3 = { eyes: 5 }),
        (dice4 = { eyes: 5 }),
        (dice5 = { eyes: 5 })
      ];
      aScoreCard.addSix(diceArray);
      expect(aScoreCard.state.allSixes).toEqual(12);
    });

    it("should not add anything if there are no 6s", function() {
      aScoreCard.state.allSixes = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 4 })
      ];
      aScoreCard.addSix(diceArray);
      expect(aScoreCard.state.allSixes).toEqual(0);
    });
  });

  describe("The addthreeOfaKind function", function() {
    it("should add the sum of all dice if there are 3 dice of a kind", function() {
      aScoreCard.state.threeOfaKind = null;
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 6 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      aScoreCard.addthreeOfaKind(diceArray);
      expect(aScoreCard.state.threeOfaKind).toEqual(20);
    });

    it("should not add anything if there are no 3 dice of a kind", function() {
      aScoreCard.state.threeOfaKind = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 4 })
      ];
      aScoreCard.addthreeOfaKind(diceArray);
      expect(aScoreCard.state.threeOfaKind).toEqual(0);
    });
  });

  describe("The addFourOfaKind function", function() {
    it("should add the sum of all dice if there are 4 dice of a kind", function() {
      aScoreCard.state.fourOfaKind = null;
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 6 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 6 }),
        (dice5 = { eyes: 1 })
      ];
      aScoreCard.addFourOfaKind(diceArray);
      expect(aScoreCard.state.fourOfaKind).toEqual(25);
    });

    it("should not add anything if there are no 4 dice of a kind", function() {
      aScoreCard.state.fourOfaKind = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 4 })
      ];
      aScoreCard.addFourOfaKind(diceArray);
      expect(aScoreCard.state.fourOfaKind).toEqual(0);
    });
  });

  describe("The addFullHouse function", function() {
    it("should add 25 if there are 3 dice of a kind and 2 dice of a kind", function() {
      aScoreCard.state.fullHouse = null;
      let diceArray = [
        (dice1 = { eyes: 6 }),
        (dice2 = { eyes: 6 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      aScoreCard.addFullHouse(diceArray);
      expect(aScoreCard.state.fullHouse).toEqual(25);
    });

    it("should not add anything if there are no 3 dice of a kind and 2 dice of a kind", function() {
      aScoreCard.state.fullHouse = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 4 })
      ];
      aScoreCard.addFullHouse(diceArray);
      expect(aScoreCard.state.fullHouse).toEqual(0);
    });
  });

  describe("The addSmallStraight function", function() {
    it("should add 30 if there are 4 dice in a row", function() {
      aScoreCard.state.smallStraight = null;
      let diceArray = [
        (dice1 = { eyes: 4 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 2 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      aScoreCard.addSmallStraight(diceArray);
      expect(aScoreCard.state.smallStraight).toEqual(30);
    });

    it("should not add anything if there are not 4 dice in a row", function() {
      aScoreCard.state.smallStraight = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 4 })
      ];
      aScoreCard.addSmallStraight(diceArray);
      expect(aScoreCard.state.smallStraight).toEqual(0);
    });
  });

  describe("The addBigStraight function", function() {
    it("should add 40 if there are 5 dice in a row", function() {
      aScoreCard.state.bigStraight = null;
      let diceArray = [
        (dice1 = { eyes: 4 }),
        (dice2 = { eyes: 3 }),
        (dice3 = { eyes: 2 }),
        (dice4 = { eyes: 5 }),
        (dice5 = { eyes: 1 })
      ];
      aScoreCard.addBigStraight(diceArray);
      expect(aScoreCard.state.bigStraight).toEqual(40);
    });

    it("should not add anything if there are not 5 dice in a row", function() {
      aScoreCard.state.bigStraight = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 4 })
      ];
      aScoreCard.addBigStraight(diceArray);
      expect(aScoreCard.state.bigStraight).toEqual(0);
    });
  });

  describe("The addYahtzee function", function() {
    it("should add 50 if there are 5 dice of a kind", function() {
      aScoreCard.state.yahtzee = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      aScoreCard.addYahtzee(diceArray);
      expect(aScoreCard.state.yahtzee).toEqual(50);
    });

    it("should not add anything if there are not 5 dice of a kind", function() {
      aScoreCard.state.yahtzee = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 3 }),
        (dice4 = { eyes: 4 }),
        (dice5 = { eyes: 4 })
      ];
      aScoreCard.addYahtzee(diceArray);
      expect(aScoreCard.state.yahtzee).toEqual(0);
    });
  });

  describe("The addChance function", function() {
    it("should add the sum of all dice", function() {
      aScoreCard.state.chance = null;
      let diceArray = [
        (dice1 = { eyes: 1 }),
        (dice2 = { eyes: 1 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 2 }),
        (dice5 = { eyes: 1 })
      ];

      aScoreCard.addChance(diceArray);
      expect(aScoreCard.state.chance).toEqual(6);
    });
  });

  describe("The getBonus function", function() {
    it("should add 50 if the total is higher than or euqal to 63", function() {
      aScoreCard.state = {
        allOnes: 3,
        allTwos: 6,
        allThrees: 9,
        allFours: 12,
        allFives: 15,
        allSixes: 18
      };

      expect(aScoreCard.getBonus()).toEqual(50);
    });

    it("should add 0 if the total is lower than 63", function() {
      aScoreCard.state = {
        allOnes: 1,
        allTwos: 2,
        allThrees: 3,
        allFours: 4,
        allFives: 5,
        allSixes: 6
      };

      expect(aScoreCard.getBonus()).toEqual(0);
    });
  });
});
