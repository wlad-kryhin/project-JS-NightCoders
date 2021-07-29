import './sass/main.scss';
// import './js/modal.js';
import Spinner from './js/spinner'; // import Spinner(active , hidden)
import  LocaleStorageAPI from './js/localStorageAPI';
import './js/btn-scroll';
import './js/toggle';
import showModal from './js/modal.js'; // импорт fn открытие/закрытие модалки
import './js/modal-footer';
import FilmsApiService from './js//films-api.js';
import filmsTemp from './js/filmsRender';
import LoadMoreBtn from './js/components/load-more-btn';
const refs = {
  searchForm: document.querySelector('[data-index="search-form"]'),
  filmsContainer: document.querySelector('.film-list'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
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
  filmsApiService.resetPage();
  loadMoreBtn.show();
  loadMoreBtn.disable();
  clearFilmsContainer();
  onLoadMore();
  showModal(); // fn для модалки
}

// function onLoadMore() {
//   loadMoreBtn.disable();
//   filmsApiService.fetchFilms().then(appendFilmsMarkup).then(loadMoreBtn.enable());
// }

function onLoadMore() {
  loadMoreBtn.disable();
  setTimeout(() => {
    filmsApiService.fetchFilms().then(appendFilmsMarkup).then(loadMoreBtn.enable());
  }, 1500);
}

function appendFilmsMarkup(films) {
  refs.filmsContainer.insertAdjacentHTML('beforeend', filmsTemp(films));
}

function clearFilmsContainer() {
  refs.filmsContainer.innerHTML = '';
}

const refsHeader = {
  header: document.querySelector('[data-index="header"]'),
  homeBtn: document.querySelector('[data-index="home"]'),
  myLibraryBtn: document.querySelector('[data-index="mylibrary"]'),
};
function myLibraryPageChange() {
  refsHeader.header.classList.remove('header-background-home');
  refsHeader.header.classList.add('header-background-myLibrary');
}
refsHeader.myLibraryBtn.addEventListener('click', e => {
  e.preventDefault();
  myLibraryPageChange();
  refsHeader.myLibraryBtn.classList.add('current');
  refsHeader.homeBtn.classList.remove('current');
  refs.searchForm.innerHTML = `<button class="library-button active-btn">
                    WATCHED
                </button>
        
                <button class="library-button inactive-btn">
                    QUEUE
                </button>`;
  refs.filmsContainer.innerHTML = `НИЧЕГО НЕ НАЙДЕНО`;
});

const spinnerP = new Spinner();
// spinnerP.active()
const btnWatch = document.querySelector('[data-action="modalBtnAddWatched"]');
const localStoragePlagin = new LocaleStorageAPI()
btnWatch.addEventListener('click', (e) => {
  e.preventDefault()
  localStoragePlagin.saveValueWatched(e.target.id)
})
