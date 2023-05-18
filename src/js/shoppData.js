
import { fetchBooksForID } from "../API";

const currentUser = localStorage.getItem("currentUser");

if (currentUser) {
	const userData = JSON.parse(currentUser);

	if (userData.hasOwnProperty("wishList")) {
		let arrayOfBooks = userData.wishList
		return arrayOfBooks;
	}
}

export async function getBooksData(ids) {
	const booksData = [];

	for (const id of ids) {
		const bookData = await fetchBooksForID(id);
		booksData.push(bookData.data);
	}
	return booksData;
}