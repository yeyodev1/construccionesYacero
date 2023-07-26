<script setup lang="ts">
import useProjectStore from '@/store/ProjectStore';

const projectStore = useProjectStore()
</script>

<template> 
  <div>
    <div 
      class="container"
      >
      <ul
        v-for="(service, index) in projectStore.services"
        :key="index"
        class="container-list">
        <li>
          {{ service.service }}
        </li>
      </ul>
    </div>
    <div 
      class="container"
      >
      <ul
        class="container-list"
        v-for="(service, index) in projectStore.services2"
        :key="index">
        <li>
          {{ service.service }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: saddlebrown;
}
div {
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  @media(min-width: $tablet-lower-breakpoint ) {
    justify-content: left;
  }
  .container {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  @media(min-width: $tablet-lower-breakpoint ) {
    width: 40%;
  }
  &-list {
    display: flex;
    list-style-type: none;
    gap: 4px;
    color: $white;
    font-size: $h2-font-size;
    padding: 0;

    li {
      text-align: left;
    }
    &::before {
      content: "•";
      color: $white;
    }
  }
}
}
</style>