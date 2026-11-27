document.addEventListener('DOMContentLoaded', function () {
  // 手機版選單開關
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  // 從產品頁點「詢問」進來時，自動選好產品
  var item = new URLSearchParams(location.search).get('item');
  var sel = document.getElementById('item');
  if (item && sel) sel.value = item;

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
