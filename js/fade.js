// fadeUpTrigger

function fadeAnime() {
  $('.fadeUpTrigger').each(function () {
    var elemPos = $(this).offset().top + 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
}

$(window).scroll(function (){
  fadeAnime();
});

$(window).on('load', function(){
  delayScrollAnime();
});

// function fadeAnime2() {
//   $('.rotateTrigger').each(function () {
//     var elemPos = $(this).offset().top + 50;
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight) {
//       $(this).addClass('rotateY');
//     } else {
//       $(this).removeClass('rotateY');
//     }
//   });
// }

// $(window).scroll(function (){
//   fadeAnime2();
// });

// $(window).on('load', function(){
//   delayScrollAnime2();
// });