$(function () {
  $('.menu-trigger').on('click', function () {
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    return false;
  });

  $("#g-nav a").click(function () {
    // $(".menu-trigger").removeClass('active');
    $("#g-nav").removeClass('panelactive');
  });

  $("#g-nav img").click(function () {
    $("#g-nav").removeClass('panelactive');
  });
});


// contents click 

$(function(){
  $('#contents-button').on('click', function(){
    $('.g-nav-contents-box').removeClass('none2');
    return false;
  });
});


// title top

function ScrollAnime2() {
  var scroll = $(window).scrollTop();
  if (scroll >= 220) {
    $('.small-name').removeClass('none');
    $('.small-name').addClass('fadeDown');
    $('.ct-title').addClass('fadeOut');
  } else {
    $('.small-name').addClass('none');
    $('.ct-title').removeClass('fadeOut')
    $('.ct-title').addClass('fadeIn')
  }
  // beforepos = titlescroll;
}
$(window).scroll(function () {
  ScrollAnime2();
});


// var beforePos = 0;

// function ScrollAnime() {
//   var elemTop = $('#area-1').offset().top;
//   var scroll = $(window).scrollTop();
//   if (scroll == beforePos) {} else if (elemTop > scroll || 0 > scroll - beforePos) {
//     $('.small-header').removeClass('UpMove');
//     $('.small-header').addClass('DownMove');
//   } else {
//     $('.small-header').removeClass('DownMove');
//     $('.small-header').addClass('UpMove')
//   }
//   beforePos = scroll;
// }
// $(window).scroll(function () {
//   ScrollAnime();
// });


// function PageTopAnime() {
//   var scroll = $(window).scrollTop();
//   if (scroll >= 700) {
//     $("#page-top").removeClass('DownMove2');
//     $("#page-top").addClass('UpMove2');
//   } else {
//     if ($("#page-top").hasClass('UpMove2')) {
//       $("#page-top").removeClass('UpMove2');
//       $("#page-top").addClass('DownMove2');
//     }
//   }
//   var wH = window.innerHeight;
//   var footerPos = $("#footer").offset().top;
//   if (scroll + wH >= (footerPos + 10)) {
//     $("#page-top").css('bottom', pos);
//   } else {
//     if ($("#page-top").hasClass('UpMove2')) {
//       $("#page-top").css('bottom', '10px');
//     }
//   }
// }
// $(window).scroll(function () {
//   PageTopAnime();
// });
// $(window).on('load', function () {
//   PageTopAnime();
// });
// $('#page-top').click(function () {
//   $('body,html').animate({
//     scrollTop: 0
//   }, 500);
//   return false;
// });

// header text

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 100;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
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
  section: ".box",
  scrollbars: "false",
  // interstitialSection: "#top,#bc_title,bc_project",
  easing: "swing",
  scrollSpeed: 1000,
})

// topbtn
$('#topbtn').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 300);
});

$('#topbtn2').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 200);
});

$('#topbtn3').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 200);
});

$('#topbtn4').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 200);
});

$('#topbtn5').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 200);
});

$('#topbtn6').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 200);
});

// fadeUpTrigger

let fadeInTarget = document.querySelectorAll('.fadeUpTrigger');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('fadeUp');
    } else {
      fadeInTarget[i].classList.remove('fadeUp');
    }
  }
});


// Emblem

var Emblem = {
  init: function(el, str) {
    var element = document.querySelector(el);
    var text = str ? str : element.innerHTML;
    element.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var letter = text[i];
      var span = document.createElement('span');
      var node = document.createTextNode(letter);
      var r = (360/text.length)*(i);
      var x = (Math.PI/text.length).toFixed(0) * (i);
      var y = (Math.PI/text.length).toFixed(0) * (i);
      span.appendChild(node);
      span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      element.appendChild(span);
    }
  }
};

Emblem.init('.emblem1');
Emblem.init('.emblem2');
Emblem.init('.emblem3');
Emblem.init('.emblem4');
Emblem.init('.emblem5');


// load

$('.btn01').on('click', function() {
  event.preventDefault();
  var link = $(this).attr('href');
  $('.before').addClass('is-active1');
  setTimeout(function(){
    location.href = link;
  }, 500);
});

$('.btn05').on('click', function() {
  event.preventDefault();
  var link = $(this).attr('href');
  $('.before').addClass('is-active5');
  setTimeout(function(){
    location.href = link;
  }, 500);
});

