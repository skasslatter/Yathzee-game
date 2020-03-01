
describe('Hand ', function() {
    
    let aHand = new Hand()
    it('should be defined', function() {
        
    });

    
    describe('should have a addDice method', function() {
        it("should add should add the dice", function(){
            aHand.addDice(new Dice(5));
            expect(aHand.dices.length).toBe(1);
        })
    });
        
    describe('should have a removeDice method', function() {
        it("should add should add the dice", function(){
            aHand.removeDice(new Dice(5));
            expect(aHand.dices.length).toBe(0);
        })
    });
});
    