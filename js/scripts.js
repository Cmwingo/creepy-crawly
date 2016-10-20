$(document).ready(function(){
  //UI Logic

  var response = prompt("What animal would you like to learn more about? (Enter snakes, insects, or turtles:)");
  //Business Logic
  if (response === "snakes"){
    $("#snakes").toggle();
    $('h1').text("Snakes");
  } else if (response === "insects"){
    $("#insects").toggle();
    $('h1').text("Insects");
  } else {
    $("#turtles").toggle();
    $('h1').text("Turtles");
  }
});
