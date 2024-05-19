// var arr = []
// function TypingInit(){
//   $('.js_typing').each(function(i){
//     arr[i] = new ShuffleText(this);
//   });
// }

// function TypingAnime(){
//   $(".js_typing").each(function(i){
//     var elemPos = $(this).offset().top - 50;
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if(scroll >= elemPos - windowHeight){
//       if(!$(this).hasClass("endAnime")){
//         arr[i].start();
//         arr[i].duration = 5000;
//         $(this).addClass("endAnime");
//       }
//     }else{
//       $(this).removeClass("endAnime");
//     }
//   });
// }

// $(window).scroll(function(){
//   TypingAnime();
// });

const text = new ShuffleText(document.querySelector('.js_typing'));

const targetElement = document.querySelector('.js_typing');

const callback = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			text.start();
		}
	});
};

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0
};

const observer = new IntersectionObserver(callback, options);
observer.observe(targetElement);