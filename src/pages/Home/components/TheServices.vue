<script setup lang="ts">
import ServicesContent from '@/pages/Home/components/ServicesContent.vue';

</script>

<template>
  <div 
    class="section">
    <p class="section-title-p">
        Construcciones y <span>acero</span>
    </p>
    <div class="section-detail">
      <p class="section-detail-p">
        Somos una empresa líder en el sector de la construcción. <br> * Realizamos diseños arquitectónicos, estructuras, eléctricos y sanitarios. <br>
        * Cálculos estructurales precisos y fabricación de estructuras de acero. <br>
        * Contamos con un equipo altamente capacitado y con experiencia. <br>
        * Creamos proyectos en hormigón, acabados y remodelaciones.
      </p>
    <div class="section-detail-container">
        <img 
        src="@/assets/projects/galpon-dentro.jpg" 
        alt=""
        class="imagen1"
        >
        <img 
        src="@/assets/man-in-work.png" 
        alt=""
        class="imagen2"
        >
        <img 
        src="@/assets/projects/casaPlaya.png" 
        alt=""
        class="imagen3"
        >
      </div>
    </div>
    <ServicesContent />
  </div>
</template>

<style lang="scss" scoped>
// general variables
$break-tablet: 820px;

.section {
  margin: 0 auto;
  max-width: $desktop-upper-breakpoint;
  padding: 20px;
  @media (min-width: $tablet-lower-breakpoint) {
    flex-direction: row;
  }
  &-title-p {
    width: 100%;
    font-size: 1.5rem;
    @media (min-width: $tablet-lower-breakpoint) {
      font-size: 4rem;
    }
    hyphens: auto;
    word-break: break-word; 
    margin: 20px 0;
    text-transform: uppercase;
    span {
      color: $yellow;
    }
  }
  &-detail {
    width: 100%;
    max-width: $desktop-lower-breakpoint;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
    @media (min-width: $tablet-lower-breakpoint) {
      align-items: center;
    }
    justify-content: space-around;
    align-items: center;
    margin-bottom: 40px;
    margin: 0 auto;
    &-p{
      font-size: 1rem;
      margin-bottom: 24px;
      @media (min-width: $tablet-lower-breakpoint) {
        max-width: 40%;
        font-size: 20px;
      }
    }
    &-container {
      display: grid;
      grid-template-columns: 1fr 1fr; 
      grid-template-rows: 1fr 1fr; 
      gap: 12px;
      margin-bottom: 40px;
      @media (min-width: $tablet-lower-breakpoint) {
      max-width: 50%;
      }
      .imagen1 {
        grid-column: 1 / 2; 
        grid-row: 1 / 2;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top center;
      }
      .imagen2 {
        grid-column: 2 / 3; 
        grid-row: 1 / 3;
        height: 100%;
        width: 100%; 
        object-fit: cover;
        object-position: top center;
      }
      .imagen3 {
        grid-column: 1 / 2; 
        grid-row: 2 / 3;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top center;
      }
    }
  }
}
</style>