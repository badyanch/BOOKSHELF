<<<<<<< Updated upstream
=======
import { removeAllListeners } from "process";

const switcherStatus = document.querySelector(".switcher-theme__status")
>>>>>>> Stashed changes
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

    document.querySelector(".page-header").style.backgroundColor = " #202024"
    document.querySelectorAll(".js-cat-link").forEach(function(el) {
      if (!el.classList.contains("current-category")) {
        el.style.color = "white"
      }
    })

    
    document.querySelectorAll(".js-cat-link").forEach(function(el) {
      
      if (el.classList.contains("current-category")) {
        el.style.color = "#EAC645"
      }
      el.addEventListener("click", changeColor);
    });
    
<<<<<<< Updated upstream
    
    
    document.querySelector(".current-category").style.color = "#EAC645";
    // document.querySelector(".category__link").style.color = "white";
=======
    function changeColor() {
      document.querySelector(".books-cards__title").style.color = "white";
      if (!this.classList.contains("current-category")) {
        this.style.color = "#EAC645";
         
        document.querySelectorAll(".js-cat-link").forEach(function(el) {
          if (el.classList.contains("current-category")) {
            el.style.color = "white"
          }
        });      
      } 
     }

>>>>>>> Stashed changes
    document.querySelector(".books-cards__title").style.color = "white";
    // document.querySelector(".books-cards__title-accent")

  } else {
    const element = document.querySelector(".switcher-theme__status");
    document.querySelector(".current-category").style.color = null;
<<<<<<< Updated upstream
    
    // document.querySelector(".current-category").classList.remove("dark-theme")
=======

    document.querySelector(".page-header").style.backgroundColor = null;
>>>>>>> Stashed changes

    document.querySelectorAll(".category__link").forEach(function(el) {
      el.style.color = null;
    });

<<<<<<< Updated upstream
=======
    // el.removeEventListener("click", changeColor);

>>>>>>> Stashed changes
    document.querySelector(".books-cards__title").style.color = null;
    if (element) {
      element.remove()
    }  
  }
}