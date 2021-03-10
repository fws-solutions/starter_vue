import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import { LayoutPlugin } from 'bootstrap-vue';

// use plugins
Vue.use(VueAwesomeSwiper);
Vue.use(LayoutPlugin, { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'] });
