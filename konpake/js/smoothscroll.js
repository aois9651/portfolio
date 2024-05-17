// 固定ヘッダー（固定しない場合は = 0）
const headerHeight = document.querySelector('header').offsetHeight + 20;

// イージング関数（easeOutExpo）
function scrollToPos(position) {
  const startPos = window.scrollY;
  const distance = Math.min(position - startPos, document.documentElement.scrollHeight - window.innerHeight - startPos);
  const duration = 800; // スクロールにかかる時間（ミリ秒）

  let startTime;

  function easeOutExpo(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
  }

  function animation(currentTime) {
    if (startTime === undefined) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const scrollPos = easeOutExpo(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, scrollPos);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, position);
    }
  }

  requestAnimationFrame(animation);
}

// 遅延読み込み解除
function removeLazyLoad() {
  const targets = document.querySelectorAll('[data-src]');
  for (const target of targets) {
    target.setAttribute('src', target.getAttribute('data-src'));
    target.addEventListener('load', () => {
      target.removeAttribute('data-src');
    });
  }
}

// ページ内のスムーススクロール
for (const link of document.querySelectorAll('a[href*="#"]')) {
  link.addEventListener('click', (e) => {
    const hash = e.currentTarget.hash;
    const target = document.getElementById(hash.slice(1));

    // ページトップへ("#"と"#top"）
    if (!hash || hash === '#top') {
      e.preventDefault();
      scrollToPos(1); // iOSのChromeで固定ヘッダーが動くバグがあるため0ではなく1に

    // アンカーへ
    } else if (target) {
      e.preventDefault();
      removeLazyLoad();
      const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      scrollToPos(position);

      // URLにハッシュを含める
      history.pushState(null, '', hash);
    }
  });
};

// 別ページ遷移後のスムーススクロール
const urlHash = window.location.hash;
if (urlHash) {
  const target = document.getElementById(urlHash.slice(1));
  if (target) {
    // ページトップから開始（ブラウザ差異を考慮して併用）
    history.replaceState(null, '', window.location.pathname);
    window.scrollTo(0, 0);

    removeLazyLoad();
    window.addEventListener("load", () => {
      const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      scrollToPos(position);

      // ハッシュを再設定
      history.replaceState(null, '', window.location.pathname + urlHash);
    });
  }
}