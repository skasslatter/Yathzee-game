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
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 5 }),
        (dice5 = { eyes: 5 })
      ];
      expect(calcChance(diceArray)).toBe(28);
    });
  });

describe("The addOnes function", function() {
    it("should add all the 1s to the scoreCard", function() {
      let diceArray = [
        (dice1 = { eyes: 2 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 1 }),
        (dice4 = { eyes: 1 }),
        (dice5 = { eyes: 1 })
      ];
      expect(aScoreCard.addOnes(diceArray)).toEqual(aScoreCard.state.allOnes);
    });

    it("should not add anything if the array doesn't have 1s", () => {
      let diceArray = [
        (dice1 = { eyes: 2 }),
        (dice2 = { eyes: 2 }),
        (dice3 = { eyes: 6 }),
        (dice4 = { eyes: 3 }),
        (dice5 = { eyes: 4 })
      ];
      expect(aScoreCard.addOnes(diceArray)).toEqual(aScoreCard.state.allOnes);
    });
  });

});
