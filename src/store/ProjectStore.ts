import { defineStore } from 'pinia';

import type { Project } from '@/typings/Project';

import casaPlaya from '@/assets/projects/casaPlaya.png';
import casa from '@/assets/projects/casa.png';

import fachadaSika from '@/assets/projects/FachadaSika.jpg';
import portonSika from '@/assets/projects/portonSika.jpg';

import galponCacao from '@/assets/projects/Clasificadora.jpg';
import entradaCacao from '@/assets/projects/PortonMCCH.jpg';

import fachadaPrincipal from '@/assets/projects/Fachada-principal.jpg';
import fachadaLateral from '@/assets/projects/Fachada-lateral.jpg';
import fachadaPosterior from '@/assets/projects/fachadaPosterior.png';

import fundation from '@/assets/projects/Fundacion.jpg';

import edificioOlmary from '@/assets/projects/Fachada-Olmary.jpg';

interface RootState {
  projects: Project[],
}

export const useProjectStore = defineStore('useProjectStore', {
  state: (): RootState => ({
    projects: [
      {
        images: [
          portonSika,
          fachadaSika,
        ],
        title: 'Sika',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-sika',
        location: 'Urdesa central'
      },
      {
        images: [
          galponCacao,
          entradaCacao,
        ],
        title: 'Galpón para secado de cacao',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-galpon',
        location: 'Urdesa central'
      },
      {
        images: [
          fachadaPrincipal,
          fachadaPosterior,
          fachadaLateral,
        ],
        title: 'Vivienda lago de Capeira',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-capeira',
        location: 'Urdesa central'
      },
      {
        images: [
          fundation,
        ],
        title: 'Fundación MCCH',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-MCCH',
        location: 'Urdesa central'
      },
      {
        images: [
          edificioOlmary,
        ],
        title: 'Edificio Olmary',
        description: [
          'Utilizamos materiales de alta calidad y mano de obra experta para garantizar que nuestras casas sean duraderas y atractivas. También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
          'También ofrecemos una amplia gama de opciones de personalización para que puedas crear la casa perfecta para tu familia.',
        ],
        id: '1-edificio',
        location: 'Urdesa central'
      },
    ],
  }),

})

export default useProjectStore;