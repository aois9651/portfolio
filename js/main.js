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


function PageTopAnime(){
  var scroll = $(window).scrollTop();
  if (scroll >= 700){
    $("#page-top").removeClass('DownMove2');
    $("#page-top").addClass('UpMove2');
  }else{
    if($("#page-top").hasClass('UpMove2')){
      $("#page-top").removeClass('UpMove2');
      $("#page-top").addClass('DownMove2');
    }
  }
  var wH = window.innerHeight;
  var footerPos = $("#footer").offset().top;
  if(scroll + wH >= (footerPos + 10)) {
    $("#page-top").css('bottom',pos);
  }else{
    if($("#page-top").hasClass('UpMove2')){
      $("#page-top").css('bottom','10px');
    }
  }
}
$(window).scroll(function () {
	PageTopAnime();
});
$(window).on('load', function () {
	PageTopAnime();
});
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});