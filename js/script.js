$(document).ready(function() {
  setTimeout(function(){
  $('#names').scroll();
  $("#names").animate({
    scrollTop: 240
  }, 2500, 'easeInOutSine');}, 1200)
});
