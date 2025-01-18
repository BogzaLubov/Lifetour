export function getHeroOptions() {
  return {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '[data-pagination="hero"]',
      type: 'bullets',
      clickable: true,
      bulletActiveClass: 'hero__pagination-slide--active'
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1440: {
        allowTouchMove: false,
      },
    },
  };
}

export function getToursOptions() {
  return {
    navigation: {
      nextEl: '.tours__pagination-button-next',
      prevEl: '.tours__pagination-button-prev',
    },
    loop: false,
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
}

export function getTrainingOptions() {
  return {
    navigation: {
      nextEl: '.training__pagination-button-next',
      prevEl: '.training__pagination-button-prev',
    },
    loop: false,
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        initialSlide: 2,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        allowTouchMove: false,
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
}

export function getReviewsOptions() {
  return {
    navigation: {
      nextEl: '.reviews__pagination-button-next',
      prevEl: '.reviews__pagination-button-prev',
    },
    loop: false,
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 'auto',
        lazyPreloadPrevNext: 1,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 'auto',
      },
      1440: {
        allowTouchMove: false,
        slidesPerView: 3,
      },
    },
  };
}

export function getAdvOptions() {
  return {
    navigation: {
      nextEl: '.adv__pagination-button-next',
      prevEl: '.adv__pagination-button-prev',
    },
    loop: true,
    slidesPerGroup: 2,
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        allowSlideNext: false,
        allowSlidePrev: false,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 5,
        allowTouchMove: false,
        initialSlide: 2,
        centeredSlides: true,
      },
    },
    on: {
      slideChangeTransitionEnd: function () {
        const slides = this.slides;
        const offset = 190;
        if (window.innerWidth >= 1440) {
          slides.forEach((slide) => {
            slide.style.transform = `translateX(${offset}px)`;
          });
        }
      },
      init: function () {
        const slides = this.slides;
        const offset = 190;
        if (window.innerWidth >= 1440) {
          slides.forEach((slide) => {
            slide.style.transform = `translateX(${offset}px)`;
          });
        }
      },
    },
  };
}

export function getGalleryOptions() {
  return {
    navigation: {
      nextEl: '.gallery__pagination-button-next',
      prevEl: '.gallery__pagination-button-prev',
    },
    loop: false,
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 5,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1440: {
        allowTouchMove: false,
        slidesPerView: 5,
        spaceBetween: 5,
      },
    },
  };
}
