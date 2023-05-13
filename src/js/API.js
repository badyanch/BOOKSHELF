import axios from 'axios/dist/axios.min.js';

export async function fetchCategoryList() {
  const categoryBooksList = await axios.get(
    `https://books-backend.p.goit.global/books/category-list`
  );
  console.log(categoryBooksList);
  return categoryBooksList;
}

export async function fetchTopBooks() {
  const topBooksData = await axios.get(
    `https://books-backend.p.goit.global/books/top-books`
  );
  return topBooksData;
}

export async function fetchSelectedCategory(selectedCategory) {
  const selectedCategoryData = await axios.get(
    `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
  );
  return selectedCategoryData;
}

export async function fetchBooksForID(id) {
  const resultSearchData = await axios.get(
    `https://books-backend.p.goit.global/books/${id}`
  );
  return resultSearchData;
}
