<script setup lang="ts">
import ServicesContent from '@/components/services.content.vue'

</script>

<template>
  <div class="section">
    <p class="section-title-p">
        Construcciones y <span>acero</span>
    </p>
    <div class="section-detail">
      <p class="section-detail-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maxime aliquam commodi provident impedit unde vitae autem. Aperiam laboriosam, nostrum minus tempore animi quam possimus, eaque voluptatem totam dicta nam.
        Eaque illum similique numquam praesentium provident suscipit accusantium fugit vel natus in alias quod, necessitatibus nemo repudiandae tenetur veniam iure molestiae explicabo cumque qui debitis aspernatur quos dolores. Alias, repudiandae!
      </p>
      <div class="section-detail-container">
        <img 
        src="https://i.pinimg.com/236x/49/7b/15/497b151425ed398cd0e337244b3db457.jpg" 
        alt=""
        class="imagen1"
        >
        <img 
        src="@/assets/man-in-work.png" 
        alt=""
        class="imagen2"
        >
        <img 
        src="https://i.pinimg.com/236x/49/7b/15/497b151425ed398cd0e337244b3db457.jpg" 
        alt=""
        class="imagen3"
        >
      </div>
    </div>
    <ServicesContent />
  </div>
</template>

<style lang="scss" scoped>
.section {
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
    margin: 20px 0;
    width: 100%;
    span {
      color: $yellow;
    }
  }
  &-detail {
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: $tablet-lower-breakpoint) {
      flex-direction: row;
    }
    justify-content: space-around;
    align-items: center;
    
    &-p{
      font-size: 1rem;
      margin-bottom: 24px;
      @media (min-width: $tablet-lower-breakpoint) {
        max-width: 40%;
        font-size: 20px;
      }
    }
    &-container {
      height: 300px;
      display: grid;
      grid-template-columns: 1fr 1fr; 
      grid-template-rows: 1fr 1fr; 
      gap: 12px;
      @media (min-width: $tablet-lower-breakpoint) {
      max-width: 40%;
      }
      .imagen1 {
        grid-column: 1 / 2; 
        grid-row: 1 / 2;
        height: 150px;
        width: 130px;
      }
      .imagen2 {
        grid-column: 2 / 3; 
        grid-row: 1 / 3;
        height: 100%;
        width: 130px; 
        object-fit: cover;
        object-position: top center;
      }
      .imagen3 {
        grid-column: 1 / 2; 
        grid-row: 2 / 3;
        height: 150px;
        width: 130px;
      }
    }
  }
}
</style>