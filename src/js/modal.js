const refs = {
  modalEl: document.querySelector('#modal__win'),
  closeBtnEl: document.querySelector('button[data-action="close-modal"]'),
  bodyEl: document.querySelector('body'),

  modalContentEl: document.querySelector('.js-modal__content'),
  movieCardEl: document.querySelector('.js-movie-card'),
};

refs.closeBtnEl.addEventListener('click', onCloseModal);
document.addEventListener('click', onClickInNotModal);

function showModal(event) {
  event.preventDefault();

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

export default showModal;
