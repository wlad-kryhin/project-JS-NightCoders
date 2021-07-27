import './sass/main.scss';
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


// import './js/modal.js';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '84867915c8b3aadc91d5efa8c22e1ab6';

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
