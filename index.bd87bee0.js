function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a.register("ekb7P",(function(e,t){e.exports=new URL(a("kyEFX").resolve("5lkeA"),import.meta.url).toString()})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.bd87bee0.js","5lkeA":"Books.34b8761e.png","4jukI":"shopping.fe636b9f.js"}')),a("hjE7W"),a("bUb57");var s=a("1Xv76"),i=(a("1Xv76"),a("7Y9D8"));s=a("1Xv76");const l=document.querySelector(".all-categories-container"),c=document.querySelector(".container-books"),r=document.querySelector(".content");function d(){return l.classList.add("lock-click-categories"),c.innerHTML="",r.classList.add("content-loader"),(0,s.fetchToAllBooks)().then((e=>e.data)).then((e=>{r.classList.remove("content-loader"),c.innerHTML=` <h1 class="title-container-topBooks"><span class="title_theme">Best sellers</span> <span class="title_blue"> books </span></h1>\n  <ul class="content_list_categories">${e.map((e=>`<li class="content_categoryItem ${e.list_name}">\n      <h3 class="content_category">${e.list_name}</h3>\n                <ul class="content_list_topBooks">${e.books.map(((e,t)=>`<li class="${1===t||2===t?"content_book tablet-book":3===t||4===t?"content_book mobile-book":"content_book"}">\n                          <a data-id=${e._id} href="${e.book_image}"  class="content-book-link" >\n                        \n                          <img class="content__image" src="${e.book_image}" alt="${e.title}" loading="lazy" />\n                         \n                          <span class="content_textname" id="content_book_name">${e.title}</span>\n                          <span class="content_textauthor" id="content_book_name">${e.author}</span>\n                           </a>\n                          </li>`)).join("")}</ul>\n          \n                \n                <button class="content_btnSeeMore"\n                        type="button"\n                        name="${e.list_name}" \n                        action="submit">SEE MORE                        \n                </button>\n                <span class="content_loaderBTN" style="display: none"></span>\n                                                           \n          </li>`)).join("")}</ul>`,l.classList.remove("lock-click-categories")}))}function u(t){t.nextElementSibling.style.display="block",(0,s.fetchBooksByCategory)(t.name).then((e=>(t.classList.remove("loader"),e.data))).then((n=>{t.nextElementSibling.style.display="none",function(t,n){let o=(a=t,s=n,s.map(((t,n)=>(n+1===s.length&&(function(e){e.classList.add("hidden")}(a),null!=a.parentNode.nextSibling&&a.parentNode.nextElementSibling.firstElementChild.classList.add("contend_categoryMove"),e(i).Notify.info("this is all. Check out other category books")),`<li class="content_book">\n                          <a data-id=${t._id} href="${t.book_image}" class="content-book-link" >\n                          <img class="content__image" src="${t.book_image}" alt="${t.title}" loading="lazy" />\n                          \n                          <span class="content_textname" id="content_book_name">${t.title}</span>\n                          <span class="content_textauthor" id="content_book_author">${t.author}</span>\n                          </a>\n                </li>`))).join(""));var a,s;t.previousElementSibling.innerHTML="",t.previousElementSibling.insertAdjacentHTML("beforeend",o)}(t,n),t.innerHTML="SEE MORE"})).catch()}c.innerHTML=`<div class="content-error"> \n              <img \n              src="${a("ekb7P")}"\n              alt="error"\n              class="content_imgError"/>\n         </div>`,d();document.querySelector(".container-books").addEventListener("click",(function(e){if(e.preventDefault(),"button"!==e.target.type)return;e.target.innerHTML="",e.target.style.border="none",u(e.target)})),e(i).Notify.init({width:"480px",position:"right-bottom",distance:"10px",opacity:1,fontSize:"20px",clickToClose:!0,timeout:3e3,background:"#4f2ee8"});const m={container:document.querySelector(".all-categories-box"),title:document.querySelector(".all-categoris-title"),element:document.querySelector(".all-categoris-element"),booksContainer:document.querySelector(".container-books"),categoriesList:document.querySelector(".all-categories-container")},b=document.querySelector(".container-books");let k;(0,s.fetchCategoriesList)().then((e=>{const t=e.data,n=t.map((e=>`<li class="all-categoris-list">\n      <a class="all-categoris-element" href="" data-name="${e.list_name}"\n        >${e.list_name}</a\n      >\n    </li>\n      `)).join("");m.container.insertAdjacentHTML("beforeend",`${n}`)})).catch((e=>{console.error("Error:",e)})),m.title.classList.add("current"),m.container.addEventListener("click",(function(){event.preventDefault();const e=event.target;if(!e.classList.contains("all-categoris-element")&&!e.classList.contains("all-categoris-title"))return;const t=e.dataset.name;n=e,document.querySelectorAll(".all-categoris-list a").forEach((e=>{e.classList.contains("current")&&(k=e)})),void(n!==k&&(n.classList.add("current"),k.classList.remove("current"))),"All categories"===t?d().then((e=>{if(window.innerWidth<1439){document.querySelector(".title-container-topBooks").scrollIntoView({block:"start",behavior:"smooth"})}})):(m.booksContainer.innerHTML="",m.categoriesList.classList.add("lock-click-categories"),m.booksContainer.classList.add("content-loader"),o=t,(0,s.fetchBooksByCategory)(o).then((e=>{m.booksContainer.classList.remove("content-loader"),function(e,t){const n=t.split(" "),o=n.slice(0,-1).join(" "),a=n[n.length-1],s=`<h1 class="title-container-topBooks">\n    <span class="title_theme">${o}</span>\n    <span class="title_blue">${a}</span></h1>`,i=e.map(((e,t)=>`<li class="content_book" data-id=${e._id}>\n            <a data-id=${e._id} href="${e.book_image}" class="content-book-link" >\n         <img class="content__image" src="${e.book_image}" alt="${e.title}" loading="lazy" />\n         \n           <span class="content_textname" id="content_book_name">${e.title}</span>\n           <span class="content_textauthor" id="content_book_name">${e.author}</span>\n            </a>\n          </li>`)).join(""),l=`${s}<ul class="content_list_topBooks">${i}</ul>`;b.insertAdjacentHTML("beforeend",l)}(e.data,o),m.categoriesList.classList.remove("lock-click-categories")})).then((e=>{window.innerWidth<1439&&document.querySelector(".title-container-topBooks").scrollIntoView({block:"start",behavior:"smooth"})})).catch((e=>{console.error("Error:",e)})));var n;var o})),a("lTi1U"),a("7Jfzs"),a("enwL7"),a("kJ3qw"),a("aRQd1"),a("l6875"),a("2qRC4"),a("epHO8");
//# sourceMappingURL=index.bd87bee0.js.map
