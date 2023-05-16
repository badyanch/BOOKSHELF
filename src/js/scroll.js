const button = document.querySelector('.scrollBtn');
     
window.addEventListener('scroll', function () {
  
  if (window.pageYOffset > 0) {
    button.classList.add("visible");
    } else {
    button.classList.remove("visible");
  }
});

button.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

