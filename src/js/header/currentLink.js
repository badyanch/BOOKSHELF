onCurrentLink();

function onCurrentLink() {
  const pathName = window.location.pathname;

  if (pathName.endsWith('/')) {
    const links = document.querySelectorAll(`[href="${pathName}index.html"]`);

    links.forEach(link => {
      if (link.classList.contains('page-nav__link')) {
        link.classList.add('page-nav__link--current');
      }
    });

    return;
  }

  const links = document.querySelectorAll(`[href="${pathName}"]`);

  links.forEach(link => {
    if (link.classList.contains('page-nav__link')) {
      link.classList.add('page-nav__link--current');
    }
  });
}