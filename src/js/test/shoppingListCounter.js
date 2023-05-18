


// <<<<<<< supportBranch
// function getNumberFromStorageNDraw() {
//     const savedBook = localStorage.getItem('currentUser') || '';
//     if (savedBook === '') {
//         return console.log('There is no books in storage');
//     }
//     const parsedBooks = JSON.parse(savedBook);
//     console.log(parsedBooks);
//     // const listLength = parsedBooks.length;
function getNumberFromStorageNDraw() {
    const savedBook = localStorage.getItem('currentUser') || '';
    if (savedBook === '') {
        return console.log('There is no books in storage');
    }
    const parsedBooks = JSON.parse(savedBook);
    console.log(parsedBooks);
    // const listLength = parsedBooks.length;
    
    // const basketThubm = document.querySelector('.page-nav__cart-number');
//     console.log(basketThubm);
//     const markup = `<div class="header-wishlist-counter-thumb">${listLength}</div>`;
//     basketThubm.classList.remove('.visually-hidden');
//     basketThubm.textContent = listLength;
//     basketThubm.insertAdjacentHTML('beforeend', markup);
// }
// =======
// function getNumberFromStorageNDraw() {
//     const savedBook = localStorage.getItem('card-info') || '';
//     if (savedBook === '') {
//         return console.log('There is no books in storage');
//     }
//     const parsedBooks = JSON.parse(savedBook);
//     listLength = parsedBooks.length;
//     const basketThubm = document.querySelector('.page-nav__cart-number');
//     console.log(basketThubm);
//     const markup = `<div class="header-wishlist-counter-thumb">${listLength}</div>`;
//     basketThubm.classList.remove('.visually-hidden');
//     basketThubm.textContent = listLength;
//     basketThubm.insertAdjacentHTML('beforeend', markup);
// }
// >>>>>>> main


// getNumberFromStorageNDraw();