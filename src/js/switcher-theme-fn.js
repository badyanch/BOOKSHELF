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
