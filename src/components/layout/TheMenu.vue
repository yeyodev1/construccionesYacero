<script setup lang="ts">
import useMenuStore from '@/store/MenuStore';
import CrushButton from '@nabux-crush/crush-button';


const buttons = [
  {
    name: 'Nosotros',
    link: '/about',
  },
  {
    name: 'Contacto',
    link: '/contact',
  },
  {
    name: 'Proyectos',
    link: '/projects',
  },
  {
    name: 'Cotizar Proyecto',
    link: '/contact',
  },
]

function toggleMenu() {
	menuStore.toggleMenu();
}

const menuStore = useMenuStore();
</script>

<template>
  <div class="menu" :class="{'is-open' : menuStore.isOpen }">
    <div class="menu-close">
      <button class="menu-close-button" :class="{'is-closed' : !menuStore.isOpen}" @click="toggleMenu">
        <i class="fa-sharp fa-solid fa-xmark" />
      </button>
    </div>
    <div class="menu-details">
      <router-link 
        :to="button.link" 
        v-for="(button, index) in buttons" 
        :key="index"
        class="menu-details-link"
        @click="toggleMenu"
      >
				<CrushButton class="menu-details-link-button" variant="secondary" :text="button.name" />
			</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  padding: 20px;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  transition-property: all;
  transition-duration: 300ms;
  z-index: 30;
  right: 100%;
  background-color: $black;
  &-close {
    display: flex;
    justify-content: end;
    &-button {
      color: $white;
      background: transparent;
      padding: 16px;
      border: none;
    }
  }
  &-details {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 12px;
    &-link {
      &-button {
        color: $white;
        width: 100%;
        text-align: left;
        border: none;
        border-bottom: 1px solid $yellow;
        &:hover {
          border: none
        }
      }
    }
  }
}
.is-open {
  right: 0;
}
.is-closed {
  right: 100%;
}
</style>