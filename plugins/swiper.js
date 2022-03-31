import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/swiper-bundle.css";

import {
  Swiper,
  SwiperSlide
} from 'vue-awesome-swiper'

import SwiperCore, {
  Pagination,
  Autoplay,
} from "swiper/core";

SwiperCore.use([Autoplay, Pagination]);
Vue.use(VueAwesomeSwiper)

Vue.component(Swiper)
Vue.component(SwiperSlide)
