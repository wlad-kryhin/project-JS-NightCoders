const API_KEY = '6acc6746be8af475302214b8237b9c48';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default class FilmsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchFilms() {
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;

    return fetch(url)
      .then(r => r.json())
      .then(({ results }) => {
        this.incrementPage();
        return results;
      });
  }
 


  fetchTrendingFilms() {
    // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    // const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}`;
 const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`;
    return fetch(url)
      .then(r => r.json())
      .then(({ results }) => {
        this.incrementPage()
        return results;
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
