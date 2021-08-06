import throttle from 'lodash.throttle';

const scrollBtn = document.querySelector('#scroll-btn');

window.addEventListener('scroll', throttle(hideElOnScroll(scrollBtn), 250));
scrollBtn.addEventListener('click', scrollTopOnClick);

function scrollTopOnClick(event) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function hideElOnScroll(el) {
  return function hideOnScroll(event) {
    if (pageYOffset < document.documentElement.clientHeight) {
      el.classList.add('visually-hidden');
    } else {
      el.classList.remove('visually-hidden');
    }
  };
}
