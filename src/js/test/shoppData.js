import { fetchBooksForID } from "../API";

const currentUser = localStorage.getItem("currentUser");

if (currentUser) {
	const userData = JSON.parse(currentUser);

	if (userData.hasOwnProperty("wishList")) {
		let arrayOfBooks = userData.wishList
		console.log(arrayOfBooks);
		return arrayOfBooks;
	}
}



function createMarkupOfBook(arr) {
	console.log(arr);
	return arr.map(book => `
	<img src="${bookImg}" class="shoplist-book-img">
	<div class="shoplist-desc-container">
	  <h4 class="shoplist-book-title">${title}</h4>
	  <p class="shoplist-book-genre">${listName}</p>
	  <p class="shoplist-book-description">${description}</p>
	  <p class="shoplist-book-author">${author}</p>
	</div>
	<div class="shoplist-icons">
	  <ul class="shoplist-icons-list">
		<li class="shoplist-icons-li">
		  <a href="${buyLinks[0].url}" target="_blank">
			<div class="shoplist-icon-amazon"></div>
		  </a>
		</li>
		<li class="shoplist-icons-li">
		  <a href="${buyLinks[1].url}" target="_blank">
			<div class="shoplist-icon-ibook"></div>
		  </a>
		</li>
		<li class="shoplist-icons-li">
		  <a href="${buyLinks[4].url}" target="_blank">
			<div class="shoplist-icon-bookshop"></div>
		  </a>
		</li>
	  </ul>
	</div>
	<div class="shoplist-trash"></div>
  `)
}

createMarkupOfBook(arrayOfBooks)
