// const refs = {
//     header: document.querySelector('[data-index="header"]'),
//     homeBtn: document.querySelector('[data-index="home"]'),
//     myLibraryBtn: document.querySelector('[data-index="mylibrary"]'),
// };
// //Function for change background image: Home
// function homePageChange() {
//     refs.header.classList.remove('header-background-myLibrary');
//     refs.header.classList.add('header-background-home');
// }
// //Function for change background image: myLibrary
// function myLibraryPageChange() {
//     refs.header.classList.remove('header-background-home');
//     refs.header.classList.add('header-background-myLibrary')
// }
// refs.myLibraryBtn.addEventListener('click', () => {
//     myLibraryPageChange()
//     refs.header.innerHTML =`<nav class="nav" data-index="navigation">
//         <a href="./index.html" class="nav-logo logo-style">
//         <svg class="nav-logo-icon">
//             <use href="./images/sprite.svg#icon-logo"></use>
//         </svg>
//         <span class="logo-text">Filmoteka</span>
//         </a>
//         <button class="nav-btn" data-index="home">HOME</button>
//         <button class="nav-btn current" data-index="mylibrary">MY LIBRARY</button>
//         </nav>
//          <form class="library-buttons">
//                 <button class="library-button active-btn">
//                     WATCHED
//                 </button>
        
//                 <button class="library-button inactive-btn">
//                     QUEUE
//                 </button>
//             </form>`
// })
// refs.homeBtn.addEventListener('click', () => {
//    homePageChange()
//     refs.header.innerHTML =`  <nav class="nav" data-index="navigation">
//     <a href="./index.html" class="nav-logo logo-style">
//       <svg class="nav-logo-icon">
//         <use href="./images/sprite.svg#icon-logo"></use>
//       </svg>
//       <span class="logo-text">Filmoteka</span>
//     </a>
//     <button class="nav-btn current" data-index="home">HOME</button>
//     <button class="nav-btn" data-index="mylibrary">MY LIBRARY</button>
//   </nav>
//   <form class="search-film" action="" data-index="search-form">
//     <span class="form-input-wrapper">
//       <input class="search-film-input" data-index="serchInfo" type="text" id="searchQuery" name="query" autocomplete="off"
//         placeholder="Поиск фильмов" />
//       <button class="submit-button" type="submit" id="submit">
//         <svg class="search-icon">
//           <use href="./images/sprite.svg#icon-search"></use>
//         </svg>
//       </button>
//     </span>
//   </form>`
// })