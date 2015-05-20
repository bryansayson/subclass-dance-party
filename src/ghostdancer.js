var GhostDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.$node = $('<div class="ghost"><img src="img/ghost.gif"> </img></div>');
  this.$node.css({
    "position" : "absolute"
  });
  this.setPosition(top, left);
  this.$node.on("mouseover", function(){
    $(this).hide();
  });
};

GhostDancer.prototype = Object.create(Dancer.prototype);

GhostDancer.prototype.constructor = GhostDancer;

GhostDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};

var makeGhostDancer = function (top, left, timeBetweenSteps) {
  return new GhostDancer(top, left, timeBetweenSteps);
}
