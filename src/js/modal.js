/* haEl - это button с class="ha" в файле header.html(кнопка HOME в шапке проекта),
создан для проверки модалки, после переподключить на film-item   */

const refs = {
  haEl: document.querySelector('.ha'),
  modalEl: document.querySelector('#modal__win'),
  closeBtnEl: document.querySelector('button[data-action="close-modal"]'),
  modalContentEl: document.querySelector('.js-modal__content'),
  movieCardEl: document.querySelector('.js-movie-card'),
};

/* event */

refs.haEl.addEventListener('click', onMovieListClick);

function onMovieListClick(e) {
  e.preventDefault();

  onOpenBtnClick();
}

/* open */
refs.haEl.addEventListener('click', onOpenBtnClick);

function onOpenBtnClick() {
  onOpenModal();
}

const onOpenModal = () => {
  refs.modalEl.classList.add('is-open');
};

/* close */

refs.closeBtnEl.addEventListener('click', onCloseBtnClick);

function onCloseBtnClick() {
  onCloseModal();
}

const onCloseModal = () => {
  refs.modalEl.classList.remove('is-open');
};

export default onMovieListClick;
