import initAlert from './alert';
import initAnimations from './animations';

const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('#site-header');

navToggle.addEventListener('click', () => {
  header.classList.toggle('open');
});

initAlert();

initAnimations();
