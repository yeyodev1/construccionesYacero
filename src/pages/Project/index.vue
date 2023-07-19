<script setup>
const projects = [
  {
    image: 'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
    name: 'hola'
  },
  {
    image: 'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
    name: 'hola'
  },
  {
    image: 'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
    name: 'hola'
  },
  {
    image: 'https://i.pinimg.com/236x/b6/28/c6/b628c6c21875d3b4e27472e86049f5e5.jpg',
    name: 'hola'
  },
]
</script>

<template>
  <div class="container">
    <p class="container-title">
      Nuestros <span>proyectos</span>
    </p>
    <div class="super-container">
      <div
      class="super-container-project"
      v-for="(project, index) in projects"
      :key="index">
      <router-link to="/">
        <img 
          class="super-container-project-img"
          :src="project.image" 
          :alt="project.name">
      </router-link>
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
  .super-container {
    width: 100%;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    &-project {
      width: 100%;
      @media(min-width: $mobile-upper-breakpoint) {
        width: 45%;
        height: 400px;
      }
      &-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
      }
    }
  }
}
</style>