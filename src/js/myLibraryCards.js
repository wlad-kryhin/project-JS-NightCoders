import LocaleStorageAPI from './localStorageAPI';
import cardsTemplate from '../templates/cardsTemplate.hbs';
const container = document.querySelector('.film-list')
const localeStorageAPI = new LocaleStorageAPI();
 async function getMovies(idList) {
  const key = '84867915c8b3aadc91d5efa8c22e1ab6';

  const promises = idList.map(id => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
    return fetch(url)
      .then(r => r.json())
      .then(data => ({
        ...data,
        release_date: data.release_date.split('-')[0],
      }));
  });

  return await Promise.all(promises);
}

export default function renderFilmsLibrary() {
  const watchedFilms = localeStorageAPI.getValueWatched();
  if (watchedFilms.length) {
    getMovies(watchedFilms).then(res => libraryCardsMarkup(res))
    };
  }

function libraryCardsMarkup(data) {
 return  container.innerHTML = cardsTemplate(data)
}