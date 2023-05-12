export const refEl = {
	formSignIn: document.querySelector('#sign-in'),
	formSignUp: document.querySelector('#sign-up'),
	formChangerOnSignUp: document.querySelector('.js__sign-up'),
	formChangerOnSignIn: document.querySelector('.js__sign-in'),


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
		refEl.formSignIn.removeEventListener('submit', onSubmitSignIn)//remover evt submit
		return
	}
}


function onSubmitSignUp(evt) {
	evt.preventDefault()

	const { elements: { userName, userEmail, userPassword } } = refEl.formSignUp
	let user = {
		userName: userName.value,
		userEmail: userEmail.value,
		userPassword: userPassword.value
	}

	return console.log(user);
}
function onSubmitSignIn(evt) {
	evt.preventDefault()
	console.log('onSubmitSignIn');
}


