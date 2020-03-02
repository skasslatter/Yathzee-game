let aDice = new Dice();

describe("The Dice", function() {

    it("should have an Eyes property", function() {
        expect(aDice.eyes).toEqual(aDice.eyes);
      });

  it("should have a rollDice method", function()  {
    expect(typeof aDice.rollDice).toBe("function");
  });
});

describe("Dice: The rollDice function", function(){

    it("should return a random number (of eyes)", function(){
        expect(typeof aDice.rollDice()).toBe("number")
        
    })

    it("should return a number between 1 and 6", function(){
        expect(aDice.rollDice()).toBeGreaterThan(0);
        expect(aDice.rollDice()).toBeLessThan(7);
    })
})

//ok for now