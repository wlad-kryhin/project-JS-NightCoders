import cardsTemplate from '../templates/cardsTemplate.hbs';
import Swal from 'sweetalert2';

// import genresListTpl from '../templates/genresList.hbs';
// import releaseDateTpl from '../templates/releaseDateList';
// import date from '../json/release-date.json';

const API_KEY = 'f67bdd430ce819844e2a075541409928';
const BASE_URL = 'https://api.themoviedb.org/3/';

const refs = {
  menuFilter: document.querySelector('#js-menu-filter'),
  btnLibrary: document.querySelector('[data-index="mylibrary"]'),

  filmsContainer: document.querySelector('.film-list'),
  buttonOpenMenuEl: document.querySelector('[data-action="open-menu-filter"]'),
  filterListEl: document.querySelector('.filter-list'),
  filterListCloseEl: document.querySelector('.filter-list__button-close'),

  itemGenresEl: document.querySelector('.item-genres'),
  listGenresEl: document.querySelector('.list-genres'),
  genresCloseEl: document.querySelector('[data-action="close-button-genres"]'),

  ItemDateList: document.querySelector('.item-date'),
  listDateEl: document.querySelector('.list-date'),
  dateCloseEl: document.querySelector('[data-action="date-button-close"]'),

  newFilmsCheckbox: document.getElementById('filter-input__new-films'),
  topFilmsCheckbox: document.getElementById('filter-input__top-films'),
  filmsGenresCheckbox: document.getElementById('filter-input__films-genres'),
  releaseDateCheckbox: document.getElementById('filter-input__release-date'),

  filterButton: document.querySelector('#filter-button'),
};

// ==================== addEventListener ======================

refs.btnLibrary.addEventListener('click', hiddenMenuFilter);

refs.buttonOpenMenuEl.addEventListener('click', onOpenMenuFilter);
refs.filterListCloseEl.addEventListener('click', onCloseMenuFilter);

// refs.itemGenresEl.addEventListener('click', showMenuGenres);
refs.genresCloseEl.addEventListener('click', onCloseGenres);

// refs.ItemDateList.addEventListener('click', showMenuReleaseDate);
refs.dateCloseEl.addEventListener('click', onCloseDate);

refs.newFilmsCheckbox.addEventListener('change', onInputNewFilms);
refs.topFilmsCheckbox.addEventListener('change', onInputTopFilms);
refs.filmsGenresCheckbox.addEventListener('change', onInputfilmsGenres);
refs.releaseDateCheckbox.addEventListener('change', onInputReleaseDate);

refs.filterButton.addEventListener('click', onFilterSearch);

// =================== input menu-filter ==================

function onInputNewFilms() {
  if (refs.newFilmsCheckbox.checked) {
    refs.topFilmsCheckbox.disabled = true;
    refs.filmsGenresCheckbox.disabled = true;
    refs.releaseDateCheckbox.disabled = true;
    // console.log('вкл');
  } else {
    refs.topFilmsCheckbox.disabled = false;
    refs.filmsGenresCheckbox.disabled = false;
    refs.releaseDateCheckbox.disabled = false;
    // console.log('выкл');
  }
  return;
}

function onInputTopFilms() {
  if (refs.topFilmsCheckbox.checked) {
    refs.newFilmsCheckbox.disabled = true;
    refs.filmsGenresCheckbox.disabled = true;
    refs.releaseDateCheckbox.disabled = true;
  } else {
    refs.newFilmsCheckbox.disabled = false;
    refs.filmsGenresCheckbox.disabled = false;
    refs.releaseDateCheckbox.disabled = false;
  }
  return;
}

function onInputfilmsGenres() {
  if (refs.filmsGenresCheckbox.checked) {
    refs.newFilmsCheckbox.disabled = true;
    refs.topFilmsCheckbox.disabled = true;
    refs.releaseDateCheckbox.disabled = true;
  } else {
    refs.newFilmsCheckbox.disabled = false;
    refs.topFilmsCheckbox.disabled = false;
    refs.releaseDateCheckbox.disabled = false;
  }
  return;
}

