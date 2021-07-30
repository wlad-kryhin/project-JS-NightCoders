
const refers = {
    backgroundLibrary: document.querySelector('[data-index="background"]'),
    backgroundImage: document.querySelector('.section-hero'),
    myLibraryBtn: document.querySelector('[data-index="mylibrary"]'),
    homeBtn: document.querySelector('[data-index="home"]'),
}

refers.myLibraryBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    myLibraryBackgroundChange();
})

refers.homeBtn.addEventListener('click', () => {
    evt.preventDefault();
    myHomeBackgroundChange();
})

function myLibraryBackgroundChange() {
    refers.backgroundLibrary.classList.add('background-mylibrary');
    refers.backgroundLibrary.classList.remove('background-home');
}

function myHomeBackgroundChange() {
    refers.backgroundLibrary.classList.add('background-home');
    refers.backgroundLibrary.classList.remove('background-mylibrary');
}




