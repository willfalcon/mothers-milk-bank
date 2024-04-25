import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import viewportSize from 'viewport-size';

const width = viewportSize.getWidth();
const mobile = width < 768;

const stepBlocks = document.querySelectorAll('.steps-inner');
stepBlocks.forEach(block => {
  const swiper = new Swiper(block, {
    slidesPerView: 1,
    spaceBetween: 10,
    modules: [Pagination, Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
      clickable: true,
      dynamicBullets: mobile,
    },
  });
});
