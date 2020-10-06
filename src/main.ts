/**
 * @description Main imports.
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/**
 * @description Import Bootstrap as a global component.
 */
import { LayoutPlugin } from 'bootstrap-vue';

Vue.use(LayoutPlugin, {breakpoints: ['xs', 'sm', 'md', 'lg', 'xl']});

/**
 * @description Create Vue app.
 */
// Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
