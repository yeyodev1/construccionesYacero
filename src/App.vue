<script setup lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheMenu from "./components/layout/TheMenu.vue";
import YeyoTrademark from "./components/YeyoTrademark.vue";
</script>

<template>
	<div class="app-container">
		<TheHeader />
		<div class="app-container-view">
			<RouterView></RouterView>
		</div>
		<TheMenu />
		<TheFooter />
		<YeyoTrademark />
	</div>
</template>

<style lang="scss">

.app-container {
	background-color: $black;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	&-view{
		flex: 1;
	}
}
</style>
