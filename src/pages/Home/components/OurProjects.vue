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
        v-for="(project, index) in projectStore.projectsInIndex"
        :key="index">
        <router-link :to="`/projects/${project.id}`">
          <img :src="project.images[0]">
          <p>{{ project.title }}</p>
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
    display: flex;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    &-images {
      width: 100%;
      position: relative;
      @media (min-width: $tablet-lower-breakpoint) {
        width: 45%;
      }
      img {
        width: 100%;
        height: 100%;
        filter: brightness(0.5)
      }
      p {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: $sizeLarge;
        font-weight: 500;
        background: rgba(200, 225, 225, 0.6);
        padding: 8px;
        border-radius: 8px;
      }
    }
  }
}
</style>