<script setup>
import CrushButton from '@nabux-crush/crush-button'

</script>

<template>
  <div class="hero">
    <p class="hero-p">
      Hacemos tu proyecto realidad
    </p>
    <router-link to="/contact">
      <CrushButton
        class="hero-cta"
        variant="primary"
        text="Cotizar proyecto"
      />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url('@/assets/heroImage.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-position: top center;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  &-p {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-top: 40vh;
    margin-bottom: 24px;
    padding: 8px;
    border-radius: 8px;
    background: rgba(200, 225, 225, 0.5);
  }
  &-cta {
    background-color: $yellow;
    border: none;
    font-family: $font;
    font-size: 1rem;
    &:hover {
      background-color: $hover;
      border: none;
    }
  }
}
</style>