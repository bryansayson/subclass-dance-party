$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = dancerMakerFunction(
      200 + $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  $(".lineUp").on("click", function(){
    var totalH = 50;
    var maxWidth = 0;
    var columnPosition = 0;
    var rowPosition = 0;
    var lastElementDestination = 0;
    for (var i =0; i < window.dancers.length; i++) {
      totalH += window.dancers[i].$node.outerHeight();
      if ( window.dancers[i].$node.outerWidth() > maxWidth ) {
        maxWidth = window.dancers[i].$node.outerWidth();
      }

      if(i === 0) {
        window.dancers[i].lineUp(50,columnPosition);
      } else {
        if ( totalH > $("body").height() ) {
          columnPosition += maxWidth;
          totalH = 50;
          maxWidth = 0;
          window.dancers[i].lineUp(50,columnPosition);
        } else {
          window.dancers[i].lineUp(lastElementDestination, columnPosition);
        }
      }

      lastElementDestination = window.dancers[i].getPosition().top + window.dancers[i].$node.outerHeight()
    }
  });

  // $(".ghost").on("mouseenter", function () {
  //   $(this).hide();
  // });

$(".ghost").hover( function () {
    $(this).hide();
  });


});

