import "./form"
import { Notify, Loading } from 'notiflix'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { colRef, auth, db } from './firebase'
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { refElHead } from "./header"
export class User {

	constructor() {
		this.auth = getAuth();
		this.currentUser = null;
	}

	async getUser() {
		return await this.getInfoUserFromDb(this.currentUser.email);
	}

	async isAuthenticated() {
		return new Promise((resolve, reject) => {
			onAuthStateChanged(this.auth, (user) => {
				if (user) {
					this.currentUser = user;
					resolve(true);
				} else {
					this.currentUser = null;
					resolve(false);
				}
			}, reject);
		});
	}

	async getInfoUserFromDb(userEmail) {
		const usersCollectionRef = collection(db, "users");
		const queryRef = query(usersCollectionRef, where("userEmail", "==", userEmail));

		try {
			const querySnapshot = await getDocs(queryRef);
			if (querySnapshot.empty) {
				console.error("User not found");
				return
			}

			const userDoc = querySnapshot.docs[0];
			const userData = userDoc.data();
			const userId = userDoc.id;

			const user = { ...userData, id: userId };
			this.currentUser = user
			return
		} catch (error) {
			console.error(error.message);
			return
		}
	}

	async getWishList() {
		try {
			const user = await this.getInfoUserFromDb(this.currentUser.email);
			if (!user) {
				console.error('User not found');
			}
			const wishList = user.userWishList;
			console.log(wishList);
			return wishList
		} catch (error) {
			console.error(error.message);
		}
		return
	}
	async signUp(userName, userEmail, userPassword) {
		try {
			Loading.hourglass()

			await createUserWithEmailAndPassword(auth, userEmail.trim(), userPassword.trim());
			await updateProfile(auth.currentUser, {
				displayName: userName.trim(),
				photoURL: "https://example.com/jane-q-user/profile.jpg"
			});

			await addDoc(colRef, {
				userName: userName.trim(),
				userEmail: userEmail.trim(),
				userPassword: userPassword.trim(),
				userWishList: [],
			});
			await this.getInfoUserFromDb(userEmail)
			Notify.success(`Good job ${userName.trim()}! Your account is created!`);
			await this.signIn(userEmail, userPassword)
			refEl.formSignUp.reset()
		} catch (error) {
			console.error(error.message);
			Notify.failure(error.code);
		} finally {
			Loading.remove()
		}
	}
	async signIn(userEmail, userPassword) {
		try {
			Loading.hourglass();
			await signInWithEmailAndPassword(auth, userEmail.trim(), userPassword.trim());
			refEl.formSignIn.reset();


			const result = await this.isAuthenticated();
			if (result) {
				const currentUser = await this.getInfoUserFromDb(userEmail.trim());
				refElHead.btnAuth.textContent = currentUser.userName;
			}

			Notify.success('You logged in successfully');
		} catch (error) {
			console.error(error.message);
			Notify.failure(error.message.name);
		} finally {
			Loading.remove();
		}
	}

	async signOut() {
		try {
			Loading.hourglass()

			await signOut(auth);
			refEl.formSubmit.disabled = false;
			const result = await this.isAuthenticated();
			if (!result) {
				refElHead.btnAuth.textContent = "SignIn/SignOut";
			}
			closeForm()
			Notify.success('Signed out');
		} catch (error) {
			console.error(error.message);
			Notify.failure(error.code);
		} finally {
			Loading.remove()
		}
	}
}


