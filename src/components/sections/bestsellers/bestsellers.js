import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation])

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.product-slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.bestsellers__arrow-right',
      prevEl: '.bestsellers__arrow-left',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1248: {
        slidesPerView: 4,
      }
    }
  });
});
