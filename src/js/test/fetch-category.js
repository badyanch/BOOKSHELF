const BASE_URl = 'https://books-backend.p.goit.global/books/category?category=';

const booksCardsList = document.querySelector('.books-cards__list');



export async function fetchCategoryList(requestTheme) {
	booksCardsList.insertAdjacentHTML('afterbegin', '<div class="bookshelf_wrapper"><ul class="books_list"><li class="book_item first"></li><li class="book_item second"></li><li class="book_item third"></li><li class="book_item fourth"></li><li class="book_item fifth"></li><li class="book_item sixth"></li></ul><div class="shelf"></div></div>');
	
	const response = await fetch(`${BASE_URl}${requestTheme}`);
	if (!response.ok) {
		throw new Error(response.status);
	}
	const category = await response.json();
	return category;
}
