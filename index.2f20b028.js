!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in o){var n=o[t];delete o[t];var a={id:t,exports:{}};return e[t]=a,n.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,n){o[t]=n},n.parcelRequired7c6=a),a.register("jaTwk",(function(t,n){t.exports=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("lPaFu")})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.2f20b028.js","lPaFu":"Books.34b8761e.png","1Vwc0":"shopping.711cfe0e.js"}')),a("aVhnN"),a("i8Q71");var c=a("bBhLo"),i=(a("bBhLo"),a("6JpON"));c=a("bBhLo");var s=document.querySelector(".all-categories-container"),l=document.querySelector(".container-books"),r=document.querySelector(".content");function d(){return s.classList.add("lock-click-categories"),l.innerHTML="",r.classList.add("content-loader"),(0,c.fetchToAllBooks)().then((function(t){return t.data})).then((function(t){r.classList.remove("content-loader"),l.innerHTML=' <h1 class="title-container-topBooks"><span class="title_theme">Best sellers</span> <span class="title_blue"> books </span></h1>\n  <ul class="content_list_categories">'.concat(t.map((function(t){return'<li class="content_categoryItem '.concat(t.list_name,'">\n      <h3 class="content_category">').concat(t.list_name,'</h3>\n                <ul class="content_list_topBooks">').concat(t.books.map((function(t,n){return'<li class="'.concat(1===n||2===n?"content_book tablet-book":3===n||4===n?"content_book mobile-book":"content_book",'">\n                          <a data-id=').concat(t._id,' href="').concat(t.book_image,'"  class="content-book-link" >\n                        \n                          <img class="content__image" src="').concat(t.book_image,'" alt="').concat(t.title,'" loading="lazy" />\n                         \n                          <span class="content_textname" id="content_book_name">').concat(t.title,'</span>\n                          <span class="content_textauthor" id="content_book_name">').concat(t.author,"</span>\n                           </a>\n                          </li>")})).join(""),'</ul>\n          \n                \n                <button class="content_btnSeeMore"\n                        type="button"\n                        name="').concat(t.list_name,'" \n                        action="submit">SEE MORE                        \n                </button>\n                <span class="content_loaderBTN" style="display: none"></span>\n                                                           \n          </li>')})).join(""),"</ul>"),s.classList.remove("lock-click-categories")}))}function u(n){n.nextElementSibling.style.display="block",(0,c.fetchBooksByCategory)(n.name).then((function(t){return n.classList.remove("loader"),t.data})).then((function(e){n.nextElementSibling.style.display="none",function(n,e){var o=(a=n,c=e,c.map((function(n,e){return e+1===c.length&&(function(t){t.classList.add("hidden")}(a),null!=a.parentNode.nextSibling&&a.parentNode.nextElementSibling.firstElementChild.classList.add("contend_categoryMove"),t(i).Notify.info("this is all. Check out other category books")),'<li class="content_book">\n                          <a data-id='.concat(n._id,' href="').concat(n.book_image,'" class="content-book-link" >\n                          <img class="content__image" src="').concat(n.book_image,'" alt="').concat(n.title,'" loading="lazy" />\n                          \n                          <span class="content_textname" id="content_book_name">').concat(n.title,'</span>\n                          <span class="content_textauthor" id="content_book_author">').concat(n.author,"</span>\n                          </a>\n                </li>")})).join(""));var a,c;n.previousElementSibling.innerHTML="",n.previousElementSibling.insertAdjacentHTML("beforeend",o)}(n,e),n.innerHTML="SEE MORE"})).catch()}l.innerHTML='<div class="content-error"> \n              <img \n              src="'.concat(a("jaTwk"),'"\n              alt="error"\n              class="content_imgError"/>\n         </div>'),d(),document.querySelector(".container-books").addEventListener("click",(function(t){if(t.preventDefault(),"button"!==t.target.type)return;t.target.innerHTML="",t.target.style.border="none",u(t.target)})),t(i).Notify.init({width:"480px",position:"right-bottom",distance:"10px",opacity:1,fontSize:"20px",clickToClose:!0,timeout:3e3,background:"#4f2ee8"});var m,b={container:document.querySelector(".all-categories-box"),title:document.querySelector(".all-categoris-title"),element:document.querySelector(".all-categoris-element"),booksContainer:document.querySelector(".container-books"),categoriesList:document.querySelector(".all-categories-container")},g=document.querySelector(".container-books");(0,c.fetchCategoriesList)().then((function(t){var n=t.data,e=n.map((function(t){return'<li class="all-categoris-list">\n      <a class="all-categoris-element" href="" data-name="'.concat(t.list_name,'"\n        >').concat(t.list_name,"</a\n      >\n    </li>\n      ")})).join("");b.container.insertAdjacentHTML("beforeend","".concat(e))})).catch((function(t){console.error("Error:",t)})),b.title.classList.add("current"),b.container.addEventListener("click",(function(){event.preventDefault();var t=event.target;if(!t.classList.contains("all-categoris-element")&&!t.classList.contains("all-categoris-title"))return;var n=t.dataset.name;e=t,document.querySelectorAll(".all-categoris-list a").forEach((function(t){t.classList.contains("current")&&(m=t)})),void(e!==m&&(e.classList.add("current"),m.classList.remove("current"))),"All categories"===n?d().then((function(t){window.innerWidth<1439&&document.querySelector(".title-container-topBooks").scrollIntoView({block:"start",behavior:"smooth"})})):(b.booksContainer.innerHTML="",b.categoriesList.classList.add("lock-click-categories"),b.booksContainer.classList.add("content-loader"),o=n,(0,c.fetchBooksByCategory)(o).then((function(t){var n,e,a,c,i,s,l;b.booksContainer.classList.remove("content-loader"),n=t.data,e=o.split(" "),a=e.slice(0,-1).join(" "),c=e[e.length-1],i='<h1 class="title-container-topBooks">\n    <span class="title_theme">'.concat(a,'</span>\n    <span class="title_blue">').concat(c,"</span></h1>"),s=n.map((function(t,n){return'<li class="content_book" data-id='.concat(t._id,">\n            <a data-id=").concat(t._id,' href="').concat(t.book_image,'" class="content-book-link" >\n         <img class="content__image" src="').concat(t.book_image,'" alt="').concat(t.title,'" loading="lazy" />\n         \n           <span class="content_textname" id="content_book_name">').concat(t.title,'</span>\n           <span class="content_textauthor" id="content_book_name">').concat(t.author,"</span>\n            </a>\n          </li>")})).join(""),l="".concat(i,'<ul class="content_list_topBooks">').concat(s,"</ul>"),g.insertAdjacentHTML("beforeend",l),b.categoriesList.classList.remove("lock-click-categories")})).then((function(t){window.innerWidth<1439&&document.querySelector(".title-container-topBooks").scrollIntoView({block:"start",behavior:"smooth"})})).catch((function(t){console.error("Error:",t)})));var e;var o})),a("kX0OW"),a("1Cek3"),a("9cmFR"),a("gM4a7"),a("5N2Ml"),a("iIkkM"),a("7ZZgP"),a("7hKzD")}();
//# sourceMappingURL=index.2f20b028.js.map