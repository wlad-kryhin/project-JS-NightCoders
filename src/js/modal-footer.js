(() => {
    const refs = {
      openModalFooter: document.querySelector('[data-modal-footer-open]'),
      closeModalFooter: document.querySelector('[data-modal-footer-close]'),
      footerModal: document.querySelector('[data-modal-footer]'),
    };
  
    refs.openModalFooter.addEventListener('click', toggleModal);
    refs.closeModalFooter.addEventListener('click', toggleModal);
  
    function toggleModal(event) {
      refs.footerModal.classList.toggle('is-hidden');
      
      event.preventDefault();
    }
})();
  

