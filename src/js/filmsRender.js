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

      let genres = '';
      if (genre_ids.length === 0) {
        genres = '...';
      } else {
        genres = `${makeStringOfGenres(genre_ids)}`;
      }
      const movieItem = `<li class="film-item" id="${id}">
                  <a href="" class="film-link">
                  <img src="${poster}" alt="${original_title}" class="film-img" id="${id}">
                  <p class="film-description">${original_title}
                  </p>
                  <p class="film-description  film-gengers">${genres}       
          Other | ${stringed_date} <span class="film-raiting">${vote_average}<span>
                  </p>
                  </a>
                  </li>`;
      return movieItem;
    })
    .join('');
  return result;
}
