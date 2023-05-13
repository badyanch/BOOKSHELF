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
refEl.formSignUp.addEventListener('click', toSignIn)
refEl.formSignUp.addEventListener('submit', onSubmitSignUp)

//function is using on sign up form 
function toSignIn(evt) {
	if (evt.target === refEl.formChangerOnSignIn) {

		evt.currentTarget.reset()

		refEl.formSignUp.classList.toggle('active')//remove class
		refEl.formSignIn.classList.toggle('active')//add class

		refEl.formSignUp.removeEventListener('click', toSignIn) //remove evt
		refEl.formSignIn.addEventListener('click', toSignUp) //add evt

		refEl.formSignIn.addEventListener('submit', onSubmitSignIn) //add evt submit
		refEl.formSignUp.removeEventListener('submit', onSubmitSignUp)//remover evt submit
		isLogined();
		return
	}
}
function toSignUp(evt) {

	if (evt.target === refEl.formChangerOnSignUp) {
		evt.currentTarget.reset()

		refEl.formSignIn.classList.toggle('active')//remove class
		refEl.formSignUp.classList.toggle('active')//add class

		refEl.formSignIn.removeEventListener('click', toSignUp)//remove evt 
		refEl.formSignUp.addEventListener('click', toSignIn)// add evt

		refEl.formSignUp.addEventListener('submit', onSubmitSignUp)//add evt submit
		refEl.formSignIn.removeEventListener('submit', onSubmitSignIn)//remove evt submit
		return
	}
}

const user = new User()

async function onSubmitSignUp(evt) {
	evt.preventDefault();

	const { elements: { userName, userEmail, userPassword } } = refEl.formSignUp;
	await user.signUp(userName.value, userEmail.value, userPassword.value)

}

async function onSubmitSignIn(evt) {
	evt.preventDefault();

	const { elements: { userEmail, userPassword } } = refEl.formSignIn;

	user.signIn(userEmail.value, userPassword.value)
}

refEl.checkAuth.addEventListener('click', isLogined)
refEl.signOutbtn.addEventListener('click', onSignOut)

async function isLogined() {
	try {
		const result = await user.isAuthenticated()
		console.log(`loginned: ${result}`);

		if (result) {
			refEl.formSubmit.disabled = true;
			Notify.info('You are already logged')
			user.getInfoUserFromDb(auth.currentUser.email)
			refEl.signOutbtn.style.display = "block"
			return
		}
		console.dir(refEl.signOutbtn);
		refEl.signOutbtn.style.display = "none"
		refEl.formSubmit.disabled = false;
	} catch {
		console.log(error);
	}
}

async function onSignOut() {
	user.signOut()
}



export let closeFormBtn = refEl.closeBtns.forEach(function (button) {
	button.addEventListener('click', function () {
		let form = button.closest('.form');
		form.classList.remove('active');
		closeForm()
		removeAllListeners();
	});
});
function removeAllListeners() {
	const cloneFormSignUp = refEl.formSignUp.cloneNode(true);
	refEl.formSignUp.parentNode.replaceChild(cloneFormSignUp, refEl.formSignUp);
	const cloneFormSignIn = refEl.formSignIn.cloneNode(true);
	refEl.formSignIn.parentNode.replaceChild(cloneFormSignIn, refEl.formSignIn);
}
export function closeForm() {
	refEl.modal.classList.add('hidden');
	refEl.backdrop.classList.add('hidden');
}
