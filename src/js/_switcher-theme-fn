const checkbox = document.querySelector(".switcher-theme__checkbox");

checkbox.addEventListener("click", onSwitcherClick);

export function onSwitcherClick() {

  if (this.checked) {

    const css = "body {background-color: #202024; color: white;}";
    const element = document.createElement("style");
    element.setAttribute("type", "text/css");
    element.appendChild(document.createTextNode(css));
    element.classList.add("style-class");
    document.head.appendChild(element);
    
  } else {
    const element = document.querySelector(".style-class");
    
    if (element) {
      element.remove()
    }  
  }
}