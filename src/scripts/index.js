import initAlert from './alert';
import initAnimations from './animations';
import initStoriesArchive from './storiesArchive';

const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('#site-header');

navToggle.addEventListener('click', () => {
  header.classList.toggle('open');
});

initAlert();

initAnimations();

const storiesArchive = document.querySelector('#stories-archive');
if (storiesArchive) {
  initStoriesArchive(storiesArchive);
}
