import Swiper from "swiper";

export default function buildSlider(element, options) {
  if (!element) {
    throw new Error('Element cannot be null');
  }

  const swiper = new Swiper(element, options);
  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && swiper.params.loop) {
      swiper.params.loop = false;
      swiper.update();
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Tab' && !swiper.params.loop) {
      swiper.params.loop = true;
      swiper.update();
    }
  });

  if (options.navigation) {
    const moveFunc = () => {
      if (!swiper.params.loop) {
        swiper.params.loop = true;
        swiper.update();
      }
    };

    document.querySelector(options.navigation.nextEl).addEventListener('click', moveFunc);
    document.querySelector(options.navigation.prevEl).addEventListener('click', moveFunc);
  }


  return swiper;
}
