import Swiper from 'swiper';
import { Manipulation, Pagination } from 'swiper/modules';
import viewportSize from 'viewport-size';
import storiesInfiniteScroll from './storiesInfiniteScroll';
import getNewSlides from './fetchStories';

export default function initStoriesArchive(archive) {
  let width = viewportSize.getWidth();

  if (width < 768) {
    let swiper = new Swiper(archive, {
      slidesPerView: 1,
      spaceBetween: 10,
      modules: [Pagination, Manipulation],
    });

    swiper.on('slideChange', async swiper => {
      if (archive.dataset.page != 'done') {
        let count = swiper.slides.length;
        let index = swiper.activeIndex;
        if (index >= count - 2) {
          let newSlides = await getNewSlides(archive);
          newSlides.forEach(slide => {
            swiper.appendSlide(slide);
          });
        }
      }
    });
  } else {
    storiesInfiniteScroll(archive);
  }
}
