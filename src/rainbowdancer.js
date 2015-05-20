var RainbowDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.css({
    "border": "25px solid white",
    "border-radius": "20px",
    "height": "2.5px",
    "width": "2.5px"
  });
};

RainbowDancer.prototype = Object.create(Dancer.prototype);

RainbowDancer.prototype.constructor = RainbowDancer;

RainbowDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var newSize = Math.random()*15;

    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    this.$node.css({
      "border": "25px solid #" + randomColor,
      "border-radius": newSize+"px"
    });
};

var makeRainbowDancer = function (top, left, timeBetweenSteps) {
  return new RainbowDancer(top, left, timeBetweenSteps);
}
