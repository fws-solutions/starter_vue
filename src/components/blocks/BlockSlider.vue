<template>
	<div class="slider">
		<VueSlickCarousel
			:slidesToShow="4"
			:slidesToScroll="1"
			:arrows="false"
			:adaptiveHeight="true"
		>
			<div class="slider__figure" v-for="(slide, i) in data.slides" :key="`slide-figure-${i}`">
				<img class="slider__img" :src="slide" alt="">
			</div>
		</VueSlickCarousel>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import VueSlickCarousel from 'vue-slick-carousel';

	export default Vue.extend({
		props: {
			data: {
				type: Object,
				required: true
			}
		},
		components: {
			VueSlickCarousel
		}
	});
</script>

<style lang="scss" scoped>
	.slider {
		/deep/ {
			.slick-slide > div {
				outline: 0;
			}
		}
	}

	.slider__figure,
	.slider__img {
		display: block !important;
		width: 100%;
		outline: 0;
	}
</style>
