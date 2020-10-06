<template>
	<div class="block-list">
		<b-container>
			<h3 class="block-list__title section-title" v-if="data.title">{{data.title}}</h3>
			<PartIconList v-if="pagesData" :items="pagesData"/>
		</b-container>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import PartIconList from '@/components/parts/PartIconList.vue';

	interface Page {
		id: number,
		link: string,
		title: string
	}

	export default Vue.extend({
		props: {
			data: {
				type: Object,
				required: true
			}
		},

		components: {
			PartIconList
		},

		computed: {
			pagesData(): void {
				if (!this.data.pages) {
					return null;
				}

				return this.data.pages.reduce((agg, cur: Page) => {
					const page = {
						key: cur.id,
						url: cur.link,
						title: cur.title,
						target: '_blank',
						rel: 'noopener'
					};

					if (page.title) {
						agg.push(page);
					}

					return agg;
				}, []);
			}
		}
	});
</script>

<style lang="scss" scoped>
	.block-list {
		padding: 60px 0;
	}

	.block-list__title {
		margin-bottom: 30px;
	}
</style>
