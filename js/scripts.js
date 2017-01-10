$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });

  $(".iceberg").click(function() {
    $(".iceberg").slideToggle();
  });

});
