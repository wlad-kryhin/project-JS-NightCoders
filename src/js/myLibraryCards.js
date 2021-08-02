import LocaleStorageAPI from './localStorageAPI';
import cardsTemplate from '../templates/cardsTemplate.hbs';
const container = document.querySelector('.film-list');
const localeStorageAPI = new LocaleStorageAPI();
async function getMovies(idList) {
  const key = '84867915c8b3aadc91d5efa8c22e1ab6';

  const promises = idList.map(id => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
    return fetch(url)
      .then(r => r.json())
      .then(data => ({
        ...data,
        // release_date: data.release_date.split('-')[0],
      }));
  });

  return await Promise.all(promises);
}

export default function renderFilmsLibrary(whatToRender) {
  const watchedFilms = whatToRender;
  if (watchedFilms.length) {
    getMovies(watchedFilms).then(res => res.forEach(movie => libraryCardsMarkup(movie)));
  }
}

function libraryCardsMarkup(data) {
  // return container.innerHTML = cardsTemplate(data)
  return container.insertAdjacentHTML('beforeend', markupLibraryHtml(data));
}
function markupLibraryHtml(movie) {
  const { poster_path, original_title, release_date, genres, vote_average, id } = movie;
  const movieItem = `<li class="film-item">
                  <a href="" class="film-link">
                  <img src="https://image.tmdb.org/t/p/w342/${poster_path}" alt="{{original_title}}" class="film-img" id="${id}">
                  <p class="film-description">${original_title}
                  </p>
                  <p class="film-description  film-gengers">${genres[0].name}, ${
    genres[1].name
  },       
          Other | ${release_date.slice(0, 4)} <span class="film-raiting">${vote_average}<span>
                  </p>
                  </a>
                  </li>`;
  return movieItem;
}
