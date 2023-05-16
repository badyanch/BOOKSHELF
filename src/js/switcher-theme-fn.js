const checkbox = document.querySelector(".switcher-theme__checkbox");

checkbox.addEventListener("click", onSwitcherClick);

export function onSwitcherClick() {

  if (this.checked) {

    const css = "body {background-color: #202024; color: white; fill: white}";
    const element = document.createElement("style");
    element.setAttribute("type", "text/css");
    element.appendChild(document.createTextNode(css));
    element.classList.add("switcher-theme__status");
    document.head.appendChild(element);
    document.querySelectorAll(".category__link").forEach(function(el) {
      el.style.color = "white";
    });
    
    
    
    document.querySelector(".current-category").style.color = "#EAC645";
    // document.querySelector(".category__link").style.color = "white";
    document.querySelector(".books-cards__title").style.color = "white";
    // document.querySelector(".books-cards__title-accent")

  } else {
    const element = document.querySelector(".switcher-theme__status");
    document.querySelector(".current-category").style.color = null;
    
    // document.querySelector(".current-category").classList.remove("dark-theme")

    document.querySelectorAll(".category__link").forEach(function(el) {
      el.style.color = null;
    });

    document.querySelector(".books-cards__title").style.color = null;
    if (element) {
      element.remove()
    }  
  }
}