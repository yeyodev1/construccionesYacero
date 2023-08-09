<script setup lang="ts">
import galpon from '@/assets/projects/sika-galpon-42mts.jpg';
import gym from '@/assets/projects/edificio-orquideas.jpg';
import banio from '@/assets/services/baño.png';
import planos from '@/assets/services/planos.png';
import asesoria from '@/assets/services/asesoria.png';
import permisos from '@/assets/services/permisosdeconstruccion.png';


const services = [
  {
    src: galpon,
    service: 'Estructuras'
  },
  {
    src: gym,
    service: 'Construcciones'
  },
  {
    src: banio,
    service: 'Remodelaciones'
  },
  {
    src: planos,
    service: 'Planos'
  },
  {
    src: asesoria,
    service: 'Asesoría'
  },
  {
    src: permisos,
    service: 'Permisos de construcción'
  },
]
</script>

<template>
  <div class="section-content" id="services">
    <p class="section-content-p">
      Nuestros <br> <span>servicios</span>
    </p>
    <div class="section-content-services">
      <div 
        v-for="(service, index) in services"
        :key="index"
        class="container"
        >
        <img 
          :src="service.src" 
          :alt="service.service"
        >
        <p class="container-content">
          {{ service.service }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-content {
  &-p {
    text-transform: uppercase;
    font-size: $sizeLarge;
    margin-bottom: 36px;
    span {
      color: $yellow;
    }
    @media (min-width: $tablet-lower-breakpoint) {
      font-size: $sizeExtraLarge;
    }
  }
  &-services {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    .container {
      position: relative;
      &:after {
        content: '';
        background: linear-gradient(0deg, #000 0%, #000 100%), lightgray 50% / cover no-repeat;
        opacity: 0.5;
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
      }
      img {
        width: 258px;
        height: 310px;
        position: relative;
        @media (min-width: $tablet-lower-breakpoint) {
          width: 312px;
          height: 310px;
        }
      }
      &-content {
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