<script setup>
import CrushButton from '@nabux-crush/crush-button'

const props = defineProps({
  details: {
    type: Object, 
    requiered: true,
  }
})
</script>

<template>
  <div 
    class="container"
    v-for="(detail, index) in details" :key="index"
  >
    <h1 class="container-title">¿{{detail.title}} <span>{{ detail.word }}</span>?</h1>
    <p class="container-p">{{ detail.description }}</p>
    <CrushButton 
      class="container-button"
      variant="primary"
      :text="detail.button"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  @media (min-width: $tablet-lower-breakpoint) {
    margin-bottom: 0;
  }
  &-title {
    color: $white;
    font-family: $font;
    font-weight: 500;
    text-transform: uppercase;
    font-size: $sizeLarge;
    text-align: center;
    margin-bottom: 8px;
    @media (min-width: $tablet-lower-breakpoint) {
      font-size: $sizeExtraLarge;
    }
    span {
      color: $yellow;
    }
  }
  &-p {
    font-size: $size;
    text-align: center;
    max-width: $desktop-lower-breakpoint;
    margin: 0 auto;
    margin-bottom: 36px;
    @media(min-width: $tablet-lower-breakpoint) {
      font-size: 20px;
    }
  }
  &-button {
    background-color: $yellow;
    font-family: $font;
    border: none;
    &:hover{
      background-color: $yellow;
      border: none;
    }
  }
}
</style>