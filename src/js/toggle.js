const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const section = document.querySelector('.section-hero')


  const checkBox = document.querySelector('#theme-switch-toggle')
  checkBox.addEventListener('change', onChangeInput)
   
  function onChangeInput(event) {
    event.currentTarget.checked ? onCheckedInput() : offCheckedInput();
  }
  
  function onCheckedInput() {
    section.classList.add(Theme.DARK);
    section.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    checkBox.checked = true;
  }
  
  function offCheckedInput() {
    section.classList.add(Theme.LIGHT);
    section.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    checkBox.checked = false;
  }
  
  function currentThemeWebSite() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === Theme.LIGHT || savedTheme === null) {
      offCheckedInput();
      return;
    }
  
    if (savedTheme === Theme.DARK) {
      onCheckedInput();
      return;
    }
  }
  
currentThemeWebSite();
export {currentThemeWebSite}