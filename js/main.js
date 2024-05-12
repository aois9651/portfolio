$(function(){
  $('.menu-trigger').on('click', function(){
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    return false;
  });

  $("#g-nav a").click(function(){
    // $(".menu-trigger").removeClass('active');
    $("#g-nav").removeClass('panelactive');
  });
});

var beforePos = 0;
function ScrollAnime(){
  var elemTop = $('#area-1').offset().top;
  var scroll = $(window).scrollTop();
  if(scroll == beforePos){
  }else if(elemTop > scroll || 0 > scroll - beforePos){
    $('.small-header').removeClass('UpMove');
    $('.small-header').addClass('DownMove');
  }else{
    $('.small-header').removeClass('DownMove');
    $('.small-header').addClass('UpMove')
  }
  beforePos = scroll;
}
$(window).scroll(function(){
  ScrollAnime();
});
