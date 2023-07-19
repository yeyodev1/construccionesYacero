<template>
  <div class="container">
    <p class="container-title">
      Titulo del proyecto
    </p>
    <div class="container-section">
      <img 
        class="container-section-img"
        src="https://i.pinimg.com/236x/01/92/02/0192026d11ae05f24f44622bc8dda9ae.jpg" 
        alt=""
        >
    </div>
    <div class="container-section2">
      <p class="container-section2-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde laudantium suscipit qui perspiciatis laboriosam necessitatibus possimus odio illo itaque! Quaerat magni ut vel tempore maiores non odit porro reprehenderit.
      </p>
      <img 
        class="container-section2-img"
        src="https://i.pinimg.com/236x/01/92/02/0192026d11ae05f24f44622bc8dda9ae.jpg" 
        alt=""
        >
    </div>
    <div class="container-section3">
      <p class="container-section3-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde laudantium suscipit qui perspiciatis laboriosam necessitatibus possimus odio illo itaque! Quaerat magni ut vel tempore maiores non odit porro reprehenderit.
      </p>
      <img 
        class="container-section3-img"
        src="https://i.pinimg.com/236x/01/92/02/0192026d11ae05f24f44622bc8dda9ae.jpg" 
        alt=""
        >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 24px;
  width: 100%;
  max-width: $desktop-upper-breakpoint;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media(min-width: $desktop-lower-breakpoint) {
    gap: 40px;
  }
  &-title {
    font-size: $h2-font-size;
    @media (min-width: $desktop-lower-breakpoint) {
      font-size: $h1-font-size;
    }
  }
  &-section {
    display: flex;
    flex-direction: column;
    gap: 40px;
    &-img {
      height: 144px;
      width: 100%;
      height: 108px;
      object-fit: cover;
      object-position: top center;
      @media (min-width: $tablet-lower-breakpoint) {
        height: 200px;
      }
      @media (min-width: $desktop-lower-breakpoint) {
        height: 400px;
      }
    }
  }
  &-section2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    &-img {
      height: 144px;
      width: 100%;
      @media(min-width: $tablet-lower-breakpoint) {
        max-width: 45%;
      }
      height: 406px;
      object-fit: cover;
      object-position: top center;
    }
    &-description {
      font-size: $body-font-size;
      @media(min-width: $tablet-lower-breakpoint) {
        max-width: 50%;
      }
      @media(min-width: $desktop-upper-breakpoint) {
        font-size: 20px
      }
    }
  }
  &-section3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    &-img {
      height: 144px;
      width: 100%;
      @media(min-width: $tablet-lower-breakpoint) {
        max-width: 45%;
      }
      height: 406px;
      object-fit: cover;
      object-position: top center;
    }
    &-description {
      font-size: $body-font-size;
      @media(min-width: $tablet-lower-breakpoint) {
        max-width: 50%;
      }
      @media(min-width: $desktop-upper-breakpoint) {
        font-size: 20px
      }
    }
    @media(min-width: 600px) {
      flex-direction: row-reverse;
    }
  }
}
</style>