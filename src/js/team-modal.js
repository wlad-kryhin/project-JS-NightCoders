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
  


// Еще одна версия Modal team


// import * as basicLightbox from 'basiclightbox';
// import mikhailUrl from '../images/team1.jpg';
// import vladUrl from '../images/team2.jpeg';
// import andreyUrl from '../images/team3.jpg';
// import marynaUrl from '../images/team4.jpg';
// import dmytroUrl from '../images/team5.jpg';
// import iraUrl from '../images/team6.jpg';
// import vasylUrl from '../images/team7.jpeg';

// const teamMarkup = `<div class="team-backdrop" is-hidden>
//     <div class="team-card">
//     <a class="link-icon" href="https://github.com/MikhailKolomoitsev">
//     <img src="${mikhailUrl}" alt="Mikhail" class="team-image">
//     </a>
//     <p class="team-name">Mikhail</p>
//     <p class="team-profession">Scrum Master</p>
//    </div>
//    <div class="team-card">
//     <a class="link-icon" href="https://github.com/wlad-kryhin">
//     <img src="${vladUrl}" alt="Vlad" class="team-image">
//     </a>
//     <p class="team-name">Vlad</p>
//     <p class="team-profession">Team Lead</p>
//    </div>
//    <div class="team-card">
//     <a class="link-icon" href="https://github.com/KasyanAndrey">
//     <img src="${andreyUrl}" alt="Andrey" class="team-image">
//     </a>
//     <p class="team-name">Andrey</p>
//     <p class="team-profession">Developer</p>
//    </div>
//    <div class="team-card">
//     <a class="link-icon" href="https://github.com/Maryna1212">
//     <img src="${marynaUrl}" alt="Maryna" class="team-image">
//     </a>
//     <p class="team-name">Maryna</p>
//     <p class="team-profession">Developer</p>
//    </div>
//    <div class="team-card">
//     <a class="link-icon" href="https://github.com/DimByl">
//     <img src="${dmytroUrl}" alt="Dmytro" class="team-image">
//     </a>
//     <p class="team-name">Dmytro</p>
//     <p class="team-profession">Developer</p>
//    </div>
//    <div class="team-card">
//     <a class="link-icon" href="https://github.com/IraLogvina">
//     <img src="${iraUrl}" alt="Ira" class="team-image">
//     </a>
//     <p class="team-name">Ira</p>
//     <p class="team-profession">Developer</p>
//    </div>
//    <div class="team-card">
//     <a class="link-icon" href="https://github.com/Vasyl-mitityk">
//     <img src="${vasylUrl}" alt="Vasyl" class="team-image">
//     </a>
//     <p class="team-name">Vasyl</p>
//     <p class="team-profession">Developer</p>
//    </div>
//   </div>`;

// const teamContainer = document.querySelector('.js-team-modal');

// teamContainer.addEventListener('click', openTeamModal);

// const teamModal = basicLightbox.create(teamMarkup);

// function openTeamModal(e) {
//     teamModal.show();
//     e.preventDefault();

//     window.addEventListener('keydown', closeTeamModalHandler);

//     function closeTeamModalHandler(e) {
//         if (e.code === 'Escape') {
//             teamModal.close();
//             window.removeEventListener('keydown', closeTeamModalHandler);
//         }
//     }
// }

// Старая версия Modal team

