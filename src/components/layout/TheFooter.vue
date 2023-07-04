<script setup lang="ts">

const icons = [
  
  {
    link: 'https://www.facebook.com/construccionesyacero',
    iconClass: '<i class="fa-brands fa-facebook" />'
  },
  {
    link: 'https://www.instagram.com/construccionesyacero/',
    iconClass: '<i class="fa-brands fa-instagram" />'
  },
  {
    link: 'https://walink.co/8596e5',
    iconClass: '<i class="fa-brands fa-whatsapp"  />'
  },
]
const contacts = [
  {
    link: 'tel:+593999097965',
    iconClass: '<i class="fa-solid fa-phone" />',
    text: '099 909 7965'
  },
  {
    link: '/',
    iconClass: '<i class="fa-solid fa-envelope" />',
    text: 'robmoncayo62@gmail.com'
  }
]
const services = [
  {
    service: 'Estructuras'
  },
  {
    service: 'Construcciones'
  },
  {
    service: 'Remodelaciones'
  },
  {
    service: 'Planos'
  },
  {
    service: 'Asesoría'
  },
  {
    service: 'Permisos de contrucción'
  },
]

function getYear(): number {
  const date = new Date();
  const currentYear = date.getFullYear();
  return currentYear;
}
</script>

<template>
  <footer class="footer">
    <div class="footer-first-section">
      <img src="@/assets/construccionesyacero-logo.png" alt="construcciones y acero">
      <div class="footer-first-section-social">
        <p class="footer-first-section-social-cta">Siguenos en redes</p>
        <div class="social-media">
          <a v-for="(icon, index) in icons" :key="index" :href="icon.link" target="_blank">
            <span v-html="icon.iconClass"></span>      
          </a>
        </div>
      </div>
    </div>
    <div class="footer-second-section">
      <p class="footer-second-section-p">Información de contacto</p>
      <a v-for="contact in contacts" :href="contact.link"> 
        <span v-html="contact.iconClass"></span>
        <span class="text">{{ contact.text }}</span> 
      </a>
    </div>
    <div class="footer-third-section">
      <p class="footer-third-section-p">Servicios</p>
      <div v-for="(service, index) in services" :key="index" class="footer-third-section-services-container">
        <p> {{ service.service }}</p>
      </div>
    </div>
    <div class="footer-fourth-section">
      <div class="footer-fourth-section-details">
        <p>Copyright</p>
        <i class="fa-regular fa-copyright" />
        <p class="footer-fourth-section-details-author">
          <a href="https://www.yeyo.dev/" target="_blank">YeyoDev {{ getYear() }}</a> - Todos los derechos reservados
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

.footer {
  max-width: $desktop-upper-breakpoint;
  margin: 0 auto;
  margin-top: 88px;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  @media (min-width: $desktop-lower-breakpoint ){
    margin-top:  124px;
    justify-content: space-between;
    align-items: center;
  }
  &-first-section {
    margin-bottom: 48px;
    &-social {
      margin-top: 24px;
      width: 100%;
      display: flex;
      flex-direction: column; 
      align-items: flex-start;

      &-cta {
        font-size: 1rem;
        margin-bottom: 12px;   
      }
      .social-media {
        display: flex;
        justify-content: flex-start;
        gap: 12px;
        a {
          text-decoration: none;
          span {
            color: $yellow;
            font-size: 24px;
          }
        }
      }
    }
  }
  &-second-section {
    margin-bottom: 24px;
    &-p {
      font-size: 16px;
      color: $yellow;
      font-family: $font;
      font-weight: 500;
      margin-bottom:  14px;   
    }
    a {
      color: $yellow;
      text-decoration: none;
      display: flex;
      gap: 8px;
      margin-bottom: 12px;
      .text {
        color: $white;
      }
    }
    & a:last-child {
      margin-bottom: 0;
    }
  }
  &-third-section {
    margin-bottom: 32px;
    &-p {
      color: $yellow;
      font-size: 1rem;
    }
    &-services-container {
      p {
        font-size: 1rem;
      }
    }
  }
  &-fourth-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &-details {
      color: $white;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 8px;
      p {
        font-size: 1rem;
        a {
          font-size: 1rem;
          color: $white;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
