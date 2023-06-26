import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import {
	Navigation,
	EffectFade,
	Pagination,
	Thumbs,
	Controller,
	FreeMode,
	Scrollbar,
	A11y,
	Mousewheel
} from 'swiper';
import AOS from 'aos';

flsFunctions.isWebp();

const swiper = new Swiper('.auctions-slider', {
	navigation: {
		nextEl: '.swiper-button-next_1',
		prevEl: '.swiper-button-prev_1' // Включить стрелочки
	},
	modules: [Navigation, FreeMode], // Модули, которые будут использоваться
	autoHeight: true, // Автовысота
	speed: 500, // Скорость прокрутки слайдера
	slidesPerView: 3, // Количество слайдов, которые будут видны
	spaceBetween: 42,
	freeMode: true,
	grabCursor: true,
});

const swiper2 = new Swiper('.popular-slider', {
	navigation: {
		nextEl: '.swiper-button-next_2',
		prevEl: '.swiper-button-prev_2' // Включить стрелочки
	},
	modules: [Navigation, FreeMode], // Модули, которые будут использоваться
	autoHeight: true, // Автовысота
	speed: 500, // Скорость прокрутки слайдера
	slidesPerView: 2.5, // Количество слайдов, которые будут видны
	spaceBetween: 42,
	freeMode: true,
	grabCursor: true,
});

const swiper3 = new Swiper('.categories-slider', {
	navigation: {
		nextEl: '.swiper-button-next_3',
		prevEl: '.swiper-button-prev_3' // Включить стрелочки
	},
	modules: [Navigation, FreeMode], // Модули, которые будут использоваться
	autoHeight: true, // Автовысота
	speed: 500, // Скорость прокрутки слайдера
	slidesPerView: 2.5, // Количество слайдов, которые будут видны
	spaceBetween: 42,
	freeMode: true,
	grabCursor: true,
});