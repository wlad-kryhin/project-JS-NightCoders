const API_KEY = 'f67bdd430ce819844e2a075541409928';
const BASE_URL = 'https://api.themoviedb.org/3/';

import genresListTpl from '../templates/genresList.hbs';
import releaseDateTpl from '../templates/releaseDateList';
import date from '../json/release-date.json';

const refs = {
  buttonOpenMenuEl: document.querySelector('[data-action="open-menu-filter"]'),
  filterListEl: document.querySelector('.filter-list'),
  filterListCloseEl: document.querySelector('.filter-list__button-close'),

  itemGenresEl: document.querySelector('.item-genres'),
  listGenresEl: document.querySelector('.list-genres'),
  genresCloseEl: document.querySelector('[data-action="close-button-genres"]'),
  genresLabelEl: document.querySelectorAll('.films-genres__label'),

  ItemDateList: document.querySelector('.item-date'),
  listDateEl: document.querySelector('.list-date'),
  dateCloseEl: document.querySelector('[data-action="date-button-close"]'),
};

// ==================== addEventListener ======================

refs.buttonOpenMenuEl.addEventListener('click', showMenuFilter);
refs.filterListCloseEl.addEventListener('click', onCloseMenuFilter);

refs.itemGenresEl.addEventListener('click', showMenuGenres);
refs.genresCloseEl.addEventListener('click', onCloseGenres);

refs.ItemDateList.addEventListener('click', showMenuReleaseDate);
refs.dateCloseEl.addEventListener('click', onCloseDate);

// ================= MenuFilter ===================

function showMenuFilter(e) {
  e.preventDefault();
  const target = e.target;

  onOpenMenuFilter();
}

// ==================== MenuGenres / MenuReleaseDate================

function showMenuGenres(e) {
  onOpenGenres();
  fetchGenres(e.target.genres).then(renderGenresList);
}

function showMenuReleaseDate(e) {
  onOpenDate();
  renderReleaseDateLis(date);
}

// ===================== API ==========================

function fetchGenres(genre) {
  return fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`).then(response => {
    return response.json();
  });
}

// ==================== render ===========================

function renderGenresList(genre) {
  refs.listGenresEl.insertAdjacentHTML('beforeend', genresListTpl(genre));
}

function renderReleaseDateLis(date) {
  refs.listDateEl.insertAdjacentHTML('beforeend', releaseDateTpl(date));
}

// =================== open / close============================

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

function resetList() {}
