const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

openMenuBtn.addEventListener('click', onOpenMenu);
closeMenuBtn.addEventListener('click', onCloseMenu);

function onOpenMenu() {
  openMenuBtn.setAttribute('aria-expanded', true);
  openMenuBtn.classList.add('menu-btn--hide');
  closeMenuBtn.classList.remove('menu-btn--hide');
  mobileMenu.classList.add('menu-container--is-open');
  document.body.classList.add('body-lock');
}

function onCloseMenu() {
  openMenuBtn.setAttribute('aria-expanded', false);
  openMenuBtn.classList.remove('menu-btn--hide');
  closeMenuBtn.classList.add('menu-btn--hide');
  mobileMenu.classList.remove('menu-container--is-open');
  document.body.classList.remove('body-lock');
}

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) {
    return;
  }

  if (!mobileMenu.classList.contains('menu-container--is-open')) {
    return;
  }

  mobileMenu.classList.remove('menu-container--is-open');
  openMenuBtn.classList.remove('menu-btn--hide');
  closeMenuBtn.classList.add('menu-btn--hide');
  openMenuBtn.setAttribute('aria-expanded', false);
  document.body.classList.remove('body-lock');
});

window.addEventListener('resize', () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
