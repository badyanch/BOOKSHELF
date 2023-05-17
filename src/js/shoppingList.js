// Get the shopping list container element
const shoppingListContainer = document.querySelector('.shopping-list__container');

// Check if shoppingList exists in localStorage
if (localStorage.getItem('shoppingList')) {
  // Retrieve the shoppingList from localStorage
  let shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

  // Create markup for each book in the shoppingList
  const shoplistBooks = shoppingList.map(makeShoplistMarkup);

  // Create markup for a single book
  function makeShoplistMarkup({ bookImg, author, listName, description, title, buyLinks, id }) {
    const shoplistBookContainer = document.createElement('div');
    shoplistBookContainer.classList.add('shoplist-book-container');
    shoplistBookContainer.dataset.id = id;

    const shoplistMarkup = `
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
            <a href="${buyLinks[2].url}" target="_blank">
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
    `;

    shoplistBookContainer.innerHTML = shoplistMarkup;

    return shoplistBookContainer;
  }

  // Create a new container and replace the existing one
  const newShoppingListContainer = document.createElement('div');
  newShoppingListContainer.classList.add('shopping-list__container');
  shoplistBooks.forEach(book => {
    newShoppingListContainer.appendChild(book);
  });

  shoppingListContainer.replaceWith(newShoppingListContainer);

  // Add event listener to each trash icon
  newShoppingListContainer.addEventListener('click', handleTrashIconClick);

  // Remove a book from the shopping list
  function removesBookFromShoppingList(id) {
    shoppingList = shoppingList.filter(book => book.id !== id);
    updateBookOnStorage();

    // Fix updating on the page
    if (shoppingList.length === 0) {
      newShoppingListContainer.replaceWith(shoppingListContainer);
    } else {
      const bookContainerToRemove = newShoppingListContainer.querySelector(`[data-id="${id}"]`);
      bookContainerToRemove.remove();
    }
  }

  // Handle click event on trash icon
  function handleTrashIconClick(event) {
    if (event.target.classList.contains('shoplist-trash')) {
      const bookContainer = event.target.closest('.shoplist-book-container');
      const id = bookContainer.dataset.id;
      removesBookFromShoppingList(id);
    }
  }

  // Update Local Storage
  function updateBookOnStorage() {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }
}
// Hide/show pagination container
