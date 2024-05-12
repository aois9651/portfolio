// // smooth scroll
// if (window.matchMedia('(max-width: 800px)').matches) {


//   // hrefの値を変える
//   function Replace() {
//     let link = document.getElementById('nav-top');
//     let url = '#top';

//     //href属性の値を書き換える
//     link.setAttribute('href', url);
//   // hrefの値を変える
//   };

//   // function Replace() {
//   //   let link = document.getElementById('nav-menu');
//   //   let url = '#menu';

//   //   //href属性の値を書き換える
//   //   link.setAttribute('href', url);
//   // // hrefの値を変える
//   // };
  
//   let link = document.getElementById('nav-menu');
//   let oldHref = link.getAttribute('href');
//   let newHref = oldHref.replace('menu.html','#menu');
//   link.setAttribute('href',newHref);

//   function Replace() {
//     let link = document.getElementById('nav-park');
//     let url = '#park';

//     //href属性の値を書き換える
//     link.setAttribute('href', url);
//   // hrefの値を変える
//   };

//   function Replace() {
//     let link = document.getElementById('nav-store');
//     let url = '#store';

//     //href属性の値を書き換える
//     link.setAttribute('href', url);
//   // hrefの値を変える
//   };

//   function Replace() {
//     let link = document.getElementById('nav-contact');
//     let url = '#contact';

//     //href属性の値を書き換える
//     link.setAttribute('href', url);
//   // hrefの値を変える
//   };

// } else if (window.matchMedia('(min-width:800px)').matches) {


// };

// const mediaQuery = window.matchMedia('(max-width: 768px)');
 
// // ページが読み込まれた時に実行
// handle(mediaQuery);
 
// // ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
// mediaQuery.addListener(handle);
 
// function handle(mm) {
//   if (mm.matches) {
//     // ウィンドウサイズ768px以下のときの処理

    

//   } else {
//     // それ以外の処理
//   }
// }

if (window.matchMedia( "(max-width: 768px)" ).matches) {

  // let link = document.getElementById('');
  var alt = document.getAttribute('alt');
  // let url = '#menu';
  link.setAttribute('href', "#"+alt);

} else {

}

document.getElementById("a").onclick = function() {
  
  // ここに#buttonをクリックしたら発生させる処理を記述する
};

if (window.matchMedia( "(max-width: 768px)" ).matches) {
  document.addEventListener('click',function(event){
    if (event.target.tagName.toLowerCase()==='a'){
      var id = event.target.id;
      event.target.href='#'+id;
    }
  })

}