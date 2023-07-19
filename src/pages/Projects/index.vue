<script setup lang="ts">
import ListServices from '@/components/ListServices.vue';
import useProjectStore from '@/store/ProjectStore';

const projectStore = useProjectStore();
</script>

<template>
  <div class="container">
    <p class="container-title">
      Nuestros <span>proyectos</span>
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
          <p>{{ project.title }}</p>
      </router-link>
    </div>
    <div class="container-services">
      <p>
        Nuestros <span> servicios </span> 
      </p>
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
    span {
      color: $yellow;
    }
  }
  &-services {
    width: 100%;
    p {
      text-align: center;
      font-size: $h2-font-size;
      margin-bottom: 36px;
      span {
        color: $yellow;
      }
    }
  }
  .super-container {
    width: 100%;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    &-project {
      width: 100%;
      position: relative;
      @media(min-width: $mobile-upper-breakpoint) {
        width: 45%;
        height: 400px;
      }
      &-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
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