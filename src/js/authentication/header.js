import { refEl } from "./form";

const refElHead = {
	btnAuth: document.querySelector('.user')
}
console.log(refElHead.btnAuth);

refElHead.btnAuth.addEventListener('click', onAuthentication)
function onAuthentication(evt) {
	evt.preventDefault()
	refEl.backdrop.classList.toggle('visually-hidden')
	refEl.formSignUp.classList.add('active')

}