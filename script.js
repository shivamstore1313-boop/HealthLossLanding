// FAQ accordion
document.querySelectorAll('.faq-q').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = btn.parentElement;
    var answer = item.querySelector('.faq-a');
    var isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(function (i) {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });

    // Open clicked one (if it was closed)
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// Reel: click to load and play the YouTube Short
var reel = document.getElementById('reel');
if (reel) {
  reel.addEventListener('click', function () {
    if (reel.dataset.loaded) return;
    var id = reel.dataset.video;
    var iframe = document.createElement('iframe');
    iframe.src =
      'https://www.youtube.com/embed/' + id +
      '?autoplay=1&playsinline=1&rel=0&modestbranding=1';
    iframe.title = 'Weight loss in 2 weeks';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    reel.appendChild(iframe);
    reel.dataset.loaded = 'true';

    // Hide the thumbnail overlay bits
    ['.reel-thumb', '.play-btn', '.reel-badge', '.reel-share'].forEach(function (sel) {
      var el = reel.querySelector(sel);
      if (el) el.style.display = 'none';
    });
  });
}
