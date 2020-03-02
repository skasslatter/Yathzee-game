// describe('ScoreCard', () => {
//   let scoreCard = new ScoreCard();
//   it('should have have the all the score properties', () => {
//     expect()
//   });

//   describe('have addOnes implemented', function() {
//     it("should return 0 if the array doesn't have 1", ()=> {
//       expect(scoreCard.addOnes([3,3,3])).toBe(0);
//     })
//   });

// });
let aScoreCard = new ScoreCard();

describe("The scorecard", function() {
  it("should have a addOnes function", function() {
    expect(typeof aScoreCard.addOnes).toBe("function");
  });
  it("should have a addTwos function", function() {
    expect(typeof aScoreCard.addTwos).toBe("function");
  });
  it("should have a addThrees function", function() {
    expect(typeof aScoreCard.addThrees).toBe("function");
  });
  it("should have a addFours function", function() {
    expect(typeof aScoreCard.addFours).toBe("function");
  });
  it("should have a addFives function", function() {
    expect(typeof aScoreCard.addFives).toBe("function");
  });
  it("should have a addSix function", function() {
    expect(typeof aScoreCard.addSix).toBe("function");
  });
});


describe("The calcOnes function", function() {
  it("should sum all the 1s", function() {
    expect(calcOnes([1, 1, 1, 3, 4, 5])).toBe(3);
  });
  it("should return 0 if the array doesn't have 1", () => {
    expect(calcOnes([3, 3, 3])).toBe(0);
  });
});

describe("The calcTwo function", function() {
  it("should sum all the 2s", function() {
    expect(calcTwo([1, 2, 1, 2, 4, 5])).toBe(4);
  });
  it("should return 0 if the array doesn't have 2s", () => {
    expect(calcOnes([3, 3, 3])).toBe(0);
  });
});

describe("The calcThree function", function() {
  it("should sum all the 3s", function() {
    expect(calcThree([1, 2, 3, 3, 5])).toBe(6);
  });
  it("should return 0 if the array doesn't have 6s", () => {
    expect(calcThree([1, 1, 1])).toBe(0);
  });
});

describe("The calcFour function", function() {
  it("should sum all the 4s", function() {
    expect(calcFour([4, 4, 3, 5])).toBe(8);
  });
  it("should return 0 if the array doesn't have 4s", () => {
    expect(calcFour([1, 1, 1])).toBe(0);
  });
});

describe("The calcFive function", function() {
  it("should sum all the 5s", function() {
    expect(calcFive([4, 4, 3, 5])).toBe(5);
  });
  it("should return 0 if the array doesn't have 5s", () => {
    expect(calcFive([1, 1, 1])).toBe(0);
  });
});

describe("The calcSix function", function() {
  it("should sum all the 5s", function() {
    expect(calcSix([4, 4, 6, 6])).toBe(12);
  });
  it("should return 0 if the array doesn't have 5s", () => {
    expect(calcSix([1, 1, 1])).toBe(0);
  });
});