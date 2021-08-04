import LocaleStorageAPI from './localStorageAPI';
const localeStorageAPI = new LocaleStorageAPI();

const refers = {
  backgroundLibrary: document.querySelector('[data-index="background"]'),
  backgroundImage: document.querySelector('.section-hero'),
  myLibraryBtn: document.querySelector('[data-index="mylibrary"]'),
  homeBtn: document.querySelector('[data-index="home"]'),
};
refers.myLibraryBtn.addEventListener('click', evt => {
  evt.preventDefault();
  myLibraryBackgroundChange();
  if (
    localeStorageAPI.getValueWatched().length !== 0 ||
    localeStorageAPI.getValueQueue().length !== 0
  ) {
    refers.backgroundLibrary.classList.remove('background-mylibrary');
  }
});

refers.homeBtn.addEventListener('click', () => {
  evt.preventDefault();
  myHomeBackgroundChange();
});

function myLibraryBackgroundChange() {
  refers.backgroundLibrary.classList.add('background-mylibrary');
  refers.backgroundLibrary.classList.remove('background-home');
}

function myHomeBackgroundChange() {
  refers.backgroundLibrary.classList.add('background-home');
  refers.backgroundLibrary.classList.remove('background-mylibrary');
}
