onCurrentLink();
function onCurrentLink() {
  const pathName = window.location.pathname;
  const links = document.querySelectorAll('.page-nav__link');
  links.forEach(link => {
    if (link.getAttribute('href') === pathName || link.getAttribute('href') === pathName + 'index.html') {
      link.classList.add('page-nav__link--current');
    } else {
      link.classList.remove('page-nav__link--current');
    }
  });
}