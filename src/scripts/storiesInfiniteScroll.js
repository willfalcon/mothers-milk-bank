import getNewSlides from './fetchStories';

export default function storiesInfiniteScroll(archive) {
  let list = archive.querySelector('.stories-list');
  let watchPoint = document.createElement('div');
  watchPoint.id = 'watchPoint';
  watchPoint.style.height = '1px';
  watchPoint = list.insertAdjacentElement('afterend', watchPoint);

  function waitForBottom(archive) {
    let observer = new IntersectionObserver(
      async entries => {
        if (entries[0].isIntersecting) {
          if (archive.dataset.page != 'done') {
            let newSlides = await getNewSlides(archive);
            newSlides.forEach(slide => {
              list.insertAdjacentHTML('beforeend', slide);
            });

            observer.unobserve(watchPoint);
            waitForBottom(archive);
          }
        }
      },
      {
        // threshold: 1,
        // rootMargin: `-25% 0% -25% 0%`,
      }
    );
    observer.observe(watchPoint);
  }
  waitForBottom(archive);
}
