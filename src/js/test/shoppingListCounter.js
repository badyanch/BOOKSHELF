



 export function getNumberFromStorage() {
    const savedBook = localStorage.getItem('currentUser');
    if (!savedBook) {
        return console.log('Pease login first');
    }
    const parsedBooks = JSON.parse(savedBook);
    console.log(parsedBooks);

    const bookArray = parsedBooks.wishList;
    if (!bookArray) {
        return console.log('There is no books in wish-list');
    }
    const bookArrLength = bookArray.length
    console.log(bookArrLength);

     drawBasket(bookArrLength);

    
}
    
function drawBasket(booksLength) {
    const basketCounterThumb = document.querySelector('.page-nav__cart-number');
    // console.log(basketCounterThumb);
    basketCounterThumb.classList.remove('visually-hidden');
    basketCounterThumb.textContent = booksLength;
    // const listLength = parsedBooks.length;
}

getNumberFromStorage();