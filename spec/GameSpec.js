let aGame = new Game();

describe("The Game", function() {
  it("should have an addToBoard method", function() {
    expect(typeof aGame.addToBoard).toBe("function");
  });

  it("should have an removeFromBoard method", function() {
    expect(typeof aGame.removeFromBoard).toBe("function");
  });

  it("should have an rollDice method", function() {
    expect(typeof aGame.rollDice).toBe("function");
  });
});
