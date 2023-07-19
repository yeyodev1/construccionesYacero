<script setup lang="ts">
import { onMounted, ref } from 'vue';

import useProjectStore from '@/store/ProjectStore';
import type { Project } from '@/typings/Project';
import { useRoute } from 'vue-router';

const projectStore = useProjectStore();
const route = useRoute();
const projectSelected = ref<Project>();

onMounted(() => {
  projectSelected.value = projectStore.projects.find(project => project.id === route.params.projectId);
})
</script>


<template>
  <div class="container">
    <p class="container-title">
      {{ projectSelected?.title }}
    </p>
    <div class="container-section">
      <img 
        class="container-section-img"
        :src="projectSelected?.images[0]" 
        :alt="projectSelected?.title"
        >
    </div>
    <div class="container-section2">
      <p class="container-section2-description">
        {{ projectSelected?.description  }}
      </p>
      <img 
        class="container-section2-img"
        :src="projectSelected?.images[1]" 
        :alt="projectSelected?.title"
        >
    </div>
    <div class="container-section3">
      <p class="container-section3-description">
        {{ projectSelected?.description }}
      </p>
      <img 
        class="container-section3-img"
        :src="projectSelected?.images[2]" 
        :alt="projectSelected?.title"
        >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 24px;
  width: 100%;
  max-width: $desktop-upper-breakpoint;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media(min-width: $desktop-lower-breakpoint) {
    gap: 40px;
  }
  &-title {
    font-size: $h2-font-size;
    @media (min-width: $desktop-lower-breakpoint) {
      font-size: $h1-font-size;
    }
  }
  &-section {
    display: flex;
    flex-direction: column;
    gap: 40px;
    &-img {
      height: 144px;
      width: 100%;
      height: 108px;
      object-fit: cover;
      object-position: top center;
      @media (min-width: $tablet-lower-breakpoint) {
        height: 200px;
      }
      @media (min-width: $desktop-lower-breakpoint) {
        height: 400px;
      }
    }
  }
  &-section2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    &-img {
      height: 144px;
      width: 100%;
      @media(min-width: $tablet-lower-breakpoint) {
        max-width: 45%;
      }
      height: 406px;
      object-fit: cover;
      object-position: top center;
    }
    &-description {
      font-size: $body-font-size;
      @media(min-width: $tablet-lower-breakpoint) {
        max-width: 50%;
      }
      @media(min-width: $desktop-upper-breakpoint) {
        font-size: 20px
      }
    }
  }
  &-section3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    &-img {
      height: 144px;
      width: 100%;
      @media(min-width: $tablet-lower-breakpoint) {
        max-width: 45%;
      }
      height: 406px;
      object-fit: cover;
      object-position: top center;
    }
    &-description {
      font-size: $body-font-size;
      @media(min-width: $tablet-lower-breakpoint) {
        max-width: 50%;
      }
      @media(min-width: $desktop-upper-breakpoint) {
        font-size: 20px
      }
    }
    @media(min-width: 600px) {
      flex-direction: row-reverse;
    }
  }
}
</style>