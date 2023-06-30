<script setup></script>

<template>
  <div class="form">
    <h3 class="form-title">¿Nos ponemos en <span>contacto</span>?</h3>
    <p class="form-p">Cotiza tu proyecto o pongámonos en contacto, nos encantaría conversar contigo y hacer tu proyecto realidad.</p>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  &-title {
    font-family: $font;
    color: $white;
    font-weight: 500;
    font-size: $sizeLarge;
    text-align: center;
    span {
      color: $yellow;
    }
  }
  &-p {
    text-align: center;
    @media(min-width: $tablet-lower-breakpoint) {
      font-size: $sizeLarge;
    }
  }
}
</style>