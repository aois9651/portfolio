$(function () {
  let tag = '';
  const url = `https://graph.facebook.com/v11.0/17841402955223465/?fields=id,followers_count,media_count,ig_id,media.limit(50){caption,media_url,thumbnail_url,permalink,media_type,like_count,comments_count,timestamp,id}&access_token=EAAa6OvLIZB8sBOZBZC9cLQZAtpuSQQ1ZA0XKCoNza7NUHhqCZCwYvmIksYyl8uOU8pGiGtMRKJyuCFizkzVE39qC9Xwl0kZBZCHXX6ZApxhpBpX8iPIcISBSGRkdZBgDiiEufs3cjDYzD6ZA9oD3ApSHTQwtty0MScvBT9DdgnYZBmZAZBZCr3ctOjrod7BIVZAW8SP4DZAwc`;

  $.ajax({
    url: url
  }).done((res) => {
    const data = res.media;
    $.each(data, function (index, val) {
      $.each(val, function (i, item) {
        console.log(item);


        if (item.caption) {
          var caption = item.caption;

          var regexp = /#+([a-zA-Z0-9亜-熙ぁ-んァ-ヶー-龥朗-鶴.\-_]+)/g;

          var result = caption.match(regexp);
          // console.log(result);
          // var all = Object.assign(item[0,1,2,3]);
          // var all = Object.values(result);

          if (result) {
            var non1 = "#こんなにかわいいパッケージ"
            var idx = result.indexOf(non1);
            if (idx >= 0) {
              result.splice(idx, 1);
            }
            var non2 = "#デザイン"
            var idx = result.indexOf(non2);
            if (idx >= 0) {
              result.splice(idx, 1);
            }
            var non3 = "#design"
            var idx = result.indexOf(non3);
            if (idx >= 0) {
              result.splice(idx, 1);
            }
            var non4 = "#パッケージデザイン"
            var idx = result.indexOf(non4);
            if (idx >= 0) {
              result.splice(idx, 1);
            }
            var non5 = "#packagedesign"
            var idx = result.indexOf(non5);
            if (idx >= 0) {
              result.splice(idx, 1);
            }
            var non6 = "#パッケージ"
            var idx = result.indexOf(non6);
            if (idx >= 0) {
              result.splice(idx, 1);
            }
            var non7 = "#package"
            var idx = result.indexOf(non7);
            if (idx >= 0) {
              result.splice(idx, 1);
            }
            var non8 = "#packaging"
            var idx = result.indexOf(non8);
            if (idx >= 0) {
              result.splice(idx, 1);
            }
            var non9 = "#packagingdesign"
            var idx = result.indexOf(non9);
            if (idx >= 0) {
              result.splice(idx, 1);
            }
          }


          var instid = item.id;
          console.log(instid);

          $.each(result, function () {
            $("#g-nav-list ul").append("<li> <h3> <a href='#" + instid + "'>" + this + "</a> </h3> </li>");
          });
        }
      });
    });
  });
});