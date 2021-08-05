import Glide from '@glidejs/glide';
import filmsCardSliderTpl from '../templates/card-films-slider.hbs';
const sliderContainer = document.querySelector('.js-slider-container');

const glide = new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 8,
  autoplay: 2000,
  hoverpause: true,
  bound: true,
});

glide.mount();

export default function renderTrendy() {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=92ffb34e08e714eb390805a25b0a06d3`;
  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      return results;
    })
    .then(renderSliderFilms)
    .catch(err => {
      // sliderContainer.innerHTML = `err`;
    });
}

function renderSliderFilms(articles) {
  sliderContainer.innerHTML = filmsCardSliderTpl(articles);
  trailer.createTrailerLink(document.querySelectorAll('.btn-youtube-slider'));
}
