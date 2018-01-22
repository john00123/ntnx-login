
$(document).ready(function() {
  setTimeout(function(){
  $('#names').scroll();
  $("#names").animate({
    scrollTop: 240
  }, 2000, 'easeInOutSine');}, 3000)
});
