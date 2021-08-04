import LocaleStorageAPI from '../localStorageAPI';
const localeStorageAPI = new LocaleStorageAPI();
const myLibraryBtn = document.querySelector('[data-index="mylibrary"]');
const backgroundLibrary = document.querySelector('[data-index="background"]');
export default class LibraryBackgroundCheck {
  checkWateched() {
    if (
      myLibraryBtn.classList.contains('current') &&
      localeStorageAPI.getValueWatched().length === 0
    ) {
      backgroundLibrary.classList.add('background-mylibrary');
    } else backgroundLibrary.classList.remove('background-mylibrary');
  }
  checkQueue() {
    if (
      myLibraryBtn.classList.contains('current') &&
      localeStorageAPI.getValueQueue().length === 0
    ) {
      backgroundLibrary.classList.add('background-mylibrary');
    } else {
      backgroundLibrary.classList.remove('background-mylibrary');
    }
  }
}
