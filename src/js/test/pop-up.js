import { Notify } from 'notiflix';
import { fetchBooksForID } from '../API';
import { saveInStorage } from '../shopping-card-storage';
import { getStorageItem } from '../shopping-card-storage';
import { STORAGE_KEY } from '../shopping-card-storage';
import { newArray } from '../shopping-card-storage';


const imageAmazon = new URL(
  '../../images/shoppinglist/amazon-62-19-b-w.png',
  import.meta.url
);

const imageAppleBook = new URL(
  '../../images/shoppinglist/ibook-33-32-b-w.png',
  import.meta.url
);

const imageBookShop = new URL(
  '../../images/shoppinglist/bookshop.png',
  import.meta.url
)

const rootElement = document.querySelector('.categories-root');
backdrop = document.querySelector('.book-backdrop');
const closeButton = document.querySelector('.modal-close');
const bookPopUpCard = document.querySelector('.book-info');

closeButton.addEventListener('click', () => {
  backdrop.classList.add('hidden');
  document.body.style.overflow = '';
});

function closeModal(e) {
  if (e.code === 'Escape' || e.target.classList.contains('book-backdrop')) {
    document.removeEventListener('keydown', closeModal);
    backdrop.removeEventListener('click', closeModal);
    console.log('1234');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

export async function showSingleBookPopUp(e) {
  if (e.target.classList.contains('category-books__item')) {
    const { data } = await fetchSingleBook(e.target.dataset.id);
    const markup = createPopUpMarkup(data);
    bookPopUpCard.innerHTML = markup;
    document.addEventListener('keydown', closeModal);
    backdrop.addEventListener('click', closeModal);
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function createPopUpMarkup({
  author,
  title,
  book_image,
  description,
  buy_links,
}) { 
  return `
  <div class="thumb">
      <a class="book__link js-link" href="">
        <img class="book__image" src="${book_image}" alt="${title}" loading="lazy" />
      </a>
    </div>
    <div class="book__box">
      <div class="book__info">
        <h2 class="book__name">${title}</h2>
        <h3 class="book__author">${author}</h3>
        <p class="book__description">${
          description || 'Sorry, book`s description not found'
        }
        </p>
      </div>
      <ul class="book-link-list">
        <li>
          <a href="${
            buy_links[0].url
          }" aria-label="Amazon" target="_blank" rel="noopener noreferrer nofollow">
            <img class = "book__sales-icon amazon" width="62" height="19" srcset="${imageAmazon} 1x, ${imageAmazon2x} 2x" src="${imageAmazon}" alt="Amazon" />
          </a>
        </li>
        <li>
          <a href="${
            buy_links[1].url
          }" aria-label="Apple books" target="_blank" rel="noopener noreferrer nofollow">
            <img class = "book__sales-icon" width="33" height="32" srcset="${imageAppleBook} 1x, ${imageAppleBook2x} 2x" src="${imageAppleBook}" alt="Apple Books" />
          </a>
        </li>
        <li>
          <a href="${
            buy_links[4].url
          }" aria-label="Bookshop" target="_blank" rel="noopener noreferrer nofollow">
            <img class = "book__sales-icon" width="38" height="36" srcset="${imageBookShop} 1x, ${imageBookShop2x} 2x" src="${imageBookShop}" alt="Bookshop" />
          </a>
        </li>
      </ul>
    </div>
  `
}

rootElement.addEventListener('click', showSingleBookPopUp);




//код 2//


// function createMarkupBooks(category) {
//   const { _id, list_name, book_image, title, author, buy_links } = category;
//   const socialMarkup = buy_links
//     .map(item => {
//       const a = './images/shoppinglist/amazon.png';

//       const newSocialMarkup = `<div class="book-shops-links">
//   <a href="${item.url}" >${item.name}<svg>
//     <use src="../../images/icons#icon-Amazon_logo.svg"></use>
// </svg></a>
// </div>`;
//       return newSocialMarkup;
//     })
//     .join('');
//   const markup = `<div class="thumb">
//       <a class="book__link js-link" href="">
//         <img class="book__image" src="${book_image}" alt="${title}" loading="lazy" />
//       </a>
//     </div>
//     <div class="book__box">
//       <div class="book__info">
//         <h2 class="book__name">${title}</h2>
//         <h3 class="book__author">${author}</h3>
//         <p class="book__description">${
//           description || 'Sorry, book`s description not found'
//         }
//         </p>
//       </div>
//       <ul class="book-link-list">
//         <li>
//           <a href="${
//             buy_links[0].url
//           }" aria-label="Amazon" target="_blank" rel="noopener noreferrer nofollow">
//             <img class = "book__sales-icon amazon" width="62" height="19" srcset="${imageAmazon} 1x, ${imageAmazon2x} 2x" src="${imageAmazon}" alt="Amazon" />
//           </a>
//         </li>
//         <li>
//           <a href="${
//             buy_links[1].url
//           }" aria-label="Apple books" target="_blank" rel="noopener noreferrer nofollow">
//             <img class = "book__sales-icon" width="33" height="32" srcset="${imageAppleBook} 1x, ${imageAppleBook2x} 2x" src="${imageAppleBook}" alt="Apple Books" />
//           </a>
//         </li>
//         <li>
//           <a href="${
//             buy_links[4].url
//           }" aria-label="Bookshop" target="_blank" rel="noopener noreferrer nofollow">
//             <img class = "book__sales-icon" width="38" height="36" srcset="${imageBookShop} 1x, ${imageBookShop2x} 2x" src="${imageBookShop}" alt="Bookshop" />
//           </a>
//         </li>
//       </ul>
//     </div>
// `;
//   modalWindow.insertAdjacentHTML('beforeend', markup);
//   modalWindow.insertAdjacentHTML('beforeend', socialMarkup);
// }

// let localData = getStorageItem(STORAGE_KEY);
// let secondArray;

// if (!localData) {
//   secondArray = [];
// } else {
//   secondArray = newArray.concat(localData);
// }

// const ul = document.querySelector('.books-cards__list');

// ul.addEventListener('click', onClickBookCard);

// const modalWindow = document.querySelector('.book-info');

// async function onClickBookCard(event) {
//   modalWindow.innerHTML = '';
//   const li = event.target.closest('.category-books__item');
//   if (!li) {
//     return;
//   }
//   const favoritBookId = li.dataset.id;

//   try {
//     const fetchAPI = await fetchBooksForID(favoritBookId);

//     createMarkupBooks(fetchAPI.data);

//     const saveBookInStorageButton =
//       document.querySelector('.button-js-storage');

//     if (secondArray.includes(saveBookInStorageButton.dataset.favoriteid)) {
//       saveBookInStorageButton.textContent = 'remove from the shopping list';
//     }

//     saveBookInStorageButton.addEventListener('click', () => {
//       const checkStorage = getStorageItem(STORAGE_KEY);

//       if (saveBookInStorageButton.textContent === 'Add to shopping list') {
//         if (secondArray.includes(saveBookInStorageButton.dataset.favoriteid)) {
//           return;
//         }

//         secondArray.push(saveBookInStorageButton.dataset.favoriteid);
//         saveInStorage(STORAGE_KEY, secondArray);
//         saveBookInStorageButton.textContent = 'remove from the shopping list';
//       } else if (
//         saveBookInStorageButton.textContent === 'remove from the shopping list'
//       ) {
//         const test = checkStorage.indexOf(
//           saveBookInStorageButton.dataset.favoriteid
//         );
//         secondArray.splice(test, 1);

//         saveInStorage(STORAGE_KEY, secondArray);
//         saveBookInStorageButton.textContent = 'Add to shopping list';
//         return;
//       }
//     });
//   } catch (error) {
//     Notify.failure(error.message);
//   }
// }

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
