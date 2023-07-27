<script setup>
import CallToAction from '@/components/CallToAction.vue';
import galpon from '@/assets/projects/galpon-fuera.jpg';

const details = [
  {
    title: 'Nos ponemos en',
    word: 'contacto',
    description: 'Cotiza tu proyecto o pongámonos en contacto, nos encantaría conversar contigo y hacer realidad tu proyecto',
    button: 'quiero contactarlos'
  }
]
</script>

<template>
  <div class="container">
    <div class="container-section">
      <div class="container-section-details">
        <h2 class="container-section-details-h2">nosotros <span>somos</span></h2>
        <h4 class="container-section-details-h4">Construcciones y acero.</h4>
        <p class="container-section-details-p">Líderes en construcción. Equipo técnico y obrero calificado con experiencia en diseño arquitectónico y cálculos estructurales. Fabricamos estructuras de calidad siguiendo estándares y normas. Seguridad y excelencia en cada proyecto. Confía en nosotros para hacer realidad tus proyectos constructivos.</p>
      </div>  
        <img 
        :src="galpon"
        alt=""
        class="container-section-image"
        >
    </div>
    <div class="container-section2">
      <div class="container-section2-details2">
        <h4 class="container-section2-details2-h4-2">Recorrido</h4>
        <p class="container-section2-details2-p2">Contamos con más de 30 años de experiencia en proyectos, somos tu elección segura. Nuestro compromiso con la excelencia se refleja en cada construcción que realizamos. Confía en nosotros para llevar tus proyectos a un nivel superior</p>
      </div>  
        <img 
        src="/src/assets/man-in-work.png"
        alt="" 
        class="container-section2-image2"
        >
    </div>
    <CallToAction :details="details"/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media(min-width: $desktop-lower-breakpoint) {
    margin-top: 40px;
  }
  &-section {
    max-width: $desktop-upper-breakpoint;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-bottom: 36px;
    @media(min-width: $desktop-lower-breakpoint) {
      flex-direction: row;
      margin-bottom:  80px;
    }
    &-details {
      max-width: $desktop-lower-breakpoint;
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px;
      &-h2 {
        font-size: $font;
        text-transform: uppercase;
        color: $white;
        font-size: $sizeLarge;
        font-weight: 500;
        hyphens: auto;
        word-break: break-word;
        margin-bottom: 36px;
        @media (min-width: $tablet-lower-breakpoint) {
          font-size: $sizeExtraLarge;
        } 
        & span {
          color: $yellow;
        }
      }
      &-p {
        font-size: $size;
        @media(min-width: $tablet-lower-breakpoint) {
          font-size: 1.25rem;
          width: 100%;
        }
      }
      &-h4 {
      font-family: $font;
      text-align: left;
      color: $white;
      font-size: $size;
      font-weight: 700;
    }
    }
    
    &-image {
      height: 284px;
      object-fit: cover;
      object-position: top center;
      width: 100%;
      @media (min-width: $tablet-lower-breakpoint) {
        height: 264px;
      }
      @media (min-width: $desktop-lower-breakpoint) {
        height: 412px;
      }
    }
  }
  &-section2 {
    max-width: $desktop-upper-breakpoint;
    margin: 0 auto;
    margin-bottom: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    @media(min-width: $tablet-lower-breakpoint) {
      flex-direction: row-reverse;
      margin-bottom: 120px;
    }
    &-details2 {
      max-width: $desktop-lower-breakpoint;
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px;
      &-p2 {
        font-size: $size;
        @media(min-width: $tablet-lower-breakpoint) {
          font-size: 1.25rem;
          width: 100%;
        }
      }
      &-h4-2 {
      font-family: $font;
      text-align: left;
      color: $white;
      font-size: $size;
      font-weight: 700;
      }
    }
    &-image2 {
      height: 284px;
      object-fit: cover;
      object-position: top center;
      width: 100%;
      @media (min-width: $tablet-lower-breakpoint) {
        height: 264px;
      }
    }
  }
}
</style>