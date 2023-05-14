import { User } from './user';
import { Notify } from 'notiflix';
import { colRef, auth, db } from './firebase'


export const refEl = {
	formSignIn: document.querySelector('#sign-in'),
	formSignUp: document.querySelector('#sign-up'),
	formChangerOnSignUp: document.querySelector('.js__sign-up'),
	formChangerOnSignIn: document.querySelector('.js__sign-in'),
	formSubmit: document.querySelector('.form__submit'),
	checkAuth: document.querySelector('.check__auth'),
	signOutbtn: document.querySelector('.sign__out'),
	closeBtns: document.querySelectorAll('.form__close'),
	modal: document.querySelector('.modal'),
	backdrop: document.querySelector('.backdrop-form')
}
export function openModal() {
	refEl.formSignUp.addEventListener('click', toSignIn)
	refEl.formSignUp.addEventListener('submit', onSubmitSignUp)
	refEl.backdrop.classList.toggle('hidden');
	refEl.formSignUp.classList.toggle('active');
}
//function is using on login form 
function toggleForms(evt) {
	const currentForm = evt.currentTarget;
	const otherForm = currentForm === refEl.formSignUp ? refEl.formSignIn : refEl.formSignUp;

	currentForm.reset();
	currentForm.classList.toggle('active');
	otherForm.classList.toggle('active');

	currentForm.removeEventListener('click', toggleForms);
	otherForm.addEventListener('click', toggleForms);

	currentForm.addEventListener('submit', onSubmitForm);
	otherForm.removeEventListener('submit', onSubmitForm);

	isLogined();
}

refEl.formChangerOnSignUp.addEventListener('click', toggleForms);
refEl.formChangerOnSignIn.addEventListener('click', toggleForms);

const user = new User()

async function onSubmitForm(evt) {
	evt.preventDefault();

	const form = evt.currentTarget;
	const { elements } = form;
	const { userName, userEmail, userPassword } = elements;
	const email = userEmail.value.toLowerCase();

	if (form === refEl.formSignUp) {

		await user.signUp(userName.value, email, userPassword.value);
	} else if (form === refEl.formSignIn) {

		await user.signIn(email, userPassword.value);
	}
}






refEl.closeBtns.forEach(function (button) {
	button.addEventListener('click', function () {
		let form = button.closest('.form');
		form.classList.remove('active');
		form.removeEventListener()
		closeForm()
	});
});


