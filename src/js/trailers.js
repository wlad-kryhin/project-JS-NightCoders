import * as basicLightbox from 'basiclightbox';

function createTrailerLink(elementRef) {
  const trailerBtn = elementRef;
  // console.log(trailerBtn.length==undefined);

  if (trailerBtn.length == undefined) {
    trailerBtn.addEventListener('click', e => {
      drawModalForTrailler(e.target.dataset.id);
    });
    return;
  }

  trailerBtn.forEach(el =>
    el.addEventListener('click', e => {
      drawModalForTrailler(e.target.dataset.id);
    }),
  );

  function drawModalForTrailler(id) {
    const ApiKey = '92ffb34e08e714eb390805a25b0a06d3';
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const id = data.results[0].key;
        const instance = basicLightbox.create(`
  <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
        instance.show();
        modalClBtTrailer(instance);
      })
      .catch(() => {
        const instance = basicLightbox.create(`
    <iframe width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);

        instance.show();
        modalClBtTrailer(instance);
      });
  }

  function modalClBtTrailer(instance) {
    const modalBox = document.querySelector('.basicLightbox--iframe');
    modalBox.insertAdjacentHTML(
      'afterbegin',
      `<button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"
        ></button>
    `,
    );
    const modalCloseBtn = document.querySelector('[data-action="close-lightbox"]');
    modalCloseBtn.addEventListener('click', () => instance.close());
  }
}

export default { createTrailerLink };
