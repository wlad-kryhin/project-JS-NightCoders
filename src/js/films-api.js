export default class FilmsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchFilms() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6acc6746be8af475302214b8237b9c48&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;

    return fetch(url)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();
        return data.results;
      });
  }

  fetchTrendingFilms() {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=6acc6746be8af475302214b8237b9c48`;

    return fetch(url)
      .then(r => r.json())
      .then(data => {
        return data.results;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
