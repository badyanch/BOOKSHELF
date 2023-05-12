import { addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInAnonymously, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { colRef, auth } from './firebase'
import { Notify } from 'notiflix'
export const refEl = {
	formSignIn: document.querySelector('#sign-in'),
	formSignUp: document.querySelector('#sign-up'),
	formChangerOnSignUp: document.querySelector('.js__sign-up'),
	formChangerOnSignIn: document.querySelector('.js__sign-in'),
	formSubmit: document.querySelector('.form__submit'),

}
refEl.formSignUp.addEventListener('click', toSignIn)
refEl.formSignUp.addEventListener('submit', onSubmitSignUp)

//function is using on sign up form 


function toSignIn(evt) {
	if (evt.target === refEl.formChangerOnSignIn) {

		evt.currentTarget.reset()

		console.log('click on sign in');
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

		console.log('click on sign up');
		refEl.formSignIn.classList.toggle('active')//remove class
		refEl.formSignUp.classList.toggle('active')//add class

		refEl.formSignIn.removeEventListener('click', toSignUp)//remove evt 
		refEl.formSignUp.addEventListener('click', toSignIn)// add evt

		refEl.formSignUp.addEventListener('submit', onSubmitSignUp)//add evt submit
		refEl.formSignIn.removeEventListener('submit', onSubmitSignIn)//remove evt submit

		return
	}
}
function onSubmitSignUp(evt) {
	evt.preventDefault()

	const { elements: { userName, userEmail, userPassword } } = refEl.formSignUp
	createUserWithEmailAndPassword(auth, userEmail.value.trim(), userPassword.value.trim())
		.then((cred) => {
			console.log('user created:', cred.user);
			addDoc(colRef, {
				userName: userName.value.trim(),
				userEmail: userEmail.value.trim(),
				userPassword: userPassword.value.trim(),
				created: new Date().toJSON(),
				userWishList: [],
			}).then(() => {
				refEl.formSignUp.reset()
			}).catch(error => {
				console.log(error.message)
				return Notify.failure(error.message)
			})

			refEl.formSignUp.reset()
			Notify.success('Good job! Your account is created!')
		})
		.catch(error => {
			console.log(error.message)
			return Notify.failure(error.message)
		})

	return;
}

function onSubmitSignIn(evt) {
	evt.preventDefault()
	const { elements: { userEmail, userPassword } } = refEl.formSignIn
	signInWithEmailAndPassword(auth, userEmail.value.trim(), userPassword.value.trim())
		.then((cred) => {
			console.log('user logged in:', cred.user);
			refEl.formSignUp.reset()
			return Notify.success('You logged successfully')

		}).catch(error => {
			console.log(error.message)
			return Notify.failure(error.message)
		})

}

/* function onSignOut() {
	signOut(auth)
		.then(() => {
			console.log('Sign Out');
			return Notify.success('Signed out')
		})
		.catch(error => {
			console.log(error.message)
			return Notify.failure(error.message)
		})
	 }*/



