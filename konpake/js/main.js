// navtoggle

$(function(){

  $(".menu-trigger").click(function(){
    $("#menu07").toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $(".nav").toggleClass('panelactive');
  });


  $(".nav a").click(function(){
    $("#menu07").removeClass('active');
    $("#g-nav").removeClass('panelactive');
    $(".nav").removeClass('panelactive');
  });

});

// inst fadein

$(function(){
  $(window).scroll(function(){
    var windowHeight = $(window).height(),scrollY = $(window).scrollTop();
    $(".scroll_fadein").each(function(){
      var thisPosition = $(this).offset().top;
      if(scrollY > thisPosition - windowHeight){
        $(this).addClass('fadein_animation_start');
      }
    });
  });
});


// bg-scroll

let bg = document.getElementById('bg')
const rate = 15

window.addEventListener('scroll', function(){
  let y = window.scrollY
  bg.style.backgroundPositionY = `-${y / rate}px`
})


