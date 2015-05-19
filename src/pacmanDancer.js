var PacmanDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img src="img/fighter.gif" class="pacman"> </img>');

  this.setPosition(top, left);
};

PacmanDancer.prototype = Object.create(Dancer.prototype);

PacmanDancer.prototype.constructor = PacmanDancer;

PacmanDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
};

var makePacmanDancer = function (top, left, timeBetweenSteps) {
  return new PacmanDancer(top, left, timeBetweenSteps);
}
