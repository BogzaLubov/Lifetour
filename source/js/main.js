import 'swiper/css';
import { getHeroOptions, getGalleryOptions, getToursOptions, getTrainingOptions, getReviewsOptions, getAdvOptions } from './sliders/slider-options';
import buildSlider from './sliders/slider-builder';
import buildMenu from './navigation-menu/menu-builder';
import buildForm from './form/form-builder';

const heroSliderElement = document.querySelector('.hero__slider');
buildSlider(heroSliderElement, getHeroOptions());

const toursSliderElement = document.querySelector('.tours__slider');
buildSlider(toursSliderElement, getToursOptions());

const trainingSliderElement = document.querySelector('.training__slider');
buildSlider(trainingSliderElement, getTrainingOptions());

const reviewSliderElement = document.querySelector('.reviews__slider');
buildSlider(reviewSliderElement, getReviewsOptions());

const advSliderElement = document.querySelector('.adv__slider');
buildSlider(advSliderElement, getAdvOptions());

const gallerySliderElement = document.querySelector('.gallery__slider');
buildSlider(gallerySliderElement, getGalleryOptions());

const menuButtonElement = document.querySelector('.header__menu-button');
const menuListElement = document.querySelector('.navigation');
buildMenu(menuButtonElement, menuListElement);

const form = document.querySelector('.form__info');
buildForm(form);
