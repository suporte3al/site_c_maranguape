const header = document.querySelector('.header');


document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#2D4689';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});