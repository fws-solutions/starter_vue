<template>
	<header id="masthead" class="site-header" :class="scrollTop > 200 ? classSticky : ''" ref="header">
		<b-container>
			<div class="site-header__container">
				<div class="site-header__branding">
					<router-link class="site-header__logo" to="/">
						<img class="site-header__logo-img" src="@/assets/images/fw-logo.png" alt="Logo" title="">
					</router-link>
				</div>

				<div class="site-header__nav-outer" :class="menuOpen ? classActive : ''">
					<div class="site-header__nav-inner">
						<MainNavigation :menuItems="menuItems"/>
					</div>
				</div>
			</div>
		</b-container>

		<PartHamburger
			v-if="showHamburger"
			class="site-header__hamburger"
			:isActive="menuOpen"
			:onClick="toggleMenu"
		/>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';
import PartHamburger from '@/components/parts/PartHamburger.vue';
import MainNavigation from '@/components/main/MainNavigation/MainNavigation.vue';
import { domQueryAll, slideToggle } from '@/config/util';

interface ChildItems {
	nodes: MenuItem[]
}

interface MenuItem {
	url: string
	label: string
	childItems: ChildItems
}

interface Data {
	showHamburger: boolean
	menuOpen: boolean
	innerWidth: number
	scrollTop: number
	classActive: string
	classSticky: string
	menuItems: MenuItem[]
}

export default Vue.extend({
	components: {
		PartHamburger,
		MainNavigation
	},

	data(): Data {
		return {
			showHamburger: false,
			menuOpen: false,
			innerWidth: 0,
			scrollTop: 0,
			classActive: 'is-active',
			classSticky: 'is-sticky',
			menuItems: [
				{
					url: '/',
					label: 'Home',
					childItems: {nodes: []}
				},
				{
					url: '/about',
					label: 'About',
					childItems: {nodes: []}
				}
			]
		};
	},

	methods: {
		handleResize(): void {
			this.innerWidth = window.innerWidth;
		},
		toggleMenu(): void {
			let timeout;
			const slNavIcon = '.js-nav-icon';
			const slSubNav = '.js-subnav';

			this.menuOpen = !this.menuOpen;

			if (!this.menuOpen) {
				clearTimeout(timeout);
				timeout = setTimeout(() => {
					domQueryAll(slSubNav, this.$refs.header, el => {
						el.parentNode.querySelector(slNavIcon).classList.remove(this.classActive);
						slideToggle.slideUp(el, {duration: 10});
					});
				}, 300);
			}
		},
		setScrollTop() {
			const htmlElement = (document.documentElement || document.body.parentNode || document.body).parentNode as HTMLElement;
			this.scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : htmlElement.scrollTop;
		}
	},

	watch: {
		innerWidth(newWidth): void {
			this.showHamburger = newWidth < 1200;
		}
	},

	beforeMount() {
		window.addEventListener('resize', this.handleResize);
		window.addEventListener('scroll', this.setScrollTop);

		this.handleResize();
		this.setScrollTop();
	},

	destroyed() {
		window.removeEventListener('resize', this.handleResize);
		window.removeEventListener('scroll', this.setScrollTop);
	}
});
</script>

<style lang="scss" scoped>
.site-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	background-color: $red;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	z-index: 1001;
	transition: $dur / 2 $ease;
	will-change: transform;

	&.is-sticky {
		height: 60px;
		transition: $dur $ease;
	}

	@include mq($xl) {
		height: 60px;
	}
}

.site-header__container {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.site-header__branding {
	display: flex;
	align-items: center;
}

.site-header__logo {
	color: $white;
	display: block;
	max-width: 170px;
}

.site-header__logo-img {
	display: block;
	width: 100%;
}

.site-header__nav-outer {
	@include mq($xl) {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100vw;
		z-index: 1010;
		visibility: hidden;
		transition: $dur $ease $dur;
		will-change: transform;

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba($white, .5);
			opacity: 0;
			visibility: hidden;
			transition: $dur $ease;
		}

		&.is-active {
			visibility: visible;
			transition: $dur $ease;

			&::before {
				opacity: 1;
				visibility: visible;
			}
		}
	}
}

.site-header__nav-inner {
	@include mq($xl) {
		position: absolute;
		right: 0;
		top: 0;
		width: 300px;
		height: 100%;
		background-color: $black;
		display: block;
		padding: 50px 30px;
		transform: translateX(100%);
		transition: $dur $ease;

		.is-active & {
			transform: translateX(0);
		}
	}
}

.site-header__hamburger {
	@include mq($xl) {
		right: 15px;
		@include center(y);
		z-index: 1100;
	}
}
</style>
