
    
window.addEventListener('scroll', function () {
  const button = document.querySelector('.scrollBtn');
  if (window.pageYOffset > 0) {
    button.style.display = 'flex';
  } else {
    button.style.display = 'none';
  }
});

document.querySelector('.scrollBtn').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

