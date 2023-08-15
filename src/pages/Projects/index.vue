<script setup lang="ts">
import ListServices from '@/pages/Projects/components/ListServices.vue';
import useProjectStore from '@/store/ProjectStore';

const projectStore = useProjectStore();
</script>

<template>
  <div class="container">
    <p class="container-title">
      Nuestros <span>Proyectos</span>
    </p>
    <div class="super-container">
      <div
        class="super-container-project"
        v-for="(project, index) in projectStore.projects"
        :key="index">
      <router-link :to="`/projects/${project.id}`">
        <img 
          class="super-container-project-img"
          :src="project.images[0]" 
          :alt="project.title">
        <p class="super-container-project-title">{{ project.title }}</p>
        <p class="super-container-project-location">{{ project.location }}</p>
      </router-link>
    </div>
    <div class="container-services">
      <ListServices />
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 24px;
  margin: 0 auto;
  max-width: $desktop-upper-breakpoint;
  &-title {
    margin-top: 32px;
    margin-bottom: 24px;
    font-size: $h2-font-size;
    color: $white;
    @media(min-width: $tablet-lower-breakpoint ) {
      font-size: $h1-font-size;
    }
    span {
      color: $yellow;
    }
  }
  &-services {
    width: 100%;
  }
  .super-container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    padding-bottom: 24px;
    &-project {
      width: 100%;
      max-width: 250px;
      @media(min-width: $tablet-upper-breakpoint) {
          width: 30%;
      }
      a {
        text-decoration: none;
      }
      img {
        height: 170px;
        width: 100%;
        border-radius: 8px;
        object-fit: cover;
      }
      &-title {
        font-size: $body-font-size;
      }
      &-location {
        color: $gray;
        font-size: $body-font-size;

      }
    }
  }
}
</style>