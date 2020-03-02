let aDice = new Dice();

describe("The Dice", function() {
  it("should have a rollDice method", function() {
    expect(typeof aDice.rollDice).toBe("function");
  });

  it("the rollDice method should set a random number (of eyes)", function() {
    aDice.eyes = null;
    aDice.rollDice();
    expect(typeof aDice.eyes).toBe("number");
  });

  it("the rollDice method should return a number between 1 and 6", function() {
    expect(aDice.rollDice()).toBeGreaterThan(0);
    expect(aDice.rollDice()).toBeLessThan(7);
  });
});

//ok for now
