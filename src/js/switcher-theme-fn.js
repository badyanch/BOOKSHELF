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
  } else {
    document.body.classList.toggle("dark-theme")
    // document.body.classList.toggle("light-theme")
    checkboxLabel.classList.toggle('checkbox-label--dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
})