const API_KEY = 'f67bdd430ce819844e2a075541409928';
const BASE_URL = 'https://api.themoviedb.org/3/';

import LocaleStorageAPI from './localStorageAPI';
import TrailerApp from './components/trailer-modal';
import checkButtonsStatusAdd from './components/buttonsWatchedStatus';
import checkButtonsStatusQueue from './components/buttonsQueueStatus';
import Spinner from './spinner';
const localeStorageAPI = new LocaleStorageAPI();
const trailerApp = new TrailerApp();
const spinner = new Spinner()

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

  btnYoutube: document.querySelector('[data-action="youtube-js"]'),
  trailerModal: document.querySelector('[data-action="js-trailer"]'),
  trailerModalContainer: document.querySelector('[data-action="js-trailer-container"]'),
  trailerModalTag: document.querySelector('.video-trailer'),
  sliderBtn: document.querySelector('.btn-youtube-slider'),
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
  spinner.active()
  if (event.target.nodeName === 'IMG') {
    renderModal(event.target.id);
    setTimeout(() => {
    onOpenModal()
    spinner.hidden()
    }, 300);
    
  }
  spinner.hidden()
  }
  // /* Миша */
  // renderModal(event.target.id);
  
  // // renderMovieCard(event.target.id);
  // setTimeout(() => {
  //   onOpenModal()
  //   spinner.hidden()
  // }, 300);


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
  refs.modalEl.classList.add('is-hidden');
  refs.bodyEl.classList.remove('hidden');
  refs.btnYoutube.removeEventListener('click', openTrailerBtn);
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

  let poster = '';
  if (movie.poster_path === null) {
    poster =
      'https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-romantic-blue-film-phase-movie-poster-background-image_136505.jpg';
  } else {
    poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  }
  refs.movieCard.src = `${poster}`;
  refs.movieVoteAvarage.innerHTML = movie.vote_average;
  refs.movieVoteCount.innerHTML = movie.vote_count;
  refs.moviePopularity.innerHTML = movie.popularity;
  refs.movieListTitle.innerHTML = movie.original_title;

  let genres = '';
  if (movie.genres.length === 0) {
    genres = '...';
  } else {
    genres = movie.genres[0].name;
  }
  refs.movieGenre.innerHTML = genres;
  refs.movieAbout.innerHTML = movie.overview;
  refs.modalBtnAddWatched.id = movie.id;
  refs.movieBtnQueue.id = movie.id;
  refs.btnYoutube.id = movie.id;
  
  refs.btnYoutube.addEventListener('click', openTrailerBtn)

  checkButtonsStatusAdd();
  checkButtonsStatusQueue();
}
refs.btnYoutube.addEventListener('click', openTrailerBtn);

function showTrailer(id) {
  const url = `
https://api.themoviedb.org/3/movie/${id}/videos?api_key=84867915c8b3aadc91d5efa8c22e1ab6&language=en-US`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      refs.trailerModalTag.src = `https://www.youtube.com/embed/${data.results[0].key}`;
      refs.trailerModal.classList.remove('is-hidden');
      trailerApp.setCloser();
    });
}

function openTrailerBtn(e) {
  e.preventDefault();
  onCloseModal();
    refs.bodyEl.classList.add('hidden');
  showTrailer(e.currentTarget.id);
}

export default showModal;
