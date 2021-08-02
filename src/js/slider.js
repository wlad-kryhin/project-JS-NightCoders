import Glide from '@glidejs/glide';
import filmsCardSliderTpl from '../templates/card-films-slider.hbs';
import trailer from './trailers';
const sliderContainer = document.querySelector('.js-slider-container');
const sliderWrapper = document.querySelector('.slider-wrapper');

renderTrendy();

const glide = new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 8,
  autoplay: 4000,
  hoverpause: true,
  bound: true,
});

glide.mount();

function renderTrendy() {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=92ffb34e08e714eb390805a25b0a06d3`;
  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      return results;
    })
    .then(renderSliderFilms)
    .catch(err => {
      sliderContainer.innerHTML = `${errorUrl}`;
    });
}

function renderSliderFilms(articles) {
  sliderContainer.innerHTML = filmsCardSliderTpl(articles);
  trailer.createTrailerLink(document.querySelectorAll('.btn-youtube-slider'));
}

function clearSlider() {
  sliderWrapper.innerHTML = '';
}

export { clearSlider };
