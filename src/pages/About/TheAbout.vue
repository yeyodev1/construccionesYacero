<script setup>
import CallToAction from "@/components/CallToAction.vue"

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
    <h2 class="container-h2">nosotros <span>somos</span></h2>
    <div class="container-section">
      <div class="container-section-details">
        <h4 class="container-section-details-h4">Lorem ipsum dolor sit amet.</h4>
        <p class="container-section-details-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore olor sit amet, consectetur adipiscing elit, sed do eiusmod temolor sit amet, consectetur adipiscing elit, sed do eiusmod tem </p>
      </div>  
        <img 
        src="/src/assets/man-in-work.png"
        alt=""
        class="container-section-image"
        >
    </div>
    <div class="container-section2">
      <div class="container-section2-details2">
        <h4 class="container-section2-details2-h4-2">Lorem ipsum dolor sit amet.</h4>
        <p class="container-section2-details2-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore olor sit amet, consectetur adipiscing elit, sed do eiusmod temolor sit amet, consectetur adipiscing elit, sed do eiusmod tem </p>
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
  &-h2 {
    font-size: $font;
    text-transform: uppercase;
    color: $white;
    font-size: $sizeLarge;
    font-weight: 500;
    hyphens: auto;
    word-break: break-word;
    margin-bottom: 48px;
    @media (min-width: $tablet-lower-breakpoint) {
      font-size: $sizeExtraLarge;
      margin: 76px 0;
    } 
    & span {
      color: $yellow;
    }
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
    }
  }
  &-section2 {
    max-width: $desktop-upper-breakpoint;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    @media(min-width: $tablet-lower-breakpoint) {
      flex-direction: row-reverse;
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