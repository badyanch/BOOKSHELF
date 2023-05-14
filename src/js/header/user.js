const btnEl = document.querySelector('.js-user');

if (btnEl) {
  btnEl.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      return;
    }

    btnEl.classList.toggle('user--is-active-btns-box');
  });
}
