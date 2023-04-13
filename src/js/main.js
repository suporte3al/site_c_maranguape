const header = document.querySelector('.header');


document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.borderBottom = 'solid 1px #000';
    header.style.background = 'linear-gradient(180deg, #2D4689 0%, rgba(45, 70, 137, 0.8) 100%)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.borderBottom = 'none';
    header.style.background = 'none';
  }
});