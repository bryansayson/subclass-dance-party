var HulkDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.css({
    "border": "15px solid green",
    "border-radius": "10px"
  });
};

HulkDancer.prototype = Object.create(Dancer.prototype);

HulkDancer.prototype.constructor = HulkDancer;

HulkDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var newSize = Math.random()*15;

    this.$node.css({
      "border-radius": newSize+"px"
    });
};

var makeHulkDancer = function (top, left, timeBetweenSteps) {
  return new HulkDancer(top, left, timeBetweenSteps);
}
