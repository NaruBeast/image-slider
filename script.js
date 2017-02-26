sliderInt = 1;
sliderNext = 2;

$(document).ready(function() {
  $('#1').fadeIn(300);
  startSlider();
});

var startSlider = function() {
  /*$('img').fadeOut(300);*/
  count = $('img').length;

  loop = setInterval(function(){
    if(sliderNext > 4) {
      sliderInt = 1;
      sliderNext = 1;
      
    }
    $('img').fadeOut(300);
    $('#'+sliderNext).fadeIn(300);

    sliderInt = sliderNext;
    sliderNext = sliderNext + 1;
  }, 3000)

}

/*$(document).ready(function() {
  $('.container').click(function(){
      $('.container').toggleClass('lol');
  });
for(var i=0; i<2; i++) {
  $('#1').fadeIn(2000);
  $('#1').fadeOut(2000);
  $('#2').fadeIn(2000);
  $('#2').fadeOut(2000);
  $('#3').fadeIn(2000);
  $('#3').fadeOut(2000);
  $('#4').fadeIn(2000);
  $('#4').fadeOut(2000);
}

});*/
