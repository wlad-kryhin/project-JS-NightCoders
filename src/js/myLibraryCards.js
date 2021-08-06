import LocaleStorageAPI from './localStorageAPI';
import cardsTemplate from '../templates/cardsTemplate.hbs';
import { makeCardsAnimated } from './responsive-card';
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
    getMovies(watchedFilms)
      .then(res => res.forEach(movie => libraryCardsMarkup(movie)))
      .then(e => makeCardsAnimated());
  }
}

function libraryCardsMarkup(data) {
  // return container.innerHTML = cardsTemplate(data)
  return container.insertAdjacentHTML('beforeend', markupLibraryHtml(data));
}
function markupLibraryHtml(movie) {
  const { poster_path, original_title, release_date, genres, vote_average, id } = movie;

  let stringed_date = '';
  if (release_date === undefined) {
    stringed_date = '';
  } else {
    stringed_date = release_date.slice(0, 4);
  }

  let poster = '';
  if (poster_path === null) {
    poster =
      'https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-romantic-blue-film-phase-movie-poster-background-image_136505.jpg';
  } else {
    poster = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  }

  let genre1 = '';
  let genre2 = '';

  if (genres.length === 0) {
    genre1 = '...';
  } else {
    genre1 = genres[0].name;
    genre2 = genres[1].name;
  }

  const movieItem = `<li class="film-item" id=${id}>
                  <a href="" class="film-link">
                  <img src="${poster}" alt="{{original_title}}" class="film-img" id="${id}">
                  <p class="film-description">${original_title}
                  </p>
                  <p class="film-description  film-gengers">${genre1}, ${genre2},       
          Other | ${stringed_date} <span class="film-raiting">${vote_average}<span>
                  </p>
                  </a>
                  </li>`;
  return movieItem;
}
