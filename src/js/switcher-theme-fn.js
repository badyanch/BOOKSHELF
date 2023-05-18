// window.onload = checkTheme();
// function checkTheme() {
//   const checkbox = document.getElementById("checkbox")
// const checkboxLabel = document.querySelector('.checkbox-label')
//   const localStorageTheme = localStorage.getItem('theme');
//   if (localStorageTheme !== null && localStorageTheme === 'dark-theme') {
//     document.body.className = localStorageTheme;
//     checkboxLabel.classList.toggle('checkbox-label--dark-theme');
//     // checkbox.checked = true;
//   }else if (localStorageTheme !== null && localStorageTheme === 'light-theme') {
//     document.body.className = 'localStorageTheme';
//     checkboxLabel.classList = 'checkbox-label';
//   }
// }
const checkboxLabel = document.querySelector('.checkbox-label')
const checkbox = document.getElementById("checkbox")
checkbox.checked = false;
checkbox.addEventListener("change", () => {
  console.log(checkbox.checked);
  if (!checkbox.checked) {
    document.body.classList.toggle("dark-theme")
    localStorage.setItem('theme', 'light-theme');
    checkboxLabel.classList.toggle('checkbox-label--dark-theme');
  }
})

// const switcherStatus = document.querySelector(".switcher-theme__status")
// const checkbox = document.querySelector(".switcher-theme__checkbox");

// checkbox.addEventListener("click", onSwitcherClick);

// export function onSwitcherClick() {

//   if (this.checked) {

//     const css = "body {background-color: #202024; color: white; fill: white}";
//     const element = document.createElement("style");
//     element.setAttribute("type", "text/css");
//     element.appendChild(document.createTextNode(css));
//     element.classList.add("switcher-theme__status");
//     document.head.appendChild(element);
//     document.querySelectorAll(".category__link").forEach(function(el) {
//       el.style.color = "white";
//     });
//     // document.querySelectorAll('.js-cat-link').forEach(function(el) {
//     //   el.style.color = '#EAC645';
//     // });
    
    
//     document.querySelector(".js-cat-link").style.color = "#EAC645";
//     // document.querySelector(".category__link").style.color = "white";
    
    
//   } else {
//     const element = document.querySelector(".style-class");
    
//     if (element) {
//       element.remove()
//     }  
//   }
// }