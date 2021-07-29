import genres from '../json/genres.json';
export default function filmsTemp(data) {
  const makeStringOfGenres = ids => {
    let result = [];
    for (const id of ids) {
      for (const genre of genres) {
        if (genre.id === id) {
          result.push(genre.name);
        }
      }
    }
    if (result.length > 2) {
      result.length = 2;
    }
    return result.join(', ');
  };

  let result = data
    .map(movie => {
      const { poster_path, original_title, release_date, genre_ids, vote_average, id } = movie;
      const movieItem = `<li class="film-item">
                  <a href="" class="film-link">
                  <img src="https://image.tmdb.org/t/p/w342/${poster_path}" alt="{{original_title}}" class="film-img" id="${id}">
                  <p class="film-description">${original_title}
                  </p>
                  <p class="film-description  film-gengers">${makeStringOfGenres(genre_ids)},       
          Other | ${release_date.slice(0, 4)} <span class="film-raiting">${vote_average}<span>
                  </p>
                  </a>
                  </li>`;
      return movieItem;
    })
    .join('');
  return result;
}

