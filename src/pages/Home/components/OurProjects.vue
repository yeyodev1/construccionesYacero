<script setup lang="ts">
import casa from '@/assets/projects/comedor.png';
import contenedor from '@/assets/projects/contenedor.png';
import fachadaPosterior from '@/assets/projects/fachadaPosterior.png';
import porton from '@/assets/projects/porton.png';
import galpon from '@/assets/services/galpon.png';

const projects = [
  {
    image: casa,
    name: 'casa'
  },
  {
    image: contenedor,
    name: 'contenedor'
  },
  {
    image: fachadaPosterior,
    name: 'fachada'
  },
  {
    image: porton,
    name: 'porton'
  },
  {
    image: galpon,
    name: 'galpon'
  },
]
</script>

<template>
  <div class="container">
    <h3 class="container-h3">Nuestro <span class="container-h3-span">proyectos</span></h3>
    <div class="container-section">
      <div 
        class="container-section-images"
        v-for="(project, index) in projects"
        :key="index">
        <router-link :to="`/projects/${project.name}`">
          <img :src="project.image">
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: $desktop-upper-breakpoint;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 40px;
  &-h3 {
    font-family: $font;
    color: $white;
    font-size: 1.5rem;
    margin-bottom: 36px ;
    @media (min-width: $tablet-lower-breakpoint) {
      font-size: $sizeExtraLarge;
    }
    &-span {
      color: $yellow;
    }
  }
  &-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 8px;
    max-width: $desktop-upper-breakpoint;
    margin: 0 auto;
    @media (min-width: $tablet-lower-breakpoint) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }
    &-images {
      width: 100%;
      img {
        width: 100%;
        height: 406px;
        object-fit: cover;
        object-position: top center;
      }
      &:nth-child(3) {
        grid-column: span 2;
        @media (min-width: $tablet-lower-breakpoint) {
          grid-column: 3;
        }
      }
      &:nth-child(4) {
        @media (min-width: $tablet-lower-breakpoint) {
          grid-column: span 2;
        }
      }
    }
  }
}
</style>