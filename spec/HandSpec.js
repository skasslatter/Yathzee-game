let aHand = new Hand();

describe("The Hand", function() {
  it("should have an allDice property", function() {
    expect(aHand.allDice).toEqual(aHand.allDice);
  });

  it("should have an addDice method", function()  {
    expect(typeof aHand.addDice).toBe("function");
  });

  it("should have an removeDice method", function()  {
    expect(typeof aHand.removeDice).toBe("function");
  });

  it("the addDice method should add a dice", function() {
    aHand.addDice(new Dice());
    expect(aHand.allDice.length).toBe(1);
  });

  it("the removeDice method should remove a dice", function() {
    aHand.allDice = [1, 2, 4,6];
    aHand.removeDice(2);
    expect(aHand.allDice.length).toBe(3);
    expect(aHand.allDice).toEqual([1,4,6])

  });
});

//ok for now, but check addDice


// describe("The hand: the addDice method", function() {
//     it("should add a dice", function() {
//       aHand.addDice(new Dice());
//       expect(aHand.allDice.length).toBe(1);
//     });
//   });

//   describe("should have a removeDice method", function() {
//     it("should add should add the dice", function() {
//       aHand.removeDice(new Dice());
//       expect(aHand.dices.length).toBe(0);
//     });
//   });