window.addEventListener('load', () => {
  const sliders = document.querySelectorAll('.statistics__slider, .advantages__slider');

  sliders.forEach((slider) => {
    new Swiper(slider, {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 26,
      loop: false,
      navigation: {
        nextEl: slider.closest('section').querySelector('.swiper-button-next, swiper-button-next-stats'),
        prevEl: slider.closest('section').querySelector('.swiper-button-prev, swiper-button-prev-stats'),
      },
      pagination: {
        el: slider.closest('section').querySelector('.custom-pagination, .statistics-pagination'),
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 6,
      },
      breakpoints: {
        320: {slidesPerView: 1, spaceBetween: 26},
        640: {slidesPerView: 2, spaceBetween: 26},
      },
    });
  });
});
