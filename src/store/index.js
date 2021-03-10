import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		menuItems: [
			{
				url: '/',
				label: 'Home',
				childItems: []
			},
			{
				url: '#',
				label: 'About',
				childItems: [
					{
						url: '#',
						label: 'Our Team'
					},
					{
						url: '#',
						label: 'Our Mission',
						childItems: []
					},
					{
						url: '#',
						label: 'Services',
						childItems: [
							{
								url: '#',
								label: 'Development'
							},
							{
								url: '#',
								label: 'Design',
								childItems: []
							},
							{
								url: '#',
								label: 'QA',
								childItems: []
							}
						]
					}
				]
			},
			{
				url: '#',
				label: 'Contact',
				childItems: []
			}
		]
	},

	mutations: {},

	actions: {},

	modules: {},

	getters: {
		getMenuItems(state) {
			return state.menuItems;
		}
	}
});
