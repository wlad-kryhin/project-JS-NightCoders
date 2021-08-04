const btnWatch = document.querySelector('[data-action="modalBtnAddWatched"]');
const refsShow = {
  showWatchedBtn: document.querySelector('[data-action="show-watched"]'),
  showQueuedBtn: document.querySelector('[data-action="show-queue"]'),
};

export default function updateLibraryWatched() {
  function reRender() {
    clearFilmsContainer();
    renderFilmsLibrary(localeStorageAPI.getValueWatched());
  }
  if (refsShow.showWatchedBtn && refsShow.showWatchedBtn.classList.contains('active-btn')) {
    btnWatch.addEventListener('click', reRender);
    btnQuene.removeEventListener('click', reRender);
  }
}
