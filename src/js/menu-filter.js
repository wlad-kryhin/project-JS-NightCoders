// const API_KEY = 'f67bdd430ce819844e2a075541409928';
// const BASE_URL = 'https://api.themoviedb.org/3/';

const refs = {
  buttonOpenMenuEl: document.querySelector('[data-action="open-menu-filter"]'),
  filterListEl: document.querySelector('.filter-list'),
  filterListCloseEl: document.querySelector('.filter-list__button-close'),
  itemGenresEl: document.querySelector('.item-genres'),
  listGenresEl: document.querySelector('.list-genres'),
  genresCloseEl: document.querySelector('[data-action="genres-button-close"]'),
  dateItemList: document.querySelector('.list-date'),
  dateCloseEl: document.querySelector('[data-action="date-button-close"]'),
};

refs.buttonOpenMenuEl.addEventListener('click', showMenuFilter);
refs.filterListCloseEl.addEventListener('click', onCloseMenuFilter);

refs.itemGenresEl.addEventListener('click', onOpenGenres);
refs.genresCloseEl.addEventListener('click', onCloseGenres);

refs.dateItemList.addEventListener('click', onOpenDate);
refs.dateCloseEl.addEventListener('click', onCloseDate);

function showMenuFilter(e) {
  e.preventDefault();

  onOpenMenuFilter();
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

// function onOpenDate() {
//     refs.dateItemList.classList.add('is-hidden');
//   }

//   function onCloseDate() {
//     refs.listGenresEl.classList.remove('is-hidden');
//   }

export default showMenuFilter;
