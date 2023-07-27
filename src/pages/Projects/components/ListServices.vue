<script setup lang="ts">
const services = [
  {
    service: 'Instalaciones eléctricas'
  },
  {
    service: 'Acabados finales'
  },
  {
    service: 'Cimentaciones'
  },
  {
    service: 'Empacadoras'
  },
  {
    service: 'Paredes'
  },
  {
    service: 'Estaciones de bombeo'
  },
  {
    service: 'Remodelación'
  },
  {
    service: 'Cisternas'
  },
  {
    service: 'Vivienda'
  },
]
</script>

<template> 
  <div>
    <div 
      class="container"
      >
      <ul
        v-for="(service, index) in services.slice(0, 5)"
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
        v-for="(service, index) in services.slice(5, 10)"
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