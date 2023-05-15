import { fetchBooksForID } from '../API';





function createMarkupBooks(category) {
  
  const { _id, list_name, book_image, title, author } = category
  
  const markup = 
 
  `<div class="data-book">
<img src="${book_image}" alt="${list_name}" class="book-image">
<div class="data-book__info">
<h2 class="data-book__title">${title}</h2>
<h3 class="data-book__subtitle">${author}</h3>
<p class="data-book__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloremque soluta est possimus, porro quidem minus, iste accusantium ut impedit officiis corporis placeat unde neque. Molestias expedita eum nesciunt illum.
</p>
<ul  class="logo-shops-link">
  <li class="logo-shops-title">
<img src="/src/images/shoppinglist/amazon-b-w.png" alt="логотип магазина">
  </li>
   <li class="logo-shops-link">
<img src="/src/images/shoppinglist/ibook-b-w.png" alt="логотип магазина">
   </li>
    <li class="logo-shops-link">
<img src="/src/images/shoppinglist/bookshop.png" alt="логотип магазина">
    </li>
</ul>
</div>
<button type="button" class="button-delete">Add to shopping list</button>
`;  
  modalWindow.insertAdjacentHTML("beforeend", markup)
  
  
 
}

const ul = document.querySelector('.books-cards__list');

ul.addEventListener('click', onClickBookCard)

async function onClickBookCard(event) {
  const test = await event.target;

  if (event.target.nodeName !== "LI") {
    return
  } else { 
  }

}

const modalWindow = document.querySelector(".book-info");

async function onClickBookCard(event) {
  const li = event.target.closest('.category-books__item');
  if (!li) {
    return;
  }
  const favoritBookId = li.dataset.id;
  const fetchAPI = await fetchBooksForID(favoritBookId);
  createMarkupBooks(fetchAPI.data)
  // console.log("ответ", fetchAPI);
  // const markup = await createMarkupBooks(fetchAPI.data);

}




// <div class="book-shops-links">
//   <a href="${url}" ><img src="../../images/save to Ukraine/image 1.png" alt="${name}"></a>
//    <a href=""><img src="" alt=""></a>
//    <a href=""><img src="" alt=""></a>
// </div>`;