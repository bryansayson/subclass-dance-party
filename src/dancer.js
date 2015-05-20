// Creates and returns a new dancer object that can step
function Dancer (top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this._timeBetweenSteps = timeBetweenSteps;

  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  this.partner = null;

}

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var dancer = this;
  var potentials;
  if ( dancer.partner === null ) {
    potentials = this.nearMe(5).filter(function(dancer){
      return dancer.partner === null;
    });

    if(potentials.length){
      //if within radius of 50px - partner up
      if ( this.distaceTo(potentials[0]) < 50 ) {
      dancer.pairUp( potentials[0] );

      }
      //else move towards them


    } else{

      //move randomly

    }
  }

  setTimeout( function () {
    dancer.step();
  }, this._timeBetweenSteps);
};

Dancer.prototype.distanceTo = function( otherDancer ) {
  // return distance from dancer
  // c = Math.sqrt(a^2 + b^2)
  var a = (this.getPosition().top - otherDancer.getPosition().top);
  a = a * a;
  var b = (this.getPosition().left - otherDancer.getPosition().left);
  b = b * b;
  return Math.sqrt(a + b);
};

Dancer.prototype.nearMe = function( count ){
  var dancers = [];
    for(var i=0; i < window.dancers.length; i++){
      if ( window.dancers[i] === this ) {
        continue;
      } else {
        dancers.push( [this.distanceTo ( window.dancers[i] ) , window.dancers[i] ] );
      }
    }
    dancers.sort( function (a,b) { return a[0] - b[0]; })
    return dancers.slice(0, count);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.getPosition = function( ) {
  return this.$node.position();
};

Dancer.prototype.lineUp = function( top, left ) {
  this.setPosition(top, left);
};

Dancer.prototype.dancersNearMe = function( top, left ) {
  this.setPosition(top, left);
};

Dancer.prototype.pairUp = function( pairedDancer ) {

  this.setPosition(top, left);
  dancer.partner = pairedDancer;
};
