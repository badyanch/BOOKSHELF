


const checkbox = document.getElementById("checkbox")
const checkboxLabel = document.querySelector('.checkbox-label')


checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme")
  checkboxLabel.classList.toggle('checkbox-label--dark-theme');
  // document.body.setAttribute('id',2)
  // console.log(checkboxLabel.classList.contains('dark-theme'));
  // if (checkboxLabel.classList.contains('checkbox-label--dark-theme')) {
    
  // }
})



