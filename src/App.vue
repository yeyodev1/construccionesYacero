<script setup lang="ts">
	import TheHeader from "./components/layout/TheHeader.vue";
	import TheFooter from "./components/layout/TheFooter.vue";
</script>

<template>
	<div class="app-container">
		<TheHeader />
		<!-- <RouterView></RouterView> -->
		<TheFooter />
	</div>
</template>

<style lang="scss">

.app-container {
	background-color: $black;
	min-height: 100vh;
	width: 100%;
}
</style>
