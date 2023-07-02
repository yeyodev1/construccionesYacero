<script setup lang="ts">
import casa from '@/assets/projects/casa.png';
import bathroom from '@/assets/projects/bathroom.png';
import casota from '@/assets/projects/casota.png';
import sala from '@/assets/projects/sala.png';
import galpon from '@/assets/services/galpon.png';

const projects = [
  {
    image: casa
  },
  {
    image: bathroom
  },
  {
    image: casota
  },
  {
    image: sala
  },
  {
    image: galpon
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
      :key="project"
      >
      <img :src="project.image">
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
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