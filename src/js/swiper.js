var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,

  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',

    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      //   spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
