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

const materials = [
  {
    material: 'Zonas de alta corrosión'
  },
  {
    material: 'Galpones'
  },
  {
    material: 'Mezzanines'
  },
  {
    material: 'Vivienda'
  },
  {
    material: 'Edificios'
  },
  {
    material: 'Puentes'
  },
  {
    material: 'Hangares'
  },
  {
    material: 'Pisos para bodegas'
  },
  {
    material: 'Pisos para equipos especiales'
  },
  {
    material: 'Torres elevadas'
  },
  {
    material: 'Tanques'
  },
  {
    material: 'Tuberías'
  },
  {
    material: 'Cerramiento de malla'
  },
  {
    material: 'Portones'
  },
  {
    material: 'Cubiertas de Stilpanel'
  },
  {
    material: 'Cubiertas de eternit'
  },
  {
    material: 'Canalones galvanizados'
  },
  {
    material: 'Estructuras de madera con acoples de acero inoxidable'
  }
]
</script>

<template> 
  <div>
    <p class="title">
      Nuestros <span>Servicios</span>
    </p>
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
  <div>
    <p class="title">
      Fabricamos e <span> instalamos </span> estructuras de acero <span>en</span>:
    </p>
    <div 
      class="container"
      >
      <ul
        v-for="(material, index) in materials.slice(0, materials.length/2)"
        :key="index"
        class="container-list">
        <li>
          {{ material.material }}
        </li>
      </ul>
    </div>
    <div 
      class="container"
      >
      <ul
        class="container-list"
        v-for="(material, index) in materials.slice(materials.length/2)"
        :key="index">
        <li>
          {{ material.material }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  width: 100%;
  margin: 32px 0;
  font-size: $h2-font-size;
  color: $white;
  @media(min-width: $tablet-lower-breakpoint ) {
  font-size: $h1-font-size;
  }
  span {
    color: $yellow;
  }
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