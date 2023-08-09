<script setup lang="ts">
import { onMounted, ref } from 'vue';

import useProjectStore from '@/store/ProjectStore';
import type { Project } from '@/typings/Project';
import { useRoute } from 'vue-router';
import CallToAction from '@/components/CallToAction.vue';

const projectStore = useProjectStore();
const route = useRoute();
const projectSelected = ref<Project>();

onMounted(() => {
  projectSelected.value = projectStore.projects.find(project => project.id === route.params.projectId);
})

const details = [
  {
    title: 'Nos ponemos en',
    word: 'contacto',
    description: 'En Construcciones y Acero, estamos listos para escuchar tus necesidades y brindarte soluciones a medida. Nuestro equipo técnico altamente capacitado y nuestro compromiso con la calidad nos distinguen. Juntos, haremos realidad tus proyectos constructivos.',
    button: 'Conversemos'
  }
]
</script>

<template>
  <div class="container">
    <div class="container-box">
      <p class="container-box-title">
        {{ projectSelected?.title }}
      </p>
      <p class="container-box-location">
        {{ projectSelected?.location }}
      </p>
      <p class="container-box-description">{{ projectSelected?.description[0] }}</p>
    </div>
    <img :src="projectSelected?.images[0]" :alt="projectSelected?.title">
  </div>
  <div
    v-if="projectSelected !== undefined"
    class="box">
    <img
      v-for="(image, index) in projectSelected?.images.slice(1, projectSelected.images.length)"
      class="box-img"
      :key="index"  
      :src="image" 
      :alt="projectSelected?.title">
  </div>
  <CallToAction :details="details" />
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: $desktop-upper-breakpoint;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; 
  gap: 5%;
  &-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media(min-width: $tablet-upper-breakpoint) {
      width: 45%;
    }
    &-title, &-location {
      font-size: $h2-font-size;
    }
    &-location {
      color: $gray;
    }
    &-description {
      font-size: $body-font-size;
      margin-bottom: 24px;
    }
  }
  img {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    border-radius: 8px;
    @media(min-width: $tablet-upper-breakpoint) {
      width: 45%;
    }
  }
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 24px 24px;
  @media(min-width: $tablet-upper-breakpoint) {
    padding-top: 24px;;
  }
  width: 100%;
  gap: 24px 5%;
  max-width: $desktop-upper-breakpoint;
  margin: 0 auto;
  .box-img {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    border-radius: 8px;
    @media(min-width: $tablet-upper-breakpoint) {
      width: 45%;
    }
  }
}
</style>