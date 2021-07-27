import './sass/main.scss';
// import './js/modal.js';
import showModal from './js/modal.js'; // импорт fn открытие/закрытие модалки
import './js/modal-footer';
import FilmsApiService from './js//films-api.js';
import filmsTemp from './templates/cardsTemplate.hbs';
import LoadMoreBtn from './js/components/load-more-btn';
const refs = {
  searchForm: document.querySelector('[data-index="search-form"]'),
  filmsContainer: document.querySelector('.film-list'),
  //   loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const filmsApiService = new FilmsApiService();

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '84867915c8b3aadc91d5efa8c22e1ab6';

refs.filmsContainer.addEventListener('click', showModal); // повесил с/с на ('.film-list') для проверки модалки
refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function renderTrending() {
  filmsApiService.fetchTrendingFilms().then(appendFilmsMarkup);
}
renderTrending();

function onSearch(e) {
  e.preventDefault();
  filmsApiService.query = e.currentTarget.query.value;
  if (filmsApiService.query === '') {
    return alert('Search result not successful. Enter the correct movie name and '); // тут нужен будет плагин нотификации
  }

  loadMoreBtn.show();
  loadMoreBtn.disable();
  clearFilmsContainer();
  onLoadMore();
  showModal(); // fn для модалки
}

function onLoadMore() {
  loadMoreBtn.disable();
  filmsApiService.fetchFilms().then(appendFilmsMarkup).then(loadMoreBtn.enable());
}

function appendFilmsMarkup(films) {
  refs.filmsContainer.insertAdjacentHTML('beforeend', filmsTemp(films));
}

function clearFilmsContainer() {
  refs.filmsContainer.innerHTML = '';
}

// Это пока оставлю, возможно будем рендерить так, т.к. нужно будет через
// id жанров получать жанры, и дату форматировать из YYYY-MM-DD to YYYY
//Hello

// function showCards(data) {
//     listMovie.innerHTML =''
//     data.forEach(movie => {
//         const { title, poster_path} = movie
//         const movieItem = document.createElement('li')
//         movieItem.className = 'film-item'
//         movieItem.innerHTML = `<a href="" class="film-link">
//          <img src="${poster_path}" alt="" class="film-img">
//          <p class="film-description"> ${title}
//          </p><p class="film-description film-gengers">project filmoteka<span class="film-raiting">8.1</span></p></a>`
//     });
//     listMovie.appendChild(movieItem)
// }
// getBestMovie(RANDOM_MOVIE_URL)
const refss = {
    header: document.querySelector('[data-index="header"]'),
    homeBtn: document.querySelector('[data-index="home"]'),
    myLibraryBtn: document.querySelector('[data-index="mylibrary"]')
};
//Function for change background image: Home
function homePageChange() {
    refss.header.classList.remove('header-background-myLibrary');
    refss.header.classList.add('header-background-home');
}
//Function for change background image: myLibrary
function myLibraryPageChange() {
    refss.header.classList.remove('header-background-home');
    refss.header.classList.add('header-background-myLibrary')
}
refss.myLibraryBtn.addEventListener('click', (e) => {
  e.preventDefault()
  myLibraryPageChange()
    refss.header.innerHTML =`<nav class="nav" data-index="navigation">
        <a href="./index.html" class="nav-logo logo-style">
        <svg class="nav-logo-icon">
            <use href="./images/sprite.svg#icon-logo"></use>
        </svg>
        <span class="logo-text">Filmoteka</span>
        </a>
        <a class="nav-btn" data-index="home">HOME</a>
        <a class="nav-btn current" data-index="mylibrary">MY LIBRARY</a>
        </nav>
         <form class="library-buttons">
                <button class="library-button active-btn">
                    WATCHED
                </button>
        
                <button class="library-button inactive-btn">
                    QUEUE
                </button>
            </form>`
})
refss.homeBtn.addEventListener('click', (e) => {
    e.preventDefault()
  homePageChange()
    refss.header.innerHTML =`<nav class="nav" data-index="navigation">
    <a href="./index.html" class="nav-logo logo-style">
      <svg class="nav-logo-icon">
        <use href="./images/sprite.svg#icon-logo"></use>
      </svg>
      <span class="logo-text">Filmoteka</span>
    </a>
    <a class="nav-btn current" data-index="home">HOME</a>
    <a class="nav-btn" data-index="mylibrary">MY LIBRARY</a>
  </nav>
  <form class="search-film" action="" data-index="search-form">
    <span class="form-input-wrapper">
      <input class="search-film-input" data-index="serchInfo" type="text" id="searchQuery" name="query" autocomplete="off"
        placeholder="Поиск фильмов" />
      <button class="submit-button" type="submit" id="submit">
        <svg class="search-icon">
          <use href="./images/sprite.svg#icon-search"></use>
        </svg>
      </button>
    </span>
  </form>`
})
