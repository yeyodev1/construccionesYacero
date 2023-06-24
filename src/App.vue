<script setup lang="ts">
	import TheHeader from "./components/layout/TheHeader.vue";
</script>

<template>
	<div class="app-container">
		<TheHeader />
		<!-- <RouterView></RouterView> -->
		<!-- <TheFooter /> -->
	</div>
</template>

<style lang="scss">
@import './styles/variables.scss';

body {
	margin: 0;
	box-sizing: border-box;
}
.app-container {
	background-color: $black;
	min-height: 100vh;
	width: 100%;
}
</style>
