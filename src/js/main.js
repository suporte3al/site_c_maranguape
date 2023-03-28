const header = document.querySelector('.header');


document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#2D4689';
    header.style.borderBottom = 'solid 1px #F44336';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.borderBottom = 'none';
  }
});