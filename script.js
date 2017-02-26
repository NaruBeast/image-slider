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
    if(sliderNext > count){
      sliderNext = 1;
      sliderInt = 1;
    }
    $('img').fadeOut(300);
    $('#'+sliderNext).fadeIn(300);

    sliderInt = sliderNext;
    sliderNext = sliderNext + 1;
  }, 3000)

}

function prev() {
  newSlide = sliderInt - 1;
  showSlide(newSlide);
}

function next() {
  newSlide = sliderInt + 1;
  showSlide(newSlide);
}

function stopLoop() {
  window.clearInterval(loop);
}

function showSlide(id) {
  stopLoop();
  if(id > count) {
    id = 1;
  }
  else if(id<1) {
    id = count;
  }
  $('img').fadeOut(300);
  $('#'+id).fadeIn(300);

  sliderInt = id;
  sliderNext = id+1;
  startSlider();
}

$('img').hover(function(){
  stopLoop();
},
  function(){
    startSlider();
  }
);
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
