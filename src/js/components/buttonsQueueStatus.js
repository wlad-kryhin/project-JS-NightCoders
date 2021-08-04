const refs = {
  movieBtnQueue: document.querySelector('[data-action="movieBtnQueue"]'),
};

import LocaleStorageAPI from '../localStorageAPI';
const localeStorageAPI = new LocaleStorageAPI();

export default function checkButtonsStatusQueue() {
  if (localeStorageAPI.getValueQueue().includes(refs.movieBtnQueue.id)) {
    refs.movieBtnQueue.textContent = 'Remove from Queue';
    refs.movieBtnQueue.classList.remove('transparent-btn');
    refs.movieBtnQueue.classList.add('active-btn');
  } else if (!localeStorageAPI.getValueQueue().includes(refs.movieBtnQueue.id)) {
    refs.movieBtnQueue.textContent = 'Add to queue';
    refs.movieBtnQueue.classList.add('transparent-btn');
    refs.movieBtnQueue.classList.remove('active-btn');
  }
}
