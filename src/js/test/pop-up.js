import { Notify } from 'notiflix';
import { fetchBooksForID } from '../API';
import { saveInStorage } from '../shopping-card-storage';
import { getStorageItem } from '../shopping-card-storage';
import { STORAGE_KEY } from '../shopping-card-storage';
import { newArray } from '../shopping-card-storage';

function createMarkupBooks(category) {
  const { _id, list_name, book_image, title, author, buy_links } = category;
  const socialMarkup = buy_links
    .map(item => {
      const a = './images/png/amazon-shop.png';

      const newSocialMarkup = `<div class="book-shops-links">
  <a href="${item.url}" >${item.name}<svg>
    <use src="../../images/icons#icon-Amazon_logo.svg"></use>
</svg></a>
</div>`;
      return newSocialMarkup;
    })
    .join('');
  const markup = `<div class="data-book">
<img src="${book_image}" alt="${list_name}">
<div class="data-book__info">
<h2 class="data-book__title">${title}</h2>
<h3 class="data-book__subtitle">${author}</h3>
<p class="data-book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloremque soluta est possimus, porro quidem minus, iste accusantium ut impedit officiis corporis placeat unde neque. Molestias expedita eum nesciunt illum.
</p>
</div>
<button type="button" class="button-js-storage" data-favoriteid='${_id}'>Add to shopping list</button>
`;
  modalWindow.insertAdjacentHTML('beforeend', markup);
  modalWindow.insertAdjacentHTML('beforeend', socialMarkup);
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

    createMarkupBooks(fetchAPI.data);

    const saveBookInStorageButton =
      document.querySelector('.button-js-storage');

    if (secondArray.includes(saveBookInStorageButton.dataset.favoriteid)) {
      saveBookInStorageButton.textContent = 'remove from the shopping list';
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
      } else if (
        saveBookInStorageButton.textContent === 'remove from the shopping list'
      ) {
        const test = checkStorage.indexOf(
          saveBookInStorageButton.dataset.favoriteid
        );
        secondArray.splice(test, 1);

        saveInStorage(STORAGE_KEY, secondArray);
        saveBookInStorageButton.textContent = 'Add to shopping list';
        return;
      }
    });
  } catch (error) {
    Notify.failure(error.message);
  }
}
