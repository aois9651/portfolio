if (window.matchMedia('(max-width: 800px)').matches) {

  //スマホ処理 slideToggle
  $(function(){
    $("#nav-toggle").on("click", function(){
      $("nav ul").slideToggle();
      $(this).toggleClass("open");
    });
  });

} else if (window.matchMedia('(min-width:800px)').matches) {

  //PC処理
  $(function(){
    $("#nav-toggle").removeClass();
  });

};


// sub-nav link

// const myLink = document.getElementById('sub-coffee');
// function handleClick(event){
//   document.getElementById("sort01").click();
// }
//   myLink.addEventListener("click",handleClick);


// slick

$(".slider").slick({
  fade:true,
  autoplay:true,
  autoplaySpeed:3000,
  speed:1000,
  infinite:true,
  slidesToShow:1,
  slidesToScroll:1,
  arrows:true,
  prevArrow:'<div class="slick-prev"></div>',
  nextArrow:'<div class="slick-next"></div>',
  dots:true,
  pauseOnFocus:false,
  pauseOnHover:false,
  pauseOnDotsHover:false,
});

$(".slider").on('touchmove',function(event,slick,currentSlide,nextSlide){
  $(".slider").slick("slickPlay");
});