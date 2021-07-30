const API_KEY = 'f67bdd430ce819844e2a075541409928';
const BASE_URL = 'https://api.themoviedb.org/3/';

import movieCardTpl from '../templates/movieCard.hbs';

const refs = {
  modalEl: document.querySelector('#modal__win'),
  closeBtnEl: document.querySelector('button[data-action="close-modal"]'),
  bodyEl: document.querySelector('body'),

  modalContentEl: document.querySelector('.js-modal__content'),
  movieCardEl: document.querySelector('.js-movie-card'),

  /* Миша */
  movieTitle: document.querySelector('[data-action="modal_movie_title"]'),
  movieCard: document.querySelector('.movie-card__image'),
  movieVoteAvarage: document.querySelector('[data-action="vote_average"]'),
  movieVoteCount: document.querySelector('[data-action="vote_count"]'),
  moviePopularity: document.querySelector('[data-action="popularity"]'),
  movieListTitle: document.querySelector('[data-action="original-title"]'),
  movieGenre: document.querySelector('[data-action="genre"]'),
  movieAbout: document.querySelector('.movie__description'),
  modalBtnAddWatched: document.querySelector('[data-action="modalBtnAddWatched"]'),
  movieBtnQueue: document.querySelector('[data-action="movieBtnQueue"]'),
};

refs.closeBtnEl.addEventListener('click', onCloseModal);
document.addEventListener('click', onClickInNotModal);

/* -------------render/clear------------- */

// async function renderMovieCard(id) {
//   const resonse = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
//   const movie = await resonse.json();
//   const marcupMovieCard = movieCardTpl(movie);
//   refs.modalContentEl.insertAdjacentHTML('beforeend', marcupMovieCard);
// }

/* -----------show---------------- */

function showModal(event) {
  event.preventDefault();
  /* Миша */
  renderModal(event.target.id);
  // renderMovieCard(event.target.id);
  setTimeout(() => onOpenModal(), 300);
}

/* ----------------open/close---------------- */

function onOpenModal() {
  refs.modalEl.classList.remove('is-hidden');
  refs.bodyEl.classList.add('hidden');
  window.addEventListener('keydown', onClickEscape);
}

function onClickEscape(event) {
  if (event.code === 'Escape') {
    refs.modalEl.classList.add('is-hidden');
    window.removeEventListener('keydown', onClickEscape);
    onCloseModal();
  }
}

function onCloseModal() {
  //  refs.modalContentEl.innerHTML = '';
  refs.modalEl.classList.add('is-hidden');
  refs.bodyEl.classList.remove('hidden');
  refs.modalBtnAddWatched.classList.replace('active-btn', 'transparent-btn');
  refs.modalBtnAddWatched.textContent = 'Add to watched';
  refs.movieBtnQueue.classList.replace('active-btn', 'transparent-btn');
  refs.movieBtnQueue.textContent = 'Add to queue';
}

function onClickInNotModal(event) {
  if (event.target === refs.modalEl) {
    onCloseModal();
  }
}

/* Миша */

async function renderModal(id) {
  const resonse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=6acc6746be8af475302214b8237b9c48&language=en-US`,
  );
  const movie = await resonse.json();
  refs.movieTitle.innerHTML = movie.original_title;
  refs.movieCard.src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  refs.movieVoteAvarage.innerHTML = movie.vote_average;
  refs.movieVoteCount.innerHTML = movie.vote_count;
  refs.moviePopularity.innerHTML = movie.popularity;
  refs.movieListTitle.innerHTML = movie.original_title;
  refs.movieGenre.innerHTML = movie.genres[0].name;
  refs.movieAbout.innerHTML = movie.overview;
  refs.modalBtnAddWatched.id = movie.id;
  refs.movieBtnQueue.id = movie.id;
}

export default showModal;
