var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

    if( this.partner !== null ) {
      this.$node.toggle();
      return;
    }

    var potentials = this.nearMe(5).filter(function(dancer){
      return (dancer[1].partner === null && dancer[0] < 100);
    });

    if(potentials.length){
      this.partner = potentials[0][1];
      potentials[0][1].partner = this;
      this.partner._timeBetweenSteps = this._timeBetweenSteps;
      var newColor = Math.floor(Math.random()*16777215).toString(16);
      this.partner.$node.css({
        "border-color": "#"+newColor
      });
      this.$node.css({
        "border-color": "#"+newColor
      });
    }
};

var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  return new BlinkyDancer(top, left, timeBetweenSteps);
}
