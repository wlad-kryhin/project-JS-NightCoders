import './sass/main.scss';
import './js/menu-filter.js';
import Spinner from './js/spinner'; // import Spinner(active , hidden)
import LocaleStorageAPI from './js/localStorageAPI';
import './js/clock';
import './js/btn-scroll';
import './js/toggle';
import './js/modal.js';
import LibraryBackgroundCheck from './js/components/bgLogic';
import './js/components/trailer-modal';
import checkButtonsStatusAdd from './js/components/buttonsWatchedStatus';
import checkButtonsStatusQueue from './js/components/buttonsQueueStatus';
import showModal from './js/modal.js';
import './js/modal-footer';
import FilmsApiService from './js//films-api.js';
import filmsTemp from './js/filmsRender';
import LoadMoreBtn from './js/components/load-more-btn';
import './js/library-background';
import renderFilmsLibrary from './js/myLibraryCards';
import './js/slider';
import Swal from 'sweetalert2';
import renderTrendy from './js/slider';
import { makeCardsAnimated } from './js/responsive-card';
// showMenuFilter();
import { currentThemeWebSite } from './js/toggle';
const refs = {
  slider: document.querySelector('.slider-wrapper'),
  searchForm: document.querySelector('[data-index="search-form"]'),
  filmsContainer: document.querySelector('.film-list'),
  filmCard: document.querySelector('.film-item'),
  inputForm: document.querySelector('[data-index="serchInfo"]'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};
const spinner = new Spinner();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const filmsApiService = new FilmsApiService();
const libraryBackgroundCheck = new LibraryBackgroundCheck();

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '84867915c8b3aadc91d5efa8c22e1ab6';

refs.filmsContainer.addEventListener('click', showModal); // повесил с/с на ('.film-list') для проверки модалки
refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function renderTrending() {
  filmsApiService.fetchTrendingFilms().then(appendFilmsMarkup);
}
spinner.active();
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    renderTrending();
    renderTrendy();
    spinner.hidden();
    loadMoreBtn.show();
  }, 500);
});
// function onSearch(e) {
//   e.preventDefault();
//   filmsApiService.query = e.currentTarget.query.value;
//   if (filmsApiService.query === '') {
//     return alert('Search result not successful. Enter the correct movie name and '); // тут нужен будет плагин нотификации
//   }
//   filmsApiService.resetPage();
//   loadMoreBtn.show();
//   loadMoreBtn.disable();
//   clearFilmsContainer();
//   onLoadMore();
//   showModal(); // fn для модалки
// }

function onSearch(e) {
  e.preventDefault();
  spinner.active();
  filmsApiService.query = e.currentTarget.query.value;
  if (filmsApiService.query === '' || filmsApiService.query === ' ') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please, enter something!',
      footer: '<a href="">Why do I have this issue?</a>',
    });
    renderTrending();
    spinner.hidden();
    loadMoreBtn.disable();
  }
  filmsApiService.resetPage();
  clearFilmsContainer();
  loadMoreBtn.disable();
  onLoadMore();
}

// function onLoadMore() {
//   loadMoreBtn.disable();
//   filmsApiService.fetchFilms().then(appendFilmsMarkup).then(loadMoreBtn.enable());
// }

function onLoadMore() {
  loadMoreBtn.disable();
  spinner.active();
  if (filmsApiService.query === '' || filmsApiService.query.trim() === '') {
    loadMoreBtn.disable();
    renderTrending();
    spinner.hidden();
  } else {
    setTimeout(() => {
      filmsApiService
        .fetchFilms()
        .then(films => {
          if (films.length === 0) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="">Why do I have this issue?</a>',
            });
            renderTrending();
            filmsApiService.query = '';
            spinner.hidden();
          }
          appendFilmsMarkup(films);
          spinner.hidden();
        })
        .catch(error => {
          console.log(error);
        });
    }, 1502);
  }
  loadMoreBtn.enable();
}

function appendFilmsMarkup(films) {
  refs.filmsContainer.insertAdjacentHTML('beforeend', filmsTemp(films));
  makeCardsAnimated();
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
  spinner.active();
  e.preventDefault();
  refs.loadMoreBtn.style.display = 'none';
  myLibraryPageChange();
  currentThemeWebSite();
  refs.searchForm.classList.add('direction-row');
  refsHeader.myLibraryBtn.classList.add('current');
  libraryBackgroundCheck.checkWateched();
  refsHeader.homeBtn.classList.remove('current');
  refs.searchForm.innerHTML = `<button class="library-button active-btn" data-action="show-watched">
                    WATCHED
                </button>
                <button class="library-button" data-action="show-queue">
                    QUEUE
                </button>`;
  refs.filmsContainer.innerHTML = '';
  refs.slider.style.display = 'none';
  renderFilmsLibrary(localeStorageAPI.getValueWatched());
  const refsShow = {
    showWatchedBtn: document.querySelector('[data-action="show-watched"]'),
    showQueuedBtn: document.querySelector('[data-action="show-queue"]'),
  };
  spinner.hidden();
  refsShow.showWatchedBtn.addEventListener('click', e => {
    spinner.hidden();
    e.preventDefault();
    clearFilmsContainer();
    renderFilmsLibrary(localeStorageAPI.getValueWatched());
    e.currentTarget.classList.add('active-btn');
    refsShow.showQueuedBtn.classList.remove('active-btn');
    if (refsShow.showWatchedBtn && refsShow.showWatchedBtn.classList.contains('active-btn')) {
      btnWatch.addEventListener('click', reRenderWatched);
      const btnQueue = document.querySelector('[data-action="movieBtnQueue"]');
      btnQueue.removeEventListener('click', reRenderQueue);
    }
    libraryBackgroundCheck.checkWateched();
  });

  refsShow.showQueuedBtn.addEventListener('click', e => {
    spinner.hidden();
    e.preventDefault();
    clearFilmsContainer();
    renderFilmsLibrary(localeStorageAPI.getValueQueue());
    e.currentTarget.classList.add('active-btn');
    refsShow.showWatchedBtn.classList.remove('active-btn');
    btnWatch.removeEventListener('click', reRenderWatched);
    if (refsShow.showQueuedBtn && refsShow.showQueuedBtn.classList.contains('active-btn')) {
      btnQueue.addEventListener('click', reRenderQueue);
    }
    libraryBackgroundCheck.checkQueue();
  });
  function reRenderWatched() {
    clearFilmsContainer();
    libraryBackgroundCheck.checkWateched();
    renderFilmsLibrary(localeStorageAPI.getValueWatched());
  }
  function reRenderQueue() {
    clearFilmsContainer();
    libraryBackgroundCheck.checkQueue();
    renderFilmsLibrary(localeStorageAPI.getValueQueue());
  }

  if (refsShow.showWatchedBtn && refsShow.showWatchedBtn.classList.contains('active-btn')) {
    btnWatch.addEventListener('click', reRenderWatched);
  }
});

const btnWatch = document.querySelector('[data-action="modalBtnAddWatched"]');
const btnQueue = document.querySelector('[data-action="movieBtnQueue"]');
const localeStorageAPI = new LocaleStorageAPI();
btnWatch.addEventListener('click', e => {
  e.preventDefault();
  localeStorageAPI.saveValueWatched(e.target.id);
  checkButtonsStatusAdd();
});
btnQueue.addEventListener('click', e => {
  e.preventDefault();
  localeStorageAPI.saveValueQueue(e.target.id);
  checkButtonsStatusQueue();
});
