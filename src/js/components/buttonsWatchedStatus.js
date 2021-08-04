const refs = {
  modalBtnAddWatched: document.querySelector('[data-action="modalBtnAddWatched"]'),
  movieBtnQueue: document.querySelector('[data-action="movieBtnQueue"]'),
};

import LocaleStorageAPI from '../localStorageAPI';
const localeStorageAPI = new LocaleStorageAPI();

export default function checkButtonsStatusAdd() {
  if (localeStorageAPI.getValueWatched().includes(refs.modalBtnAddWatched.id)) {
    refs.modalBtnAddWatched.textContent = 'Remove from Watched';
    refs.modalBtnAddWatched.classList.remove('transparent-btn');
    refs.modalBtnAddWatched.classList.add('active-btn');
  } else if (!localeStorageAPI.getValueWatched().includes(refs.modalBtnAddWatched.id)) {
    refs.modalBtnAddWatched.textContent = 'Add to watched';
    refs.modalBtnAddWatched.classList.add('transparent-btn');
    refs.modalBtnAddWatched.classList.remove('active-btn');
  }
}
