import { fetchCategoryList } from './fetch-category';
import { allCategoryMarkup } from './markup-top-books';

const listCategory = document.querySelector('.list-categories');
const bookSection = document.querySelector('.books-cards__list');

listCategory.addEventListener('click', onClickCategory);

async function onClickCategory(evt) {
  bookSection.classList.remove('top-books-list');
  bookSection.classList.add('category-books-list');
  evt.preventDefault();
  if (evt.target.classList.contains('category__link-all')) {
    removeMarkup();
    evt.target.classList.add('current-category');
    allCategoryMarkup();
  }
  if (evt.target.classList.contains('category__link')) {
    removeMarkup();
    const category = evt.target.textContent;
    evt.target.classList.add('current-category');
    addHeading(category);
    const categoryItem = await fetchCategoryList(category);
    createMarkupBooks(categoryItem);
  }
}

function removeMarkup() {
  const sectionTitle = document.querySelector('.books-cards__title');
  if (sectionTitle) {
    sectionTitle.remove();
  }
  removeCurrentClass();
  bookSection.innerHTML = '';
}

function addHeading(string) {
  const sectionTitle = document.querySelector('.books-cards__title');
  if (!sectionTitle) {
    const arr = string.split(' ');
    const lastElement = arr.pop(arr[arr.length - 1]);
    const markup = `<h1 class="books-cards__title">${arr.join(' ')}
	        <span class="books-cards__title-accent"> ${lastElement}</span></h1>`;
    bookSection.insertAdjacentHTML('beforebegin', markup);
  }
}

function removeCurrentClass() {
  const allCategory = document.querySelectorAll('.category__link');
  allCategory.forEach(category => {
    category.classList.remove('current-category');
  });
  const categoryLinkAll = document.querySelector('.category__link-all');
  if (categoryLinkAll.classList.contains('current-category')) {
    categoryLinkAll.classList.remove('current-category');
  }
}

function createMarkupBooks(category) {
  const markup = category
    .map(item => {
      const { _id, book_image, title, author } = item;
      return `
    <li data-id="${_id}" class="category-books__item">
    <a href="" class="category-books__link">
    <div class="category-books__img-thumb">
    <img src="${book_image}" alt="${title}" class="category-books__img">
    <p class="card-overlay">Quick view</p>
    </div>
    <h2 class="category-books__title">${title}</h2>
    <p class="category-books__author">${author}</p>
    </a>
    </li>`;
    })
    .join('');
  bookSection.insertAdjacentHTML('beforeend', markup);
}

export async function getAllTopBooks() {
  const { data } = await fetchTopBooks();
  categoriesRoot.insertAdjacentHTML('beforeend', createMarkupAllBooks(data));

  const booksList = document.querySelector('.top-books__item');
  booksList.addEventListener('click', bestSellersClickHandler);
}
getAllTopBooks();

function bestSellersClickHandler(event) {
  if (event.target.closest('.category-books__item')) {
    const currentBook = event.target.closest('.category-books__item');
    const bookID = currentBook.dataset.id;
    console.log(bookID);
  } else if (event.target.classList.contains('card-overlay')) {
    const currentCategory = event.target.closest('.category-books__item')
      .children[0];
    const categoryName = currentCategory.textContent;
    console.log(categoryName);
  }
}

export { createMarkupBooks };
export { addHeading };
