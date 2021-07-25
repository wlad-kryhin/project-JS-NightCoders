import './sass/main.scss';
import FilmsApiService from './js//films-api.js';
import filmsTemp from './templates/cardsTemplate.hbs';

const refs = {
  searchForm: document.querySelector('[data-index="search-form"]'),
  filmsContainer: document.querySelector('.film-list'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const filmsApiService = new FilmsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function renderTrending() {
  filmsApiService.fetchTrendingFilms().then(appendFilmsMarkup);
}
renderTrending();

function onSearch(e) {
  e.preventDefault();
  filmsApiService.query = e.currentTarget.query.value;
  filmsApiService.resetPage();
  filmsApiService.fetchFilms().then(appendFilmsMarkup);
}

function onLoadMore() {
  filmsApiService.fetchFilms().then(appendFilmsMarkup);
}

function appendFilmsMarkup(films) {
  refs.filmsContainer.insertAdjacentHTML('beforeend', filmsTemp(films));
}

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '84867915c8b3aadc91d5efa8c22e1ab6';

// const RANDOM_MOVIE_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
// const listMovie = document.querySelector('.film-list')

// function getBestMovie(url) {
//     fetch(url).then(parse => parse.json()).then(data => {
//         console.log(data.results);
//         showCards(data.results)
//     })
// }

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
