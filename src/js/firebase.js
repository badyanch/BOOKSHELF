import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyCMJ4oS1RcIdUOr4jrAkCF8F7w-W-dX16A",
	authDomain: "bookshelf-9ce7f.firebaseapp.com",
	projectId: "bookshelf-9ce7f",
	storageBucket: "bookshelf-9ce7f.appspot.com",
	messagingSenderId: "697346964275",
	appId: "1:697346964275:web:09e1e0b8d99621c0c5dc46",
	measurementId: "G-DTV56C5RE2"
};
const app = initializeApp(firebaseConfig)//connect to db
export const db = getFirestore(app)//firestore
export const auth = getAuth(app)//auth
export const colRef = collection(db, 'users')//collections




