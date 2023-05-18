import { getBooksData } from "./test/shoppData";
import { User } from "./authentication/authorization";
import { auth } from './authentication/firebase';

const shoppingListContainer = document.querySelector('.shopping-list__container');

if (localStorage.getItem('currentUser')) {
	let currentUser = JSON.parse(localStorage.getItem('currentUser'));

	if (currentUser.hasOwnProperty('wishList')) {
		let wishList = currentUser.wishList;
		let dataOfBooks = [];

		getBooksData(wishList)
			.then((booksData) => {
				dataOfBooks = booksData;
				console.log(dataOfBooks);

				const shoplistBooks = dataOfBooks.map(makeShoplistMarkup);

				function makeShoplistMarkup({
					book_image,
					author,
					list_name,
					description,
					title,
					buy_links,
					_id,
				}) {
					const shoplistBookContainer = document.createElement('div');
					shoplistBookContainer.classList.add('shoplist-book-container');
					shoplistBookContainer.dataset.id = _id;

					const shoplistMarkup = `
            <img src="${book_image}" class="shoplist-book-img">
            <div class="shoplist-desc-container">
              <h4 class="shoplist-book-title">${title}</h4>
              <p class="shoplist-book-genre">${list_name}</p>
              <p class="shoplist-book-description">${description || 'Sorry, book\'s description not found'}</p>
              <p class="shoplist-book-author">${author}</p>
            </div>
            <div class="shoplist-icons">
              <ul class="shoplist-icons-list">
                <li class="shoplist-icons-li">
                  <a href="${buy_links[0].url}" target="_blank">
                    <div class="shoplist-icon-amazon"></div>
                  </a>
                </li>
                <li class="shoplist-icons-li">
                  <a href="${buy_links[1].url}" target="_blank">
                    <div class="shoplist-icon-ibook"></div>
                  </a>
                </li>
                <li class="shoplist-icons-li">
                  <a href="${buy_links[4].url}" target="_blank">
                    <div class="shoplist-icon-bookshop"></div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="shoplist-trash"></div>
          `;

					shoplistBookContainer.innerHTML = shoplistMarkup;

					return shoplistBookContainer;
				}

				const newShoppingListContainer = document.createElement('div');
				newShoppingListContainer.classList.add('shopping-list__container');
				shoplistBooks.forEach(book => {
					newShoppingListContainer.appendChild(book);
				});

				shoppingListContainer.replaceWith(newShoppingListContainer);

				newShoppingListContainer.addEventListener('click', handleTrashIconClick);

				function removeBookFromShoppingList(id) {
					const user = new User();
					wishList = wishList.filter(book => book._id !== id);
					user.removeFromWishlist(id, auth.currentUser.email);

					if (wishList.length === 0) {
						newShoppingListContainer.replaceWith(shoppingListContainer);
					} else {
						const bookContainerToRemove = newShoppingListContainer.querySelector(
							`[data-id="${id}"]`
						);
						bookContainerToRemove.remove();
					}
				}

				function handleTrashIconClick(event) {
					if (event.target.classList.contains('shoplist-trash')) {
						const bookContainer = event.target.closest('.shoplist-book-container');
						const id = bookContainer.dataset.id;
						console.log(id);
						removeBookFromShoppingList(id);
					}
				}

			})
			.catch(error => {
				console.error('Error retrieving books data:', error);
			});
	}
}
