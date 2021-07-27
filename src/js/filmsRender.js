import genres from '../json/genres.json';

export default function filmsTemp(data) {
  console.log(genres);
  const makeStringOfGenres = ids => {
    ids.map(id => {
      if (genres.id === id) {
        return genre.name;
      }
    });
  };

  console.log(makeStringOfGenres([16, 35, 10751, 878]));

  let result = data
    .map(movie => {
      const movieItem = `<li class="film-item">
                  <a href="" class="film-link">
                  <img src="https://image.tmdb.org/t/p/w342/${
                    movie.poster_path
                  }" alt="{{original_title}}" class="film-img">
                  <p class="film-description">${movie.original_title}
                  </p>
                  <p class="film-description  film-gengers">${movie.genre_ids},       
          Other || ${movie.release_date.slice(0, 4)}
                  </p>
                  </a>
                  </li>`;
      return movieItem;
    })
    .join('');
  return result;
}
