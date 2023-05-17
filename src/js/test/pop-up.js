import { Notify } from 'notiflix';
import { fetchBooksForID } from '../API';
import { saveInStorage } from '../shopping-card-storage';
import { getStorageItem } from '../shopping-card-storage';
import { STORAGE_KEY } from '../shopping-card-storage';
import { newArray } from '../shopping-card-storage';

const linkAmazonImg = new URL(
  '../../images/shoppinglist/amazon.png',
  import.meta.url
);
const linkAppleImg = new URL(
  '../../images/shoppinglist/ibook.png',
  import.meta.url
);
const linkBookShopImg = new URL(
  '../../images/shoppinglist/bookshop.png',
  import.meta.url
);

function createMarkupBooks(category) {
  const { _id, list_name, book_image, title, author, buy_links, description } =
    category;

  const markup = `<div class="data-book">
<div class="data-book__info">
<img src="${book_image}" alt="${list_name}" class="data-book__img">
<div class="data-book__thumb"><h2 class="data-book__title">${title}</h2>
<h3 class="data-book__subtitle">${author}</h3>
<p class="data-book__description">${
    description || 'Sorry, book`s description not found'
  }
</p></div>
</div>
<button type="button" class="button-js-storage data-book__shop" data-favoriteid='${_id}'>Add to shopping list</button>
<p class="data-book__success">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
`;
  modalWindow.insertAdjacentHTML('beforeend', markup);

  const socialLinks = document.querySelector('.data-book__thumb');

  const socialThumb = document.createElement('div');
  socialThumb.classList.add('social-shop-thumb');
  socialLinks.append(socialThumb);

  socialThumb.insertAdjacentHTML('beforeend', testFunc(buy_links));
}

function testFunc(array) {
  let markup = '';
  const linkArr = [linkAmazonImg, linkAppleImg, linkBookShopImg];
  for (let index = 0; index < 3; index++) {
    markup += `<a target="_blank" href="${array[index].url}"><img class="social-img" src='${linkArr[index]}' alt='${array[index].name}'/>
      `;
  }

  return markup;
}

let localData = getStorageItem(STORAGE_KEY);
let secondArray;

if (!localData) {
  secondArray = [];
} else {
  secondArray = newArray.concat(localData);
}

const ul = document.querySelector('.books-cards__list');

ul.addEventListener('click', onClickBookCard);

const modalWindow = document.querySelector('.book-info');

async function onClickBookCard(event) {
  modalWindow.innerHTML = '';
  const li = event.target.closest('.category-books__item');
  if (!li) {
    return;
  }
  const favoritBookId = li.dataset.id;

  try {
    const fetchAPI = await fetchBooksForID(favoritBookId);
    modalOpenMenu();

    createMarkupBooks(fetchAPI.data);
    const discriptionText = document.querySelector('.data-book__success');

    const saveBookInStorageButton =
      document.querySelector('.button-js-storage');

    if (secondArray.includes(saveBookInStorageButton.dataset.favoriteid)) {
      saveBookInStorageButton.textContent = 'remove from the shopping list';
      discriptionText.style.display = 'block';
    }

    saveBookInStorageButton.addEventListener('click', () => {
      const checkStorage = getStorageItem(STORAGE_KEY);

      if (saveBookInStorageButton.textContent === 'Add to shopping list') {
        if (secondArray.includes(saveBookInStorageButton.dataset.favoriteid)) {
          return;
        }

        secondArray.push(saveBookInStorageButton.dataset.favoriteid);
        saveInStorage(STORAGE_KEY, secondArray);
        saveBookInStorageButton.textContent = 'remove from the shopping list';
        discriptionText.style.display = 'block';
      } else if (
        saveBookInStorageButton.textContent === 'remove from the shopping list'
      ) {
        const test = checkStorage.indexOf(
          saveBookInStorageButton.dataset.favoriteid
        );
        secondArray.splice(test, 1);

        saveInStorage(STORAGE_KEY, secondArray);
        saveBookInStorageButton.textContent = 'Add to shopping list';
        discriptionText.style.display = 'none';
        return;
      }
    });
  } catch (error) {
    Notify.failure(error.message);
  }
}

const modalOpen = document.querySelector('[data-book-modal-open]');
const modalForBook = document.querySelector('.book-modal');
const modalBtnClose = document.querySelector('.modal-close-book-btn');

modalBtnClose.addEventListener('click', onClickBtnModalClose);

function modalOpenMenu() {
  modalOpen.classList.toggle('is-hidden-book-backdrop');
}
modalOpen.addEventListener('click', event => {
  if (!event.target.closest('.book-modal')) {
    modalOpen.classList.add('is-hidden-book-backdrop');
  }
});

function onClickBtnModalClose() {
  modalOpen.classList.add('is-hidden-book-backdrop');
}
