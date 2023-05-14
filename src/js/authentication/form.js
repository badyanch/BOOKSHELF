import { User } from './authorization';
import { Notify } from 'notiflix';
import { auth } from './firebase'


export const refEl = {
	formSignIn: document.querySelector('#sign-in'),
	formSignUp: document.querySelector('#sign-up'),
	formChangerOnSignUp: document.querySelector('.js__sign-up'),
	formChangerOnSignIn: document.querySelector('.js__sign-in'),
	formSubmit: document.querySelector('.form__submit'),

	checkAuth: document.querySelector('.check__auth'),
	openFormBtn: document.querySelector('.sign-up-btn__page-header'),

	backdrop: document.querySelector('.backdrop'),
	closeBtns: document.querySelectorAll('.form__close'),
	signOutbtn: document.querySelector('.sign__out'),
}
const user = new User()
// user.signOut()
let IS_FORM_OPEN = false;
let IS_USER_LOG = false;
checkUserLogIn()

async function checkUserLogIn() {
	try {
		const result = await user.isAuthenticated();
		if (result) {
			console.log('Пользователь аутентифицирован');
			const userProfile = await user.getInfoUserFromDb(auth.currentUser.email);
			refEl.openFormBtn.textContent = userProfile.userName
			IS_USER_LOG = true
			return
		} else {
			console.log('Пользователь не аутентифицирован');
			refEl.openFormBtn.addEventListener('click', openForm)
			IS_USER_LOG = false
			return
		}
	} catch (error) {
		console.error('Ошибка при проверке аутентификации:', error);
	}
}


function openForm() {
	showForm()
	closeForm()
}

//WHEN CLICK ON SIGNUP
function showForm() {
	if (!IS_FORM_OPEN) {
		refEl.backdrop.classList.remove('hidden')
		refEl.formSignUp.classList.add('active')
		IS_FORM_OPEN = true;
		refEl.formChangerOnSignIn.addEventListener('click', toSignIn)
		refEl.formSignUp.addEventListener('submit', onSubmitSignUp)
	}
}
function closeForm() {
	if (IS_FORM_OPEN) {
		refEl.closeBtns.forEach(function (button) {
			button.addEventListener('click', function () {
				let form = button.closest('.form');
				form.classList.remove('active');
				refEl.backdrop.classList.add('hidden')
			});
		})
		IS_FORM_OPEN = false;
	}
}



//function is using on sign up form 
function toSignIn(evt) {
	if (evt.target === refEl.formChangerOnSignIn) {
		console.log('toSignIn');

		refEl.formSignIn.reset()

		refEl.formSignUp.classList.toggle('active')//remove class
		refEl.formSignIn.classList.toggle('active')//add class

		refEl.formSignUp.removeEventListener('click', toSignIn) //remove evt
		refEl.formSignIn.addEventListener('click', toSignUp) //add evt

		refEl.formSignIn.addEventListener('submit', onSubmitSignIn) //add evt submit
		refEl.formSignUp.removeEventListener('submit', onSubmitSignUp)//remover evt submit

		return
	}
}
function toSignUp(evt) {

	if (evt.target === refEl.formChangerOnSignUp) {
		evt.currentTarget.reset()
		console.log('toSignUp');
		refEl.formSignIn.classList.toggle('active')//remove class
		refEl.formSignUp.classList.toggle('active')//add class

		refEl.formSignIn.removeEventListener('click', toSignUp)//remove evt 
		refEl.formSignUp.addEventListener('click', toSignIn)// add evt

		refEl.formSignUp.addEventListener('submit', onSubmitSignUp)//add evt submit
		refEl.formSignIn.removeEventListener('submit', onSubmitSignIn)//remove evt submit
		return
	}
}
async function onSubmitSignUp(evt) {
	evt.preventDefault();
	console.log('click');
	const { elements: { userName, userEmail, userPassword } } = refEl.formSignUp;
	user.signUp(userName.value, userEmail.value, userPassword.value)

}

async function onSubmitSignIn(evt) {
	evt.preventDefault();

	const { elements: { userEmail, userPassword } } = refEl.formSignIn;

	user.signIn(userEmail.value, userPassword.value)
}


