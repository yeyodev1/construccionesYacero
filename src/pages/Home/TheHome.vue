<script setup lang="ts">
import CallToAction from '@/components/CallToAction.vue';
import OurProjects from '@/pages/Home/components/OurProjects.vue';
import TheHero from '@/pages/Home/components/TheHero.vue';
import TheServices from '@/pages/Home/components/TheServices.vue'

const details = [
  {
    title: 'tienes un proyecto en',
    word: 'mente',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique',
    button: 'cotizar proyecto'
  }
]
const details2 = [
  {
    title: 'Nos ponemos en',
    word: 'contacto',
    description: 'Cotiza tu proyecto o pongámonos en contacto, nos encantaría conversar contigo y hacer tu proyecto realidad.',
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