function onInputReleaseDate() {
  if (refs.releaseDateCheckbox.checked) {
    refs.newFilmsCheckbox.disabled = true;
    refs.topFilmsCheckbox.disabled = true;
    refs.filmsGenresCheckbox.disabled = true;
  } else {
    refs.newFilmsCheckbox.disabled = false;
    refs.topFilmsCheckbox.disabled = false;
    refs.filmsGenresCheckbox.disabled = false;
  }
}

// ===================== onFilterSearch ========================

function onFilterSearch(e) {
  e.preventDefault();
  clearfilmsContainer();
  if (refs.newFilmsCheckbox.checked) {
    showNewFilms(e);
  } else if (refs.topFilmsCheckbox.checked) {
    showPopularity(e);
  } else if (refs.filmsGenresCheckbox.checked) {
    return Swal.fire({
      icon: 'error',
      title: 'Sorry...',
      text: 'This category is under development',
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else if (refs.releaseDateCheckbox.checked) {
    return Swal.fire({
      icon: 'error',
      title: 'Sorry...',
      text: 'This category is under development',
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please, enter something!',
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
}

// ==================== show API results ================

function showMenuGenres(e) {
  // onOpenGenres();
  // fetchGenres(e.target.genres).then(renderGenresList); //true
  // fetchGenres(e.target.genres).then(logFetch); //true
}

function showMenuReleaseDate(e) {
  // onOpenDate();
  // renderReleaseDateLis(date);
  // fetchReleaseDate(e.target.release_dates).then(renderFetch);//true/false
}

function showPopularity(e) {
  fetchPopularity(e.target.popularity).then(renderFilmsMarkup); // true
}

function showNewFilms(e) {
  fetchNewFilms(e.target.primary_release_date).then(renderFilmsMarkup); //true
}

// function logFetch(films) {
//   console.log(films);
// }

// ===================== API data ==========================

function fetchPopularity() {
  return fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then(
    response => {
      return response.json().then(({ results }) => {
        return results;
      });
    },
  );
}

function fetchNewFilms() {
  return fetch(`
    ${BASE_URL}discover/movie?primary_release_date.gte=2021-08-01&api_key=${API_KEY}&primary_release_date.lte=2021-08-15&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`).then(
    response => {
      return response.json().then(({ results }) => {
        return results;
      });
    },
  );
}

function fetchGenres(genre) {
  return fetch(`
      ${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`).then(response => {
    return response.json().then(({ results }) => {
      return results;
    });
  });
}

function fetchReleaseDate() {
  return fetch(`${BASE_URL}movie/550/?api_key=${API_KEY}`).then(response => {
    return response.json();
  });
}

// ==================== render / clear ===========================

function clearfilmsContainer() {
  refs.filmsContainer.innerHTML = '';
}

function renderFilmsMarkup(films) {
  refs.filmsContainer.insertAdjacentHTML('beforeend', cardsTemplate(films));
}

function renderGenresList(genre) {
  refs.listGenresEl.insertAdjacentHTML('beforeend', genresListTpl(genre));
}

function renderReleaseDateLis(date) {
  refs.listDateEl.insertAdjacentHTML('beforeend', releaseDateTpl(date));
}

// =================== open / close menu-filter ============================

function hiddenMenuFilter() {
  refs.menuFilter.classList.add('is-hidden');
}

function onOpenMenuFilter() {
  refs.filterListEl.classList.remove('is-hidden');
  refs.buttonOpenMenuEl.classList.add('is-hidden');
}

function onCloseMenuFilter() {
  refs.filterListEl.classList.add('is-hidden');
  refs.buttonOpenMenuEl.classList.remove('is-hidden');
}

function onOpenGenres() {
  refs.listGenresEl.classList.remove('is-hidden');
}

function onCloseGenres(e) {
  e.stopPropagation();
  refs.listGenresEl.classList.add('is-hidden');
}

function onOpenDate() {
  refs.listDateEl.classList.remove('is-hidden');
}

function onCloseDate(e) {
  e.stopPropagation();
  refs.listDateEl.classList.add('is-hidden');
}
