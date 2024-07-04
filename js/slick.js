// slick

const option = {
  autoplay: true,
  autoplaySpeed: 5000,
  speed:1000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
  }

  const slickGoTo = $('.js-slickGoTo');
  let navList = $('.js-navList');
  
  $(slickGoTo).slick(option);
  
  navList.on('click',function(){
    index = $(this).index();
    slickGoTo.slick("slickGoTo", index, false);
  });