import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
	apiKey: "AIzaSyCMJ4oS1RcIdUOr4jrAkCF8F7w-W-dX16A",
	authDomain: "bookshelf-9ce7f.firebaseapp.com",
	projectId: "bookshelf-9ce7f",
	storageBucket: "bookshelf-9ce7f.appspot.com",
	messagingSenderId: "697346964275",
	appId: "1:697346964275:web:09e1e0b8d99621c0c5dc46",
	measurementId: "G-DTV56C5RE2"
};
//init firebase app
initializeApp(firebaseConfig)
//init services
const db = getFirestore()
export const auth = getAuth()
//colletction ref
export const colRef = collection(db, 'users')
//get collection data

export const dataFireBase = getDocs(colRef)//get all docs from collection
	.then((snapshot) => {
		let users = []
		snapshot.docs.forEach((doc) => {
			users.push({ ...doc.data(), id: doc.id });
		})
		console.log(users);
	})
	.catch(error => console.log(error.message))
