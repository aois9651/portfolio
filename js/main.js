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

// header text

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 100;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  // css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

// scrollfy
$.scrollify({
  section:".box",
  scrollbars:"false",
  // interstitialSection: "#top,#bc_title,bc_project",
  easing:"swing",
  scrollSpeed:1000,
})