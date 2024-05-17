$(function () {
      let list = '';
      const url = `https://graph.facebook.com/v11.0/17841402955223465/?fields=id,followers_count,media_count,ig_id,media.limit(50){caption,media_url,thumbnail_url,permalink,media_type,like_count,comments_count,timestamp,id}&access_token=EAAa6OvLIZB8sBOZBZC9cLQZAtpuSQQ1ZA0XKCoNza7NUHhqCZCwYvmIksYyl8uOU8pGiGtMRKJyuCFizkzVE39qC9Xwl0kZBZCHXX6ZApxhpBpX8iPIcISBSGRkdZBgDiiEufs3cjDYzD6ZA9oD3ApSHTQwtty0MScvBT9DdgnYZBmZAZBZCr3ctOjrod7BIVZAW8SP4DZAwc`;
      $.ajax({
        url: url
      }).done((res) => {
        const data = res.media;
        $.each(data, function (index, val) {
          $.each(val, function (i, item) {
            console.log(item);
            if (item.media_url) {
              media = (item.media_type == 'VIDEO' ? item.thumbnail_url : item.media_url);
              list +=
                `<li class="inst-item slideup scroll_fadein" id="${item.id}">
              <a href="${item.permalink}" target="_blank" rel="noopener">
              <h5 class="js_typing">${item.timestamp}</h5>
              <img class="inst-img" src="${media}">
              <h3 class="like">Like! ${item.like_count}</h3>
              <h4 class="caption">${item.caption}</h4>
              </a>
            </li>`;
            }
          });
          $('#insta').html(`<ul>${list}</ul>`);
        }).fail(function (jqXHR, status) {
          $('#insta').html('<p>読み込みに失敗しました。</p>');
        });
      });
});