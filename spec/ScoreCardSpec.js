describe('ScoreCard', () => {
  let scoreCard = new ScoreCard();
  it('should have have the all the score properties', () => {
    expect()
  });

  
  describe('have addThree implemented', function() {
    it("should return null if the argument doesn't have threes only", ()=> {
      expect(scoreCard.addThrees([1,3,3])).toBe(false);
    })
  });
    


});