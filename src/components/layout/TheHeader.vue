<script setup lang="ts">
import CrushButton from '@nabux-crush/crush-button';
import useMenuStore from '@/store/MenuStore';

const menuStore = useMenuStore()

const buttons = [
  {
    name: 'Nosotros',
    link: '/about'
  },
  {
    name: 'Proyectos',
    link: '/projects'
  },
  {
    name: 'Contacto',
    link: '/contact'
  },
  {
    name: 'Cotizar proyecto',
    link: 'contact'
  },
];

function toggleMenu() {
	menuStore.toggleMenu();
}

</script>

<template>
	<div class="header">
		<router-link 
			to="/"
			class="header-container"
			>
			<img
				src="@/assets/construccionesyacero-logo.png"
				alt="construcciones y acero"
				class="header-container-image" />
		</router-link>
		<button
			class="header-button"
			@click="toggleMenu">
			<i class="fa-solid fa-bars" />
		</button>
		<div class="header-details">
			<router-link :to="button.link" v-for="(button, index) in buttons" :key="index">
				<CrushButton class="header-details-button" variant="secondary" :text="button.name" />
			</router-link>
		</div>
	</div> 
</template>


<style lang="scss" scoped>
	.header {
		padding: 12px 24px;
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		max-width: $desktop-upper-breakpoint;
		margin: 0 auto;
		&-container {
			&-image {
				width: 120px;
			}
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
				justify-content: space-between;
				align-items: center;
			}
			a &-button {
				border: none;
				font-family: $font;
				font-weight: 700;
				&:hover {
					border: none;
					font-weight: 700;
				}
			}
			a:last-child &-button:last-child{
				background-color: $yellow;
				color: black;
				&:hover {
					background-color: $hover;
					font-family: $font;
					font-weight: 700;
				}
			}
		}
	}
</style>
