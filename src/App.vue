<template>
	<div id="app">
		<MainHeader/>

		<main class="site-main">
			<router-view/>
		</main>

		<MainFooter/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import MainHeader from '@/components/main/MainHeader.vue';
	import MainFooter from '@/components/main/MainFooter.vue';

	export default Vue.extend({
		components: {
			MainHeader,
			MainFooter
		}
	});
</script>

<style lang="scss">
	@import '~vue-slick-carousel/dist/vue-slick-carousel.css';
	@import '~vue-cool-lightbox/dist/vue-cool-lightbox.min.css';
	@import 'assets/scss/style';

	.site-main {
		min-height: calc(100vh - 187px); // header and body padding-top value - footer height
	}
</style>
