describe("hulkDancer", function() {

  var hulkDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hulkDancer = new HulkDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(hulkDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("its style changed", function() {
    sinon.spy(hulkDancer.$node, "css");
    hulkDancer.step();
    expect(hulkDancer.$node.css.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(hulkDancer, "step");
      expect(hulkDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(hulkDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hulkDancer.step.callCount).to.be.equal(2);
    });
  });
});
