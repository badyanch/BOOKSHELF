function t(t,o,e,s){Object.defineProperty(t,o,{get:e,set:s,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},s={},n=o.parcelRequired7c6;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in s){var o=s[t];delete s[t];var n={id:t,exports:{}};return e[t]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,o){s[t]=o},o.parcelRequired7c6=n),n.register("kyEFX",(function(o,e){var s,n;t(o.exports,"register",(function(){return s}),(function(t){return s=t})),t(o.exports,"resolve",(function(){return n}),(function(t){return n=t}));var i={};s=function(t){for(var o=Object.keys(t),e=0;e<o.length;e++)i[o[e]]=t[o[e]]},n=function(t){var o=i[t];if(null==o)throw new Error("Could not resolve bundle with id "+t);return o}})),n("kyEFX").register(JSON.parse('{"5ZPII":"index.aeff40e6.js","hCiMs":"amazon.a26c5207.png","1uoOU":"ibook.dbc85e35.png","b8uvO":"bookshop.27255142.png","kh1ew":"ShoppingPage.38a82b19.js"}')),n("cTOKP"),n("fUP9p"),n("gHoxe"),n("fuWhn"),n("2uRvp"),function(){const t=localStorage.getItem("card-info")||"";if(""===t)return console.log("There is no books in storage");const o=JSON.parse(t);listLength=o.length;const e=document.querySelector(".page-nav__cart-number");console.log(e);const s=`<div class="header-wishlist-counter-thumb">${listLength}</div>`;e.classList.remove(".visually-hidden"),e.textContent=listLength,e.insertAdjacentHTML("beforeend",s)}();const i="https://books-backend.p.goit.global/books/category?category=",a=document.querySelector(".books-cards__list");async function r(t){a.insertAdjacentHTML("afterbegin",'<div class="bookshelf_wrapper"><ul class="books_list"><li class="book_item first"></li><li class="book_item second"></li><li class="book_item third"></li><li class="book_item fourth"></li><li class="book_item fifth"></li><li class="book_item sixth"></li></ul><div class="shelf"></div></div>');const o=await fetch(`${i}${t}`);if(!o.ok)throw new Error(o.status);return await o.json()}const c="https://books-backend.p.goit.global/books/",l=document.querySelector(".books-cards__list");async function d(t){l.insertAdjacentHTML("afterbegin",'<div class="bookshelf_wrapper"><ul class="books_list"><li class="book_item first"></li><li class="book_item second"></li><li class="book_item third"></li><li class="book_item fourth"></li><li class="book_item fifth"></li><li class="book_item sixth"></li></ul><div class="shelf"></div></div>');const o=await fetch(`${c}${t}`);if(!o.ok)throw new Error(o.status);return await o.json()}const u={booksCardsList:document.querySelector(".books-cards__list"),booksCardsTitle:null,topBooksCategories:null,booksCardsButton:null};function b(){d("top-books").then((t=>{u.booksCardsList.classList.remove("category-books-list"),u.booksCardsList.classList.add("top-books-list"),u.booksCardsList.innerHTML="",f("Best Sellers Books"),function(t){const o=t.map((({list_name:t})=>`\n    <li class="top-books__item">\n    <h2 class="top-books-title">${t}</h2>\n    <ul class="top-books-categories__list">\n                \n    </ul>\n    <div class="top-books__button-box">\n    <button class="top-books__button" data-list_name="${t}">See More</button>\n    </div>\n    </li>\n    `)).join("");u.booksCardsList.insertAdjacentHTML("beforeend",o)}(t),u.topBooksCategories=document.querySelectorAll(".top-books-categories__list"),u.booksCardsButton=document.querySelector(".top-books__button"),function(t){let o=0;u.topBooksCategories.forEach((e=>{const s=t[o].books.map((({_id:t,book_image:o,title:e,author:s})=>`\n          <li data-id="${t}" class="category-books__item is-hidden-books">\n          <a href="" class="category-books__link">\n          <div class="category-books__img-thumb">\n          <img src="${o}" alt="${e}" class="category-books__img">\n          <p class="card-overlay">Quick view</p>\n          </div>\n          <h2 class="category-books__title">${e}</h2>\n          <p class="category-books__author">${s}</p>\n          </a>\n          </li>`)).join("");e.insertAdjacentHTML("beforeend",s),o++}))}(t)})).catch((()=>{console.log("Проблема з запитом!")}))}u.booksCardsList.addEventListener("click",(async function(t){if(t.preventDefault(),!t.target.classList.contains("top-books__button"))return;console.log("Ти натиснув на кнопку."),u.booksCardsList.classList.remove("top-books-list"),u.booksCardsList.classList.add("category-books-list");const o=t.target.dataset.list_name;u.booksCardsTitle=document.querySelector(".books-cards__title"),u.booksCardsTitle.remove(),f(o),u.booksCardsList.innerHTML="";m(await r(o))})),b();const k=document.querySelector(".list-categories"),_=document.querySelector(".books-cards__list");function g(){const t=document.querySelector(".books-cards__title");t&&t.remove(),function(){document.querySelectorAll(".category__link").forEach((t=>{t.classList.remove("current-category")}));const t=document.querySelector(".category__link-all");t.classList.contains("current-category")&&t.classList.remove("current-category")}(),_.innerHTML=""}function f(t){if(!document.querySelector(".books-cards__title")){const o=t.split(" "),e=o.pop(o[o.length-1]),s=`<h1 class="books-cards__title">${o.join(" ")}\n\t        <span class="books-cards__title-accent"> ${e}</span></h1>`;_.insertAdjacentHTML("beforebegin",s)}}function m(t){_.innerHTML="";const o=t.map((t=>{const{_id:o,book_image:e,title:s,author:n}=t;return`\n    <li data-id="${o}" class="category-books__item">\n    <a href="" class="category-books__link">\n    <div class="category-books__img-thumb">\n    <img src="${e}" alt="${s}" class="category-books__img">\n    <p class="card-overlay">Quick view</p>\n    </div>\n    <h2 class="category-books__title">${s}</h2>\n    <p class="category-books__author">${n}</p>\n    </a>\n    </li>`})).join("");_.insertAdjacentHTML("beforeend",o)}k.addEventListener("click",(async function(t){_.classList.remove("top-books-list"),_.classList.add("category-books-list"),t.preventDefault(),t.target.classList.contains("category__link-all")&&(g(),t.target.classList.add("current-category"),b());if(t.target.classList.contains("category__link")){g();const o=t.target.textContent;t.target.classList.add("current-category"),f(o);m(await r(o))}}));const p=document.querySelector(".list-categories");p.insertAdjacentHTML("afterbegin",'<li><a href="./index.html" class="js-cat-link category__link-all current-category">All category</a></li>'),async function(){const t=await d("category-list"),o=[];for(const{list_name:e}of t)o.push(e);const e=o.sort(((t,o)=>t.localeCompare(o))).map((t=>`<li class="category__item"><a href="" class="js-cat-link category__link">${t}</a></li>`)).join("");p.insertAdjacentHTML("beforeend",e)}();var h,y=n("7Y9D8"),v=n("cTOKP"),L=n("dQL0x"),w=n("fUP9p"),S=n("kAe2l");h=new URL(n("kyEFX").resolve("hCiMs"),import.meta.url).toString();const C=new URL(h);var T;T=new URL(n("kyEFX").resolve("1uoOU"),import.meta.url).toString();const $=new URL(T);var E;E=new URL(n("kyEFX").resolve("b8uvO"),import.meta.url).toString();const j=new URL(E);function H(t){const{_id:o,list_name:e,book_image:s,title:n,author:i,buy_links:a,description:r}=t,c=`<div class="data-book">\n<div class="data-book__info">\n<img src="${s}" alt="${e}" class="data-book__img">\n<div class="data-book__thumb"><h2 class="data-book__title">${n}</h2>\n<h3 class="data-book__subtitle">${i}</h3>\n<p class="data-book__description">${r||"Sorry, book`s description not found"}\n</p></div>\n</div>\n<button type="button" class="button-js-storage data-book__shop" data-favoriteid='${o}'>Add to shopping list</button>\n<p class="data-book__success">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n`;q.insertAdjacentHTML("beforeend",c);const l=document.querySelector(".data-book__thumb"),d=document.createElement("div");d.classList.add("social-shop-thumb"),l.append(d),d.insertAdjacentHTML("beforeend",function(t){let o="";const e=[C,$,j];for(let s=0;s<3;s++)o+=`<a target="_blank" href="${t[s].url}"><img class="social-img" src='${e[s]}' alt='${t[s].name}'/>\n\t\t`;return o}(a))}document.querySelector(".books-cards__list").addEventListener("click",(async function(t){q.innerHTML="";const o=t.target.closest(".category-books__item");if(!o)return;const e=o.dataset.id;try{const t=await(0,v.fetchBooksForID)(e);A.classList.toggle("is-hidden-book-backdrop"),H(t.data);const o=document.querySelector(".data-book__success"),s=document.querySelector(".button-js-storage");if(w.IS_USER_LOG){const t=new(0,L.User);(await t.getWishList(S.auth.currentUser.email)).includes(s.dataset.favoriteid)&&(s.textContent="remove from the shopping list",o.style.display="block"),s.addEventListener("click",(async()=>{const e=await t.getWishList(S.auth.currentUser.email);if("Add to shopping list"===s.textContent){if(e.includes(s.dataset.favoriteid))return;await t.addToWishList(s.dataset.favoriteid,S.auth.currentUser.email),s.textContent="remove from the shopping list",o.style.display="block"}else if("remove from the shopping list"===s.textContent){if(!e.includes(s.dataset.favoriteid))return;return await t.removeFromWishlist(s.dataset.favoriteid,S.auth.currentUser.email),s.textContent="Add to shopping list",void(o.style.display="none")}}))}else s.textContent="To but this book you must Sign In",s.addEventListener("click",w.openForm)}catch(t){y.Notify.failure(t.message)}}));const q=document.querySelector(".book-info");const A=document.querySelector("[data-book-modal-open]");document.querySelector(".book-modal");document.querySelector(".modal-close-book-btn").addEventListener("click",(function(){A.classList.add("is-hidden-book-backdrop")})),A.addEventListener("click",(t=>{t.target.closest(".book-modal")||A.classList.add("is-hidden-book-backdrop")})),n("jKsn4"),n("fI3YV");const x=document.querySelector(".scrollBtn");window.addEventListener("scroll",(function(){window.pageYOffset>0?x.classList.add("visible"):x.classList.remove("visible")})),x.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),n("gGJi9");
//# sourceMappingURL=index.aeff40e6.js.map
