let aHand = new Hand();

describe("The Hand", function() {

  it("should have an addDice method", function()  {
    expect(typeof aHand.addDice).toBe("function");
  });

  it("should have an removeDice method", function()  {
    expect(typeof aHand.removeDice).toBe("function");
  });

  it("the addDice method should add a dice", function() {
    let dice = new Dice();
    aHand.allDice = [];
    aHand.addDice(dice);
    expect(aHand.allDice.length).toBe(1);
    expect(aHand.allDice[0]).toBe(dice);
  });

  it("the removeDice method should remove a dice", function() {
    let dice1 = new Dice();
    let dice2= new Dice();
    aHand.allDice = [dice1, dice2];
    aHand.removeDice(dice1);
    expect(aHand.allDice.length).toBe(1);
    expect(aHand.allDice).toEqual([dice2])
  });
});

//ok for now