import initAlert from './alert';
import initWaves from './waves';

const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('#site-header');

navToggle.addEventListener('click', () => {
  header.classList.toggle('open');
});

initAlert();

const waves = document.querySelectorAll('.waves-wrapper');

waves.forEach(wave => {
  initWaves(wave);
});
