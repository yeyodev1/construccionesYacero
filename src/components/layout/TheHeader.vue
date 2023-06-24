<script setup lang="ts">
import CrushButton from '@nabux-crush/crush-button'
const buttons = [
	{
		name: 'Servicios',
		link: '/'
	},
	{
		name: 'Proyectos',
		link: '/'
	},
	{
		name: 'Contacto',
		link: '/'
	},
	{
		name: 'Cotizar proyecto',
		link: '/'
	},
]
</script>

<template>
	<div class="header">
		<img
			src="@/assets/construccionesyacero-logo.png"
			alt="construcciones y acero"
			class="header-image" />
		<button class="header-button">
			<i class="fa-solid fa-bars" />
		</button>
		<div class="header-details">
			<a :href="button.link" v-for="(button, index) in buttons" :key="index">
				<CrushButton class="header-details-button" variant="secondary" :text="button.name" />
			</a>
		</div>
	</div> 
</template>

<style lang="scss" scoped>
	@import "/src/styles/variables.scss";
	.header {
		padding: 12px 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: $desktop-upper-breakpoint;
		margin: 0 auto;
		&-image {
			width: 120px;
		}
		&-button {
			background: none;
			border: none;
			text-decoration: none;
			color: $yellow ;
			@media (min-width: $tablet-upper-breakpoint) {
				display: none;
			}
		}
		&-details {
			display: none;
			@media (min-width: $tablet-upper-breakpoint) {
				display: flex;
				width: 60%;
				justify-content: space-between;
				align-items: center;
			}
			a &-button {
				border: none;
				font-family: $font;
				font-weight: 700;
				&:active {
					border: none;
					font-weight: inherit;
				}
			}
			a:last-child &-button:last-child{
				background-color: $yellow;
				color: black;
			}
		}
	}
</style>
