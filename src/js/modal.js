const refs = {
  modalEl: document.querySelector('#modal__win'),
  closeBtnEl: document.querySelector('button[data-action="close-modal"]'),
  bodyEl: document.querySelector('body'),

  modalContentEl: document.querySelector('.js-modal__content'),
  movieCardEl: document.querySelector('.js-movie-card'),

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

function showModal(event) {
  event.preventDefault();
  renderModal(event.target.id);
  onOpenModal();
}

function onOpenModal() {
  refs.modalEl.classList.add('is-open');
  refs.bodyEl.classList.add('hidden');
  window.addEventListener('keydown', onClickEscape);
}

function onClickEscape(event) {
  if (event.code === 'Escape') {
    refs.modalEl.classList.remove('is-open');
    window.removeEventListener('keydown', onClickEscape);
    onCloseModal();
  }
}

function onCloseModal() {
  refs.modalEl.classList.remove('is-open');
  refs.bodyEl.classList.remove('hidden');
}

function onClickInNotModal(event) {
  if (event.target.nodeName !== 'IMG') {
    onCloseModal();
  }
}
 
async function renderModal(id){
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
