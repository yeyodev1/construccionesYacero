<script setup lang="ts">
import useProjectStore from '@/store/ProjectStore';
// import casa from '@/assets/projects/casa.png';

const projectStore = useProjectStore();


</script>

<template>
  <div class="container">
    <h3 class="container-h3">Nuestro <span class="container-h3-span">proyectos</span></h3>
    <div class="container-section">
      <div 
        class="container-section-images"
        v-for="(project, index) in projectStore.projects"
        :key="index">
        <router-link :to="`/projects/${project.id}`">
          <img :src="project.images[0]">
          <p class="container-section-images-title">{{ project.title }}</p>
          <p class="container-section-images-location">{{ project.location }}</p>
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
  position: relative;
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
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 24px;
    &::-webkit-scrollbar {
      height: 8px;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
      background: $gray;
      border-radius: 8px;

    }

    &::-webkit-scrollbar-thumb {
      background: $yellow;
      border-radius: 8px;

    }

    // to Firefox
    scrollbar-color: $yellow $gray;
    border-radius: 8px;

    @media(min-width: $mobile-upper-breakpoint) {
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: auto;
    }
    &-images {
      a {
        text-decoration: none;
      }
      img {
        width: 100%;
        @media(min-width: $mobile-upper-breakpoint) {
          width: 250px;
        }
      }
      &-title {
        font-size: $body-font-size;
        margin-top: 10px;
        margin-bottom: 4px;
      }
      &-location {
        color: $gray;
        font-size: $body-font-size;
      }
    }
  }
}
</style>