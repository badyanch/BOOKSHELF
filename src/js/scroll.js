const button = document.querySelector(".scrollBtn");

function checkScrollVisibility() {
  const windowHeight = window.innerHeight; 
    const bodyHeight = window.pageYOffset; 
    
  if (bodyHeight > windowHeight) {
    button.removeAttribute = ("hidden");
  } else {
    button.setAttribute =("hidden", true);
  }
}

checkScrollVisibility();


window.addEventListener('resize', checkScrollVisibility);
window.addEventListener('scroll', checkScrollVisibility);

button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
