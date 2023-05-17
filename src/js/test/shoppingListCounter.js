


function getNumberFromStorageNDraw() {
    const savedBook = localStorage.getItem('') || '';
    if (savedBook === '') {
        return console.log('There is no books in storage');
    }
    const parsedBooks = JSON.parse(savedBook);
    listLength = parsedBooks.length;
    const basketThubm = document.querySelector('.page-nav__cart-number');
    console.log(basketThubm);
    // const markup = `<div class="header-wishlist-counter-thumb">${listLength}</div>`;
    basketThubm.classList.remove('.visually-hidden');
    basketThubm.textContent = listLength;
    basketThubm.insertAdjacentHTML('beforeend', markup);
}


getNumberFromStorageNDraw();