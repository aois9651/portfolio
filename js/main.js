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


