import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import viewportSize from 'viewport-size';

const width = viewportSize.getWidth();

if (width < 768) {
  const blocks = document.querySelectorAll('.latest-stories');

  blocks.forEach(block => {
    const swiper = new Swiper(block, {
      slidesPerView: 1,
      spaceBetween: 10,
      modules: [Pagination],
    });
  });
}
