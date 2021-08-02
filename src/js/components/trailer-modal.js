const refs = {
  trailerModal: document.querySelector('[data-action="js-trailer"]'),
  trailerModalTag: document.querySelector('.video-trailer'),
};

export default class TrailerApp {
  setCloser() {
    refs.trailerModal.addEventListener('click', this.clickEvent);
    window.addEventListener('keydown', this.escEvent);
  }

  clickEvent(e) {
    refs.trailerModal.classList.add('is-hidden');
    refs.trailerModalTag.src = '';
  }

  escEvent(e) {
    if (e.code === 'Escape') {
      refs.trailerModal.classList.add('is-hidden');
      refs.trailerModalTag.src = '';
    }
  }
}
