<template>
	<footer class="site-footer">
		Copyright © {{new Date().getFullYear()}} Forwardslash | All rights reserved
	</footer>
</template>

<style lang="scss" scoped>
.site-footer {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: $grey-mid;
	font-size: 12px;
	padding: 20px;
	background-color: $grey-light;
}
</style>
