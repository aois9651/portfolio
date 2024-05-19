setTimeout(function(){
  $(document).ready(function(e){
    textEffect();
  });
  setTimeout(function(){
    for(var i = 0 ; i < 13 ; i++){
      var target = ".text" + i;
      $(target).css("display", "block");
    }
  }, 0);
},1000);

function textEffect(){
  var id = setInterval(loop, 150);
  var counter = 0;
  function loop(){
    var target = ".text" + counter;
    $(target).css({"opacity":"1", "transform":"translate(0px, 0px)"});
    counter++;
    if(counter > 12){
      clearInterval(id);
    }
  }
}

window.onload = function(){
  setTimeout(function(){
    var contents = document.getElementById("container");
    document.getElementById("showloading").classList.add("-visible");
  },4000);
};

setTimeout(function(){
  $("#showloading").toggleClass("displaynone");
},4300);

setTimeout(function(){
  $(".clear").toggleClass("headeractive");
  $(".navtoggle").toggleClass("headeractive");
},4500);

setTimeout(function(){
  var contents = document.getElementById("contents");
  contents.style.display = "block";
},5000);

function PageTopAnime(){
  var scroll = $(window).scrollTop();
  if (scroll >= 1000){
    $(".pagetop").addClass('move');
  }else {
    $(".pagetop").removeClass('move');
  }
}

$(window).scroll(function(){
  PageTopAnime();
});