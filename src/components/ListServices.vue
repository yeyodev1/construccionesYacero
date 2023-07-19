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
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-around;
  .container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  &-list {
    display: flex;
    list-style-type: none;
    gap: 4px;
    color: $white;
    font-size: $h2-font-size;
    padding: 0;

    li {
      text-align: center;
    }
    &::before {
      content: "•";
      color: $yellow;
    }
  }
}
}
</style>