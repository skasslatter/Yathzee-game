describe("Board", function() {
  let aBoard = new Board();

  it("should have an rollDice method", function()  {
    expect(typeof aBoard.rollAllDice).toBe("function");
  });

  it("should have an addDice method", function()  {
    expect(typeof aBoard.addDice).toBe("function");
  });

  it("should have an removeDice method", function()  {
    expect(typeof aBoard.removeDice).toBe("function");
  });

  it("the addDice method should add a dice", function() {
    aBoard.addDice(new Dice());
    expect(aBoard.allDice.length).toBe(1);
  });

  it("the removeDice method should remove a dice", function() {
    aBoard.allDice = [1, 2, 4,6];
    aBoard.removeDice(2);
    expect(aBoard.allDice.length).toBe(3);
    expect(aBoard.allDice).toEqual([1,4,6])

  });
});


