import "./form"
import { Notify, Loading } from 'notiflix'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { colRef, auth, db } from './firebase'
import { addDoc, collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore'
import { refEl } from "./form"

export class User {
	constructor() {
		this.auth = getAuth();
		this.currentUser = null;
		this.isAuthenticated();
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
				return;
			}

			const userDoc = querySnapshot.docs[0];
			const userData = userDoc.data();
			const userId = userDoc.id;

			const user = { ...userData, id: userId };
			this.currentUser = user;
			const currentUserData = { id: user.id, wishList: user.userWishList };
			localStorage.setItem('currentUser', JSON.stringify(currentUserData));

			return user;
		} catch (error) {
			console.error(error.message);
			return;
		}
	}

	async addToWishList(bookId, email) {
		try {
			const user = await this.getInfoUserFromDb(email);
			if (!user) {
				console.error('User not found');
				return;
			}

			const wishList = user.userWishList;
			if (wishList.includes(bookId)) {
				console.log('Book already exists in the wishlist');
				return;
			}

			wishList.push(bookId);

			await updateDoc(doc(db, 'users', user.id), { userWishList: wishList });
			const currentUserData = { id: user.id, wishList: wishList };
			localStorage.setItem('currentUser', JSON.stringify(currentUserData));

			Notify.info(`Book added to shopping list`)

		} catch (error) {
			console.error(error.message);
		}
	}

	async removeFromWishlist(bookId, email) {
		try {
			const user = await this.getInfoUserFromDb(email);
			if (!user) {
				console.error('User not found');
				return;
			}

			const wishList = user.userWishList;
			if (!wishList.includes(bookId)) {
				console.log('Book does not exist in the wishlist');
				return;
			}

			const updatedWishlist = wishList.filter((id) => id !== bookId);

			await updateDoc(doc(db, 'users', user.id), { userWishList: updatedWishlist });
			const currentUserData = { id: user.id, wishList: updatedWishlist };
			localStorage.setItem('currentUser', JSON.stringify(currentUserData));
			Notify.info(`Book removed from shopping list`)
		} catch (error) {
			console.error(error.message);
		}
	}

	async getWishList(email) {
		try {
			const user = await this.getInfoUserFromDb(email);
			if (!user) {
				console.error('User not found');
				return;
			}
			const wishList = user.userWishList;
			// console.log(wishList);
			return wishList;
		} catch (error) {
			console.error(error.message);
		}
		return;
	}

	async signUp(userName, userEmail, userPassword) {
		try {
			Loading.hourglass();

			await createUserWithEmailAndPassword(auth, userEmail.trim(), userPassword.trim());
			await updateProfile(auth.currentUser, {
				displayName: userName,
			});

			await addDoc(colRef, {
				userName: userName.trim(),
				userEmail: userEmail.trim().toLowerCase(),
				userPassword: userPassword.trim(),
				userWishList: [],
			});

			await this.getInfoUserFromDb(userEmail);

			Notify.success(`Good job ${userName.trim()}! Your account is created!`);
			refEl.formSignUp.reset();

			const currentUserData = { id: this.currentUser.id, wishList: this.currentUser.userWishList };
			localStorage.setItem('currentUser', JSON.stringify(currentUserData));

			await this.signIn(userEmail, userPassword);
		} catch (error) {
			console.error(error.message);
			Notify.failure(error.code);
		} finally {
			Loading.remove();
		}
	}

	async signIn(userEmail, userPassword) {
		try {
			Loading.hourglass();
			const result = await signInWithEmailAndPassword(auth, userEmail.toLowerCase(), userPassword);
			Notify.success('You logged in successfully');

			if (result) {
				refEl.formSignIn.reset();

				await this.getInfoUserFromDb(userEmail);

				const currentUserData = { id: this.currentUser.id, wishList: [] };
				localStorage.setItem('currentUser', JSON.stringify(currentUserData));
				location.reload();
			}
		} catch (error) {
			console.error(error.message);
			Notify.failure(error.code);
		} finally {
			Loading.remove();
		}
	}

	async signOut() {
		try {
			Loading.hourglass();

			await signOut(auth);

			localStorage.removeItem('currentUser');

			Notify.success('Signed out');
			location.reload();
		} catch (error) {
			console.error(error.message);
			Notify.failure(error.code);
		} finally {
			Loading.remove();
		}
	}
}
