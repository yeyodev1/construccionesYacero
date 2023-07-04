<script setup lang="ts">
import CallToAction from '@/components/CallToAction.vue';
import OurProjects from '@/pages/Home/components/OurProjects.vue';
import TheHero from '@/pages/Home/components/TheHero.vue';
import TheServices from '@/pages/Home/components/TheServices.vue'

const details = [
  {
    title: 'tienes un proyecto en',
    word: 'mente',
    description: 'Construcciones y Acero lo hace posible. Diseños innovadores, calidad excepcional y resultados impresionantes. Confía en nosotros para convertir tu visión en realidad.',
    button: 'cotizar proyecto'
  }
]
const details2 = [
  {
    title: 'Nos ponemos en',
    word: 'contacto',
    description: 'En Construcciones y Acero, estamos listos para escuchar tus necesidades y brindarte soluciones a medida. Nuestro equipo técnico altamente capacitado y nuestro compromiso con la calidad nos distinguen. Juntos, haremos realidad tus proyectos constructivos.',
    button: 'Conversemos'
  }
]
</script>

<template>
  <div>
    <TheHero/>
    <TheServices/>
    <CallToAction :details="details" />
    <OurProjects/>
    <CallToAction :details="details2" />
  </div>
</template>

<style lang="scss" scoped></style>