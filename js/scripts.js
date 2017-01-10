$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });

  $(".iceberg").click(function() {
    $(".iceberg").slideToggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#WhiteOnBlack").click(function() {
    $("body").removeClass("black-on-white");
    $("body").addClass("white-on-black");
  });

  $("button#BlackOnWhite").click(function() {
    $("body").removeClass("white-on-black");
    $("body").addClass("black-on-white");
  });

});
