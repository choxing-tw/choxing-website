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

  // 配套設備照片：左右滑動
  document.querySelectorAll('[data-carousel]').forEach(function (c) {
    var track = c.querySelector('.track');
    var dots = c.querySelectorAll('.dots span');
    function idx() { return Math.round(track.scrollLeft / track.clientWidth); }
    function go(i) { track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' }); }
    function mark() { var i = idx(); dots.forEach(function (d, k) { d.classList.toggle('on', k === i); }); }
    c.querySelector('.prev').addEventListener('click', function () { var i = idx(); go(i > 0 ? i - 1 : dots.length - 1); });
    c.querySelector('.next').addEventListener('click', function () { var i = idx(); go(i < dots.length - 1 ? i + 1 : 0); });
    track.addEventListener('scroll', function () { window.requestAnimationFrame(mark); });
    mark();
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
