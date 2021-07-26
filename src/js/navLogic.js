const refs = {
    header: document.querySelector('[data-index="header"]'),
    homeBtn: document.querySelector('[data-index="home"]'),
    mylibraryBtn: document.querySelector('[data-index="mylibrary"]'),
};
//Function for change background image: Home
function homePageChange() {
    refs.header.classList.remove('header-background-myLibrary');
    refs.header.classList.add('header-background-home')
    refs.mylibraryBtn.classList.remove('current');
    refs.homeBtn.classList.add('current');
}
//Function for change background image: myLibrary
function myLibraryPageChange() {
    refs.header.classList.remove('header-background-home');
    refs.header.classList.add('header-background-myLibrary')
    refs.homeBtn.classList.remove('current');
    refs.mylibraryBtn.classList.add('current'); 
}