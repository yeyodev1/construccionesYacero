<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import emailjs from 'emailjs-com';
import CrushButton from '@nabux-crush/crush-button';
import CrushTextField from '@nabux-crush/crush-text-field';
import CrushTextArea from '@nabux-crush/crush-text-area';

const selectedOption = ref('')
const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
})

const rules = {
  validateName: [
    {
      validate: (value: string) => value.length >= 10,
      message: 'Por favor, coloca tu nombre completo'
    }
  ],
  validateNumber: [
    {
      validate: (value: string) => value.length >= 10,
      message: 'Por favor, ingresa tu número completo'
    }
  ],
  validateEmail: [
    {
      validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Por favor, ingresa un correo válido'
    }
  ]
}

const options = [
  {
    option: 'Contrucción desde cero'

  },
  {
    option: 'Expansión y remodelación'
  },
  {
    option: 'Obra de infraestructura'
  },
  {
    option: 'Mantenimiento y reparación'
  },
  {
    option: 'Otros'
  },
]

const formIsValid = computed(() => {
  return (
    form.name !== '' &&
    form.phone !== '' &&
    form.email !== '' &&
    form.message !== '' &&
    selectedOption.value !== '' &&
    rules.validateName.every(rule => rule.validate(form.name)) &&
    rules.validateNumber.every(rule => rule.validate(form.phone)) &&
    rules.validateEmail.every(rule => rule.validate(form.email))
  )
})


const resetInputs = () => {
  form.name = '';
  form.phone = '';
  form.email = '';
  form.message = '';
}


async function sendEmail() {
  const mail = {
    from_name: form.name,
    from_email: form.email,
    message: form.message
  }
  try {
    await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      mail,
      import.meta.env.VITE_PUBLIC_KEY,
    );
    alert('correo enviado');
    resetInputs();
  } catch (error) {
    console.error('CANNOR_SEND_EMAIL', error)
  }
}

</script>

<template>
  <div class="form">
    <h3 class="form-title">¿Nos ponemos en <span>contacto</span>?</h3>
    <p class="form-p">¡Completa el formulario y construyamos juntos tus sueños! En Construcciones y Acero, convertimos tus ideas en realidades estructurales.</p>
    <form class="form-container">
      <CrushTextField
        v-model="form.name"  
        class="form-container-form"
        label="Nombres y apellidos" 
        placeholder="Diego Reyes"
        :valid-rules="rules.validateName"
      />
      <CrushTextField
        v-model="form.phone"  
        class="form-container-form"
        label="Número celular" 
        type="number"
        placeholder="0945454545"
        :valid-rules="rules.validateNumber"
      />
      <CrushTextField
        v-model="form.email"  
        class="form-container-form"
        label="Correo" 
        placeholder="diego@dominio.com"
        :valid-rules="rules.validateEmail"
      />
      <label 
        for=""
        class="form-container-label"  
      >
        Tipo de proyecto
        <select 
        class="form-container-label-select"
        v-model="selectedOption"
        >
        <option 
          value="" 
          disabled 
          selected
          class="custom-option"
          >Escoge aquí</option>
        <option 
          v-for="(option, index) in options"
          :key="index"  
          :value="option.option"
          class="custom-option"
          >
          {{ option.option }}
        </option>
        </select>
      </label>
      <CrushTextArea
        v-model="form.message"  
        class="form-container-text"
        label="Mensaje" 
        placeholder="escribe aquí con detalles"
        :valid-rules="rules.validateEmail"
      />
      <div class="form-container-button">
        <CrushButton 
          class="button"
          :class="{'background-validate' : formIsValid}"
          variant="primary"
          text="enviar"
          :disabled="!formIsValid"
          @click.prevent="sendEmail"
        />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form {
  margin: 0 auto;
  max-width: $desktop-lower-breakpoint;
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
    font-size: $font;
    text-align: center;
    margin: 24px 0;
    @media(min-width: $tablet-lower-breakpoint) {
      font-size: $sizeLarge;
      margin-bottom: 64px;
    }
  }
  &-container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: space-between;
    &-form {
      font-family: $font;
      width: 100%;
      ::placeholder {
        font-family: $font;
      }
      :deep(.input-container.active) {
        border-color: $yellow;
      }
      @media(min-width: $tablet-upper-breakpoint) {
        width: 40%;
      }
    }
    &-label {
      width: 100%;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      color: $white;
      gap: 12px;
      font-weight: bold;
      @media (min-width: $tablet-upper-breakpoint) {
        width: 40%;
      }    
      &-select{
        font-family: $font;
        font-size: $size;
        font-weight: 500;
        color: $white;
        background-color: transparent;
        appearance: none;
        outline: none;
        border: 1px solid $white;
        padding: 8px;
        border-radius: 8px;
        .custom-option {
          background: $black;
          color: $white;
        }
      }
    }
    &-text {
      width: 100%;
      margin-bottom: 24px ;
      :deep(.crush-textarea-container.is-focused) {
        border-color: $yellow;
      }
    }
    &-button {
      display: flex;
      justify-content: center;
      width: 100%;
      .button {
        width: 40%;
        background-color: $gray;
        border: 1px solid $gray;
        
      }
      .background-validate {
          background-color: $yellow;
          color: $black;
        }
    }
  }
}
</style>