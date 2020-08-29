// All animations will take exactly 900ms
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900
});

let last_known_scroll_position = 0;
let elem = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (last_known_scroll_position > 100) {
    elem.classList.remove('bg-dark');
  } else if (last_known_scroll_position <= 99) {
    elem.classList.add('bg-dark');
  }
